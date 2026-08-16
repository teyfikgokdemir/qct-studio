(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desktopMotion = window.matchMedia('(min-width: 920px)');
  var clamp = function (value, min, max) { return Math.min(Math.max(value, min), max); };

  var initSignalRoom = function () {
    var hero = document.querySelector('[data-qct-hero]');
    var room = hero ? hero.querySelector('[data-signal-room]') : null;
    if (!hero || !room) return;

    var controls = Array.prototype.slice.call(room.querySelectorAll('[data-signal-control]'));
    var panels = Array.prototype.slice.call(room.querySelectorAll('[data-signal-panel]'));
    var promptText = room.querySelector('[data-prompt-text]');
    var activeIndex = 0;
    var intervalId = null;
    var heroVisible = true;
    var interactionPaused = false;

    if (!controls.length || controls.length !== panels.length) return;

    var activateState = function (index, focusControl) {
      activeIndex = (index + controls.length) % controls.length;
      controls.forEach(function (control, controlIndex) {
        var isActive = controlIndex === activeIndex;
        control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (isActive && focusControl) control.focus();
      });

      panels.forEach(function (panel, panelIndex) {
        var isActive = panelIndex === activeIndex;
        panel.hidden = !isActive;
        panel.classList.remove('is-active', 'is-entering');
        if (isActive) {
          panel.classList.add('is-active');
          panel.offsetWidth;
          panel.classList.add('is-entering');
          room.setAttribute('data-signal-state', panel.getAttribute('data-signal-panel'));
          var description = panel.querySelector('p');
          if (promptText && description) {
            promptText.classList.remove('is-changing');
            promptText.offsetWidth;
            promptText.textContent = description.textContent.trim();
            promptText.classList.add('is-changing');
          }
        }
      });
    };

    var stopRotation = function () {
      if (intervalId) window.clearInterval(intervalId);
      intervalId = null;
    };

    var startRotation = function () {
      stopRotation();
      if (reduceMotion || !heroVisible || interactionPaused || document.hidden) return;
      intervalId = window.setInterval(function () { activateState(activeIndex + 1, false); }, 4600);
    };

    controls.forEach(function (control, index) {
      control.addEventListener('click', function () { activateState(index, false); startRotation(); });
      control.addEventListener('keydown', function (event) {
        var nextIndex = null;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index + 1;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index - 1;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = controls.length - 1;
        if (nextIndex !== null) {
          event.preventDefault();
          activateState(nextIndex, true);
        }
      });
    });

    room.addEventListener('mouseenter', function () { interactionPaused = true; stopRotation(); });
    room.addEventListener('mouseleave', function () { interactionPaused = false; startRotation(); });
    room.addEventListener('focusin', function () { interactionPaused = true; stopRotation(); });
    room.addEventListener('focusout', function (event) {
      if (!room.contains(event.relatedTarget)) { interactionPaused = false; startRotation(); }
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        startRotation();
      }, { threshold: 0.12 }).observe(hero);
    }

    document.addEventListener('visibilitychange', startRotation);
    activateState(0, false);
    startRotation();
  };

  var initPageProgress = function () {
    if (reduceMotion) return;
    var ticking = false;
    var update = function () {
      var scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      var progress = clamp(window.scrollY / scrollable, 0, 1);
      document.documentElement.style.setProperty('--motion-progress', progress.toFixed(4));
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  };

  var initHeroMotion = function () {
    var hero = document.querySelector('[data-qct-hero]');
    var visual = hero ? hero.querySelector('[data-hero-visual]') : null;
    if (!hero || !visual || reduceMotion) return;

    var pointerX = 0;
    var pointerY = 0;
    var scrollY = 0;
    var frame = null;

    var render = function () {
      visual.style.setProperty('--hero-visual-x', (pointerX * 10).toFixed(2) + 'px');
      visual.style.setProperty('--hero-visual-y', (pointerY * 8).toFixed(2) + 'px');
      visual.style.setProperty('--hero-stage-y', (scrollY * 0.08).toFixed(2) + 'px');
      frame = null;
    };

    var requestRender = function () {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    hero.addEventListener('pointermove', function (event) {
      if (event.pointerType === 'touch') return;
      var rect = hero.getBoundingClientRect();
      pointerX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
      pointerY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
      hero.style.setProperty('--motion-pointer-x', ((pointerX + 0.5) * 100).toFixed(1) + '%');
      hero.style.setProperty('--motion-pointer-y', ((pointerY + 0.5) * 100).toFixed(1) + '%');
      requestRender();
    }, { passive: true });

    hero.addEventListener('pointerleave', function () {
      pointerX = 0;
      pointerY = 0;
      requestRender();
    });

    window.addEventListener('scroll', function () {
      var rect = hero.getBoundingClientRect();
      scrollY = clamp(-rect.top, 0, hero.offsetHeight);
      requestRender();
    }, { passive: true });
  };

  var initKineticStory = function () {
    var story = document.querySelector('[data-kinetic-story]');
    if (!story) return;

    var scenes = Array.prototype.slice.call(story.querySelectorAll('[data-kinetic-scene]'));
    var controls = Array.prototype.slice.call(story.querySelectorAll('[data-kinetic-control]'));
    var stage = story.querySelector('[data-kinetic-stage]');
    var cursor = stage ? stage.querySelector('.qct-kinetic__cursor') : null;
    var activeIndex = -1;
    var progress = 0;
    var frame = null;

    if (!scenes.length || scenes.length !== controls.length) return;

    var activate = function (index) {
      index = clamp(index, 0, scenes.length - 1);
      if (index === activeIndex) return;
      activeIndex = index;
      scenes.forEach(function (scene, sceneIndex) {
        var active = sceneIndex === index;
        scene.classList.toggle('is-active', active);
        scene.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      controls.forEach(function (control, controlIndex) {
        var active = controlIndex === index;
        control.classList.toggle('is-active', active);
        control.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    };

    var render = function () {
      if (desktopMotion.matches && !reduceMotion) {
        var rect = story.getBoundingClientRect();
        var range = Math.max(story.offsetHeight - window.innerHeight, 1);
        progress = clamp(-rect.top / range, 0, 1);
        var index = Math.min(Math.floor(progress * scenes.length), scenes.length - 1);
        story.style.setProperty('--kinetic-progress', progress.toFixed(4));
        activate(index);
      }
      frame = null;
    };

    var requestRender = function () {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    controls.forEach(function (control, index) {
      control.addEventListener('click', function () {
        if (desktopMotion.matches && !reduceMotion) {
          var targetProgress = (index + 0.12) / scenes.length;
          var storyTop = story.getBoundingClientRect().top + window.scrollY;
          var range = Math.max(story.offsetHeight - window.innerHeight, 1);
          window.scrollTo({ top: storyTop + range * targetProgress, behavior: 'smooth' });
        } else {
          activate(index);
        }
      });
    });

    if (stage && cursor && !reduceMotion) {
      stage.addEventListener('pointermove', function (event) {
        if (event.pointerType === 'touch') return;
        var rect = stage.getBoundingClientRect();
        cursor.style.left = (event.clientX - rect.left) + 'px';
        cursor.style.top = (event.clientY - rect.top) + 'px';
      }, { passive: true });
    }

    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender, { passive: true });
    desktopMotion.addEventListener('change', requestRender);
    activate(0);
    requestRender();
  };

  var initMotionReveals = function () {
    var selectors = [
      '[data-qct-reveal]',
      '.qct-problem .qct-section__header',
      '.qct-services .qct-section__header',
      '.qct-process .qct-section__header',
      '.qct-work .qct-section__header',
      '.qct-final-cta__panel',
      '.qct-contact__grid'
    ];
    var items = Array.prototype.slice.call(document.querySelectorAll(selectors.join(',')));
    if (!items.length) return;

    items.forEach(function (item, index) {
      item.setAttribute('data-qct-reveal', '');
      item.style.setProperty('--reveal-order', index % 4);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -9% 0px', threshold: 0.1 });

    items.forEach(function (item) { observer.observe(item); });
  };

  var initMagneticButtons = function () {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach(function (button) {
      button.addEventListener('pointermove', function (event) {
        var rect = button.getBoundingClientRect();
        var x = (event.clientX - rect.left - rect.width / 2) * 0.14;
        var y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        button.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
      });
      button.addEventListener('pointerleave', function () { button.style.transform = ''; });
    });
  };

  var initWorkShowcase = function () {
    var showcase = document.querySelector('[data-work-showcase]');
    if (!showcase) return;

    var panels = Array.prototype.slice.call(showcase.querySelectorAll('[data-work-panel]'));
    var controls = Array.prototype.slice.call(showcase.querySelectorAll('[data-work-control]'));
    var previous = showcase.querySelector('[data-work-previous]');
    var next = showcase.querySelector('[data-work-next]');
    if (!panels.length || panels.length !== controls.length || !previous || !next) return;

    var index = 0;
    var timer = null;
    var visible = true;
    var paused = false;
    showcase.classList.add('is-enhanced');

    var activate = function (newIndex) {
      index = (newIndex + panels.length) % panels.length;
      panels.forEach(function (panel, panelIndex) {
        var active = panelIndex === index;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
      controls.forEach(function (control, controlIndex) {
        control.setAttribute('aria-pressed', controlIndex === index ? 'true' : 'false');
      });
      previous.setAttribute('aria-label', controls[(index - 1 + controls.length) % controls.length].getAttribute('aria-label'));
      next.setAttribute('aria-label', controls[(index + 1) % controls.length].getAttribute('aria-label'));
    };

    var stop = function () { if (timer) window.clearInterval(timer); timer = null; };
    var start = function () {
      stop();
      if (!reduceMotion && visible && !paused && !document.hidden) timer = window.setInterval(function () { activate(index + 1); }, 6200);
    };

    controls.forEach(function (control, controlIndex) { control.addEventListener('click', function () { activate(controlIndex); start(); }); });
    previous.addEventListener('click', function () { activate(index - 1); start(); });
    next.addEventListener('click', function () { activate(index + 1); start(); });
    showcase.addEventListener('mouseenter', function () { paused = true; stop(); });
    showcase.addEventListener('mouseleave', function () { paused = false; start(); });
    showcase.addEventListener('focusin', function () { paused = true; stop(); });
    showcase.addEventListener('focusout', function (event) { if (!showcase.contains(event.relatedTarget)) { paused = false; start(); } });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; start(); }, { threshold: 0.15 }).observe(showcase);
    }

    activate(0);
    start();
  };

  var initProcessTimeline = function () {
    var timeline = document.querySelector('[data-process-timeline]');
    if (!timeline) return;
    var steps = Array.prototype.slice.call(timeline.querySelectorAll('[data-process-step]'));
    if (!steps.length) return;

    timeline.classList.add('is-enhanced');
    var activate = function (activeStep) {
      var activeIndex = steps.indexOf(activeStep);
      steps.forEach(function (step, index) {
        step.classList.toggle('is-current', index === activeIndex);
        step.classList.toggle('is-resolved', index < activeIndex);
      });
      timeline.style.setProperty('--process-progress-number', steps.length > 1 ? activeIndex / (steps.length - 1) : 1);
    };

    if (!reduceMotion && 'IntersectionObserver' in window) {
      activate(steps[0]);
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) activate(entry.target); });
      }, { rootMargin: '-28% 0px -38% 0px', threshold: 0.2 });
      steps.forEach(function (step) { observer.observe(step); });
    } else {
      steps.forEach(function (step) { step.classList.add('is-resolved'); });
      timeline.style.setProperty('--process-progress-number', 1);
    }
  };

  initSignalRoom();
  initPageProgress();
  initHeroMotion();
  initKineticStory();
  initMotionReveals();
  initMagneticButtons();
  initWorkShowcase();
  initProcessTimeline();
})();
