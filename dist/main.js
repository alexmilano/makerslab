/* Makers Lab · main.js
 * Vanilla, no deps. Handles:
 *  - Mobile menu toggle
 *  - Sticky CTA visibility on scroll
 *  - Form submission (mailto fallback)
 *  - Konami easter egg
 */
(function () {
  'use strict';

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
