(function () {
  'use strict';
  var root = document.querySelector('[data-v2-home]');
  if (!root) return;

  var header = document.querySelector('[data-v2-header]');
  var progress = document.querySelector('[data-v2-progress]');
  var menu = document.querySelector('[data-v2-menu]');
  var nav = document.querySelector('[data-v2-nav]');
  var frame = 0;

  function updateScroll() {
    frame = 0;
    var y = window.scrollY || 0;
    if (header) header.classList.toggle('is-scrolled', y > 28);
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    }
  }
  function requestScrollUpdate() {
    if (!frame) frame = window.requestAnimationFrame(updateScroll);
  }
  updateScroll();
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate, { passive: true });

  if (menu && nav) {
    function setMenu(open, restoreFocus) {
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (!open && restoreFocus) menu.focus();
    }
    menu.addEventListener('click', function () {
      var open = menu.getAttribute('aria-expanded') !== 'true';
      setMenu(open, false);
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenu(false, false);
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
  }

  function setupTabs(tabSelector, panelSelector, attribute) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(tabSelector));
    var panels = Array.prototype.slice.call(document.querySelectorAll(panelSelector));
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.getAttribute(attribute);
        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', String(active));
        });
        panels.forEach(function (panel) {
          panel.classList.toggle('is-active', panel.getAttribute(attribute.replace('-tab', '-panel')) === id);
        });
      });
    });
  }
  setupTabs('[data-market-tab]', '[data-market-panel]', 'data-market-tab');
  setupTabs('[data-system-tab]', '[data-system-panel]', 'data-system-tab');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (item) { item.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (item) { observer.observe(item); });
  }
})();
