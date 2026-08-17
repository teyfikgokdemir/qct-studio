(function () {
  'use strict';

  var form = document.querySelector('[data-diagnostic-form]');
  if (!form) return;

  var panels = Array.prototype.slice.call(form.querySelectorAll('[data-diagnostic-panel]'));
  var tabs = Array.prototype.slice.call(form.querySelectorAll('[data-diagnostic-tab]'));
  var progress = Array.prototype.slice.call(document.querySelectorAll('[data-diagnostic-progress] i'));
  var back = form.querySelector('[data-diagnostic-back]');
  var next = form.querySelector('[data-diagnostic-next]');
  var submit = form.querySelector('[data-diagnostic-submit]');
  var message = form.querySelector('[data-diagnostic-message]');
  var success = form.querySelector('[data-diagnostic-success]');
  var copyNode = form.querySelector('[data-diagnostic-copy]');
  var copy = copyNode ? JSON.parse(copyNode.textContent || '{}') : {};
  var current = 0;

  var started = form.querySelector('[data-diagnostic-started]');
  var referrer = form.querySelector('[data-diagnostic-referrer]');
  if (started) started.value = new Date().toISOString();
  if (referrer) referrer.value = document.referrer || '';
  var params = new URLSearchParams(window.location.search);
  form.querySelectorAll('[data-diagnostic-utm]').forEach(function (input) {
    var key = input.getAttribute('data-diagnostic-utm');
    input.value = key ? (params.get(key) || '') : '';
  });

  function showStep(index) {
    current = Math.max(0, Math.min(panels.length - 1, index));
    panels.forEach(function (panel, panelIndex) {
      var active = panelIndex === current;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
    tabs.forEach(function (tab, tabIndex) {
      tab.classList.toggle('active', tabIndex <= current);
      if (tabIndex === current) tab.setAttribute('aria-current', 'step');
      else tab.removeAttribute('aria-current');
    });
    progress.forEach(function (item, itemIndex) {
      item.classList.toggle('active', itemIndex <= current);
    });
    back.hidden = current === 0;
    next.hidden = current === panels.length - 1;
    submit.hidden = current !== panels.length - 1;
    message.textContent = '';
  }

  function validateCurrent() {
    var panel = panels[current];
    var required = Array.prototype.slice.call(panel.querySelectorAll('[required]'));
    for (var index = 0; index < required.length; index += 1) {
      var field = required[index];
      if (!field.checkValidity()) {
        message.textContent = copy.required || 'Complete the required fields.';
        field.reportValidity();
        return false;
      }
    }
    var checkboxGroup = panel.querySelector('[data-required-checkboxes]');
    if (checkboxGroup && !checkboxGroup.querySelector('input[type="checkbox"]:checked')) {
      message.textContent = copy.required || 'Complete the required fields.';
      var firstCheckbox = checkboxGroup.querySelector('input[type="checkbox"]');
      if (firstCheckbox) firstCheckbox.focus();
      return false;
    }
    return true;
  }

  function formDataToPayload() {
    var data = new FormData(form);
    var payload = {};
    data.forEach(function (value, key) {
      if (key === 'leaks') {
        if (!Array.isArray(payload.leaks)) payload.leaks = [];
        payload.leaks.push(String(value));
      } else {
        payload[key] = String(value);
      }
    });
    if (!payload.leaks) payload.leaks = [];
    return payload;
  }

  next.addEventListener('click', function () {
    if (!validateCurrent()) return;
    showStep(current + 1);
    form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });

  back.addEventListener('click', function () {
    showStep(current - 1);
    form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!validateCurrent()) return;

    submit.disabled = true;
    submit.textContent = submit.getAttribute('data-loading') || 'Sending…';
    message.textContent = '';

    try {
      var response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formDataToPayload()),
      });
      var result = await response.json().catch(function () { return {}; });
      if (!response.ok || !result.ok) throw new Error(result.error || 'request_failed');
      panels.forEach(function (panel) { panel.hidden = true; });
      form.querySelector('.dg-step-tabs').hidden = true;
      form.querySelector('.dg-form-actions').hidden = true;
      message.hidden = true;
      success.hidden = false;
      success.querySelector('h3').textContent = copy.successTitle || 'Diagnostic received.';
      success.querySelector('p').textContent = copy.successCopy || '';
      success.focus();
    } catch (error) {
      message.textContent = (copy.errorTitle || 'The diagnostic could not be sent.') + ' ' + (copy.errorCopy || 'Please try again.');
      submit.disabled = false;
      submit.textContent = (submit.getAttribute('data-label') || 'Send diagnostic') + ' →';
    }
  });

  showStep(0);
})();
