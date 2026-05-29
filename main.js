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

  // ---------- 3. Contact form ----------
  const form = document.getElementById('contact-form');
  if (form) {
    const status = form.querySelector('.form__status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const peque = (data.get('peque') || '').toString().trim();
      const edad = (data.get('edad') || '').toString().trim();
      const adulto = (data.get('adulto') || '').toString().trim();
      const tel = (data.get('tel') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const intereses = (data.get('intereses') || '').toString().trim();

      // Minimal validation — let the browser do most of the work.
      if (!peque || !edad || !adulto || !tel || !email) {
        status.textContent = '▸ Falta algún campo obligatorio.';
        status.className = 'form__status error';
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const subject = encodeURIComponent('Clase de prueba — ' + peque + ' (' + edad + ' años)');
      const body = encodeURIComponent(
        'Peque: ' + peque + '\n' +
        'Edad: ' + edad + '\n' +
        'Adulto: ' + adulto + '\n' +
        'Teléfono: ' + tel + '\n' +
        'Email: ' + email + '\n' +
        (intereses ? '\nIntereses: ' + intereses : '')
      );
      window.location.href = 'mailto:info@makerslab.com?subject=' + subject + '&body=' + body;

      status.textContent = '▸ Abriendo tu app de correo… si no se abre, escríbenos a info@makerslab.com';
      status.className = 'form__status ok';
    });
  }

  // ---------- 4. Konami easter egg ----------
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
