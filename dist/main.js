/* Makers Lab · main.js
 * Vanilla, no deps. Handles:
 *  - Mobile menu toggle
 *  - Sticky CTA visibility on scroll
 *  - Form submission (Formspree)
 *  - Hero slider
 *  - Konami easter egg
 *  - Conversion hooks (data-conversion -> window.gtag / dataLayer if present)
 *  - UTM survival (capture + propagate to internal links and form fields)
 */
(function () {
  'use strict';

  // ---------- 0. Google Ads conversion config ----------
  // Cuenta Makers Lab (9486667750). gtag.js se carga abajo y las conversiones
  // se disparan vía fireConversion(). Para añadir otra conversión: crea la
  // acción en Google Ads (Sitio web → "Agregar la etiqueta manualmente") y
  // añade aquí el evento -> etiqueta (lo que va tras la "/" en send_to).
  var GOOGLE_ADS_ID = 'AW-17199889301';       // ID de conversión de la cuenta
  var ADS_CONVERSION_LABELS = {
    form_submit:    'EW_WCPr_7rgcEJX3xYlA',   // acción "Formulario de contacto"
    whatsapp_click: 'Bft3CMDMhbkcEJX3xYlA',   // acción "Clic WhatsApp"
    phone_click:    '1toLCIL1hLkcEJX3xYlA'    // acción "Clic teléfono"
  };
  // Activo solo cuando el ID ya no es el placeholder (no contiene "X").
  var ADS_READY = GOOGLE_ADS_ID.indexOf('X') === -1;

  // ---------- 0.1. Carga de gtag.js (solo si hay ID real) ----------
  if (ADS_READY) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID);
    var gs = document.createElement('script');
    gs.async = true;
    gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GOOGLE_ADS_ID;
    document.head.appendChild(gs);
  }

  // ---------- 0.2. Conversion dispatcher (safe no-op without GA4) ----------
  function fireConversion(name, params) {
    if (!name) return;
    var payload = Object.assign({}, params || {});
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, payload);
        // Conversión de Google Ads si este evento tiene etiqueta configurada.
        var label = ADS_CONVERSION_LABELS[name];
        if (ADS_READY && label && label.indexOf('LABEL') === -1) {
          window.gtag('event', 'conversion', {
            send_to: GOOGLE_ADS_ID + '/' + label,
            value: 1.0,
            currency: 'EUR'
          });
        }
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(Object.assign({ event: name }, payload));
      }
    } catch (_) { /* silent */ }
  }
  window.makersLabFireConversion = fireConversion;

  // ---------- 1. Mobile menu ----------
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if (burger && menu) {
    const toggle = (open) => {
      const expanded = typeof open === 'boolean' ? open : burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(expanded));
      menu.hidden = !expanded;
    };
    burger.addEventListener('click', () => toggle());
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') toggle(false);
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggle(false);
    });
  }

  // ---------- 2. Sticky CTA ----------
  const sticky = document.getElementById('sticky-cta');
  if (sticky) {
    sticky.hidden = false;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const show = y > 700 && y < max - 400;
        sticky.classList.toggle('is-visible', show);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- 3. Contact form (Formspree) ----------
  const form = document.getElementById('contact-form');
  if (form) {
    const status = form.querySelector('.form__status');
    const submitBtn = form.querySelector('.form__submit');
    const endpoint = form.getAttribute('action');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const peque = (data.get('peque') || '').toString().trim();
      const edad = (data.get('edad') || '').toString().trim();
      const adulto = (data.get('adulto') || '').toString().trim();
      const tel = (data.get('tel') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();

      if (!peque || !edad || !adulto || !tel || !email) {
        status.textContent = '▸ Falta algún campo obligatorio.';
        status.className = 'form__status error';
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      data.set('_subject', 'Clase de prueba — ' + peque + ' (' + edad + ' años)');
      data.set('_replyto', email);

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';
      status.textContent = '';
      status.className = 'form__status';

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
          status.textContent = '▸ ¡Recibido! Te escribimos en menos de 24h laborables.';
          status.className = 'form__status ok';
          fireConversion('form_submit', {
            landing: document.body.dataset.landing || 'home',
            form_name: 'clase_prueba'
          });
          fireConversion('generate_lead', {
            landing: document.body.dataset.landing || 'home',
            form_name: 'clase_prueba'
          });
        } else {
          const json = await res.json().catch(() => ({}));
          const msg = json.errors && json.errors[0] && json.errors[0].message ? json.errors[0].message : 'No se pudo enviar. Escríbenos a info@makerslab.com o por WhatsApp.';
          status.textContent = '▸ ' + msg;
          status.className = 'form__status error';
        }
      } catch (err) {
        status.textContent = '▸ Sin conexión. Escríbenos a info@makerslab.com o por WhatsApp.';
        status.className = 'form__status error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  // ---------- 4. Hero slider ----------
  const slider = document.querySelector('[data-slider]');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slider__slide'));
    const dotsWrap = slider.querySelector('.slider__dots');
    const prevBtn = slider.querySelector('.slider__btn--prev');
    const nextBtn = slider.querySelector('.slider__btn--next');
    let current = 0;
    let timer = null;
    const INTERVAL = 4200;

    if (slides.length > 1 && dotsWrap) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider__dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Foto ' + (i + 1));
        if (i === 0) dot.setAttribute('aria-current', 'true');
        dot.addEventListener('click', () => { go(i); restart(); });
        dotsWrap.appendChild(dot);
      });
    }
    const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll('.slider__dot')) : [];

    function go(i) {
      if (slides.length === 0) return;
      current = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('is-active', idx === current));
      dots.forEach((d, idx) => {
        if (idx === current) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    }
    function next() { go(current + 1); }
    function prev() { go(current - 1); }
    function start() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (slides.length < 2) return;
      stop();
      timer = setInterval(next, INTERVAL);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    // Touch swipe
    let touchX = null;
    slider.addEventListener('touchstart', (e) => {
      touchX = e.changedTouches[0].screenX;
      stop();
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
      touchX = null;
      start();
    }, { passive: true });

    // Pause when off-screen
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { e.isIntersecting ? start() : stop(); });
      }, { threshold: 0.25 });
      io.observe(slider);
    } else {
      start();
    }
  }

  // ---------- 4.5. Click-based conversion hooks ----------
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-conversion]');
    if (!el) return;
    var name = el.getAttribute('data-conversion');
    fireConversion(name, {
      landing: el.getAttribute('data-landing') || document.body.dataset.landing || 'home',
      cta_text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80),
      cta_href: el.getAttribute('href') || ''
    });
    if (name === 'whatsapp_click' || name === 'phone_click') {
      fireConversion('generate_lead', {
        landing: el.getAttribute('data-landing') || document.body.dataset.landing || 'home',
        channel: name === 'whatsapp_click' ? 'whatsapp' : 'phone'
      });
    }
  }, true);

  // ---------- 4.6. UTM survival ----------
  (function utmSurvival() {
    var KEY = 'mk_utm';
    var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    var params = new URLSearchParams(window.location.search);
    var captured = {};
    KEYS.forEach(function (k) { if (params.has(k)) captured[k] = params.get(k); });
    try {
      if (Object.keys(captured).length) {
        sessionStorage.setItem(KEY, JSON.stringify(captured));
      }
    } catch (_) {}

    var stored = {};
    try { stored = JSON.parse(sessionStorage.getItem(KEY) || '{}') || {}; } catch (_) {}
    if (!Object.keys(stored).length) return;

    // Append to same-origin internal links (skip anchors, mailto, tel, wa.me, maps)
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (!href || href[0] === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;
      try {
        var url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        Object.keys(stored).forEach(function (k) {
          if (!url.searchParams.has(k)) url.searchParams.set(k, stored[k]);
        });
        a.setAttribute('href', url.pathname + (url.search ? url.search : '') + url.hash);
      } catch (_) {}
    });

    // Populate hidden inputs in the contact form
    var form = document.getElementById('contact-form');
    if (form) {
      Object.keys(stored).forEach(function (k) {
        if (form.querySelector('input[name="' + k + '"]')) return;
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = stored[k];
        form.appendChild(input);
      });
    }
  })();

  // ---------- 5. Konami easter egg ----------
  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let idx = 0;
  document.addEventListener('keydown', (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === seq[idx]) {
      idx++;
      if (idx === seq.length) {
        idx = 0;
        confetti();
      }
    } else {
      idx = k === seq[0] ? 1 : 0;
    }
  });

  function confetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const palette = ['#C8F23C', '#E5197E', '#FFD83A', '#2BCFEE', '#FF6B1A'];
    const root = document.createElement('div');
    Object.assign(root.style, {
      position: 'fixed', inset: '0', pointerEvents: 'none', overflow: 'hidden', zIndex: '9998'
    });
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      const size = 6 + Math.random() * 10;
      Object.assign(p.style, {
        position: 'absolute',
        top: '-20px',
        left: Math.random() * 100 + '%',
        width: size + 'px',
        height: (size * 0.6) + 'px',
        background: palette[i % palette.length],
        transform: 'rotate(' + (Math.random() * 360) + 'deg)',
        animation: 'mk-fall ' + (1.6 + Math.random() * 1.2) + 's ' + (Math.random() * 0.4) + 's ease-in forwards'
      });
      root.appendChild(p);
    }
    if (!document.getElementById('mk-kf')) {
      const sty = document.createElement('style');
      sty.id = 'mk-kf';
      sty.textContent = '@keyframes mk-fall{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(120vh) rotate(720deg);opacity:0.85}}';
      document.head.appendChild(sty);
    }
    document.body.appendChild(root);
    setTimeout(() => root.remove(), 3500);
  }
})();
