// VARIATION A — "Lab Notebook"
// Cream paper · lime green primary · magenta secondary · black ink.
// Editorial, playful, illustrative. Fraunces serif + DM Sans body.

const A_PALETTE = {
  bg:    "#F4EFE3",
  paper: "#FBF8F0",
  ink:   "#131414",
  lime:  "#C8F23C",
  limeD: "#9FCF1F",
  mag:   "#E5197E",
  magD:  "#B70F60",
  mute:  "#7C766B",
};

const aCss = `
  .va-root { background: ${A_PALETTE.bg}; color: ${A_PALETTE.ink}; font-family: 'DM Sans', system-ui, sans-serif; position: relative; }
  .va-root *, .va-root *::before, .va-root *::after { box-sizing: border-box; }
  .va-paper-grid {
    background-image:
      radial-gradient(circle, rgba(19,20,20,0.10) 1px, transparent 1.4px);
    background-size: 22px 22px;
    background-position: 0 0;
  }
  .va-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 64px 0; }
  .va-nav-links { display: flex; gap: 6px; align-items: center; }
  .va-nav-links a { color: ${A_PALETTE.ink}; text-decoration: none; font-size: 15px; font-weight: 500; padding: 10px 14px; border-radius: 999px; transition: background .15s; }
  .va-nav-links a:hover { background: rgba(19,20,20,0.06); }
  .va-cta {
    display: inline-flex; align-items: center; gap: 10px;
    background: ${A_PALETTE.mag}; color: white; text-decoration: none;
    padding: 14px 22px; border-radius: 999px;
    font-weight: 600; font-size: 15px; letter-spacing: 0.01em;
    box-shadow: 0 4px 0 ${A_PALETTE.magD}, 0 12px 30px rgba(229,25,126,0.25);
    transition: transform .12s, box-shadow .12s;
    border: none; cursor: pointer;
  }
  .va-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 0 ${A_PALETTE.magD}, 0 16px 36px rgba(229,25,126,0.32); }
  .va-cta:active { transform: translateY(2px); box-shadow: 0 2px 0 ${A_PALETTE.magD}, 0 8px 18px rgba(229,25,126,0.2); }
  .va-cta--ghost { background: transparent; color: ${A_PALETTE.ink}; border: 1.5px solid ${A_PALETTE.ink}; box-shadow: 4px 4px 0 ${A_PALETTE.ink}; }
  .va-cta--ghost:hover { box-shadow: 6px 6px 0 ${A_PALETTE.ink}; transform: translate(-2px,-2px); }
  .va-display { font-family: 'Fraunces', 'Times New Roman', serif; font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; }
  .va-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  .va-label { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: ${A_PALETTE.mag}; font-weight: 600; }
  .va-highlight { background: ${A_PALETTE.lime}; padding: 0 .12em; box-decoration-break: clone; }
  .va-italic { font-style: italic; font-weight: 500; }
  .va-card { background: ${A_PALETTE.paper}; border: 1.5px solid ${A_PALETTE.ink}; border-radius: 22px; box-shadow: 6px 6px 0 ${A_PALETTE.ink}; }
  .va-pill { display: inline-flex; align-items: center; gap: 8px; border: 1.5px solid ${A_PALETTE.ink}; border-radius: 999px; padding: 7px 14px; font-size: 12px; font-weight: 600; background: ${A_PALETTE.paper}; }
  .va-tag { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 11px; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; text-transform: uppercase; }

  /* Rocket trajectory (dotted curve, à la logo) */
  .va-traj { position: absolute; pointer-events: none; }

  /* Doodle annotations */
  .va-doodle { position: absolute; pointer-events: none; font-family: 'Caveat', 'Caprasimo', cursive; color: ${A_PALETTE.mag}; font-size: 18px; }

  /* Hover wiggle */
  @keyframes va-wiggle { 0%,100% { transform: rotate(-2deg);} 50% { transform: rotate(2deg);} }
  .va-wiggle:hover { animation: va-wiggle .4s ease-in-out; }

  /* Letter cards */
  .va-steam-letter { font-family: 'Fraunces', serif; font-weight: 900; font-size: 92px; line-height: 0.85; }

  /* FAQ accordion */
  .va-faq { border-top: 1.5px solid ${A_PALETTE.ink}; }
  .va-faq summary { list-style: none; padding: 22px 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: 'Fraunces', serif; font-weight: 700; font-size: 22px; }
  .va-faq summary::-webkit-details-marker { display: none; }
  .va-faq summary::after { content: "+"; font-size: 28px; transition: transform .2s; font-family: 'DM Sans', sans-serif; font-weight: 400; }
  .va-faq[open] summary::after { transform: rotate(45deg); color: ${A_PALETTE.mag}; }
  .va-faq p { padding: 0 0 22px; color: ${A_PALETTE.mute}; font-size: 16px; line-height: 1.6; max-width: 70ch; }

  /* Marker pulse */
  @keyframes va-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }

  /* Anchor scroll smoothing for in-artboard nav */
  .va-root a[href^="#"] { scroll-behavior: smooth; }
`;

const A_TEXT = {
  hero_eyebrow: "Academia STEAM · 5 a 11 años · Rivas-Vaciamadrid",
  hero_h1_top: "Donde las ideas",
  hero_h1_mid: "salvajes",
  hero_h1_bot: "se convierten en proyectos.",
  hero_sub: "Programación, robótica, ciencia y arte para mentes curiosas. Aprenden haciendo, fallando, repitiendo. Y celebrando.",
  cta_primary: "Inscríbete",
  cta_secondary: "Reserva clase de prueba",
};

const A_STEAM = [
  { L: "S", word: "Science",     subtitle: "Experimentos que se quedan grabados.", color: A_PALETTE.lime, ink: A_PALETTE.ink },
  { L: "T", word: "Technology",  subtitle: "Programación con Scratch, MakeCode y Mario Maker.", color: "#2BCFEE", ink: A_PALETTE.ink },
  { L: "E", word: "Engineering", subtitle: "Robots con WeDo, Spike y Microbit.", color: "#FFD83A", ink: A_PALETTE.ink },
  { L: "A", word: "Art",         subtitle: "Diseño visual, narrativa interactiva y stop-motion.", color: A_PALETTE.mag, ink: "#fff" },
  { L: "M", word: "Mathematics", subtitle: "Lógica, patrones y mates que se ven.", color: "#FF6B1A", ink: A_PALETTE.ink },
];

const A_PROGRAMS = [
  { age: "5–6", title: "Mini Makers",    desc: "Primer contacto con la lógica, el código por bloques y experimentos sensoriales.", schedule: "Mar/Jue · 17:00–18:00", color: A_PALETTE.lime },
  { age: "7–8", title: "Code & Build",   desc: "Scratch, WeDo y proyectos en equipo. Construyen su primer robot.",                schedule: "Lun/Mié · 17:00–18:30", color: "#2BCFEE" },
  { age: "9–11",title: "Lab Avanzado",   desc: "Microbit, Spike Prime, diseño de videojuegos y electrónica.",                       schedule: "Lun/Mié · 18:30–20:00", color: A_PALETTE.mag },
  { age: "Verano", title: "Campamento STEAM", desc: "Una semana intensiva. Cada día un reto distinto: rover, app, dispositivo.",   schedule: "Jul · 9:00–14:00",     color: "#FF6B1A" },
];

const A_TESTIMONIALS = [
  { quote: "Mi hija Lucía llega cada martes preguntando '¿hoy también?'. Y los miércoles también pregunta.", name: "Marta R.", role: "Madre · 8 años", tone: "warm" },
  { quote: "Mateo construyó un brazo robótico en casa con cartón después de su clase. La curiosidad no se desactiva al salir.", name: "Diego L.", role: "Padre · 10 años", tone: "lime" },
  { quote: "Lo mejor no es lo que aprenden, es cómo lo cuentan. Hablan de su código como otros hablan de fútbol.", name: "Sara P.", role: "Madre · 7 años", tone: "magenta" },
];

const A_PLANS = [
  { name: "Curioso",  freq: "1 día / semana", price: "59€",  unit: "/mes", features: ["1 disciplina a elegir", "Materiales incluidos", "Grupo reducido (máx. 8)"], featured: false },
  { name: "Maker",    freq: "2 días / semana", price: "99€",  unit: "/mes", features: ["2 disciplinas a elegir", "Acceso a proyectos abiertos", "Showcase trimestral", "Materiales incluidos"], featured: true },
  { name: "Lab Pro",  freq: "3 días / semana", price: "139€", unit: "/mes", features: ["Disciplinas combinadas", "Proyecto personal guiado", "Showcase trimestral", "Kit para casa"], featured: false },
];

const A_FAQ = [
  { q: "¿Necesita conocimientos previos?", a: "Ninguno. Cada programa parte de cero y avanza al ritmo del grupo. Lo que sí pedimos es ganas de tocar, romper y volver a montar." },
  { q: "¿Pueden empezar en cualquier momento del curso?", a: "Sí. Ofrecemos una clase de prueba gratis para que conozcan al grupo y al equipo. Si encaja, se incorporan la semana siguiente." },
  { q: "¿Qué pasa si mi hijo o hija ya programa?", a: "Le ponemos retos. Tenemos un programa avanzado donde diseñan videojuegos completos, automatizan dispositivos y diseñan sus propios circuitos." },
  { q: "¿Qué incluye la cuota?", a: "Materiales, kits electrónicos, software con licencia educativa y showcases trimestrales abiertos a familias. Sin matrícula." },
  { q: "¿Hay descuentos por hermanos?", a: "Sí, 15% sobre el segundo hermano y 20% sobre el tercero. Sin trampa." },
];

// === Mini illustration helpers ===
const ARocket = ({ size = 40, color = A_PALETTE.mag }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <path d="M20 4 C26 10 28 18 28 24 L24 28 L16 28 L12 24 C12 18 14 10 20 4 Z" fill={A_PALETTE.paper} stroke={A_PALETTE.ink} strokeWidth="2"/>
    <circle cx="20" cy="16" r="3" fill={color} stroke={A_PALETTE.ink} strokeWidth="2"/>
    <path d="M16 28 L13 35 L17 32 L20 36 L23 32 L27 35 L24 28 Z" fill={A_PALETTE.lime} stroke={A_PALETTE.ink} strokeWidth="2"/>
  </svg>
);
const ABot = ({ size = 56 }) => (
  <svg viewBox="0 0 56 56" width={size} height={size}>
    <rect x="10" y="14" width="36" height="30" rx="6" fill={A_PALETTE.lime} stroke={A_PALETTE.ink} strokeWidth="2"/>
    <circle cx="20" cy="26" r="3" fill={A_PALETTE.ink}/>
    <circle cx="36" cy="26" r="3" fill={A_PALETTE.ink}/>
    <rect x="20" y="34" width="16" height="3" rx="1.5" fill={A_PALETTE.ink}/>
    <line x1="28" y1="6" x2="28" y2="14" stroke={A_PALETTE.ink} strokeWidth="2"/>
    <circle cx="28" cy="5" r="3" fill={A_PALETTE.mag} stroke={A_PALETTE.ink} strokeWidth="2"/>
    <rect x="14" y="44" width="10" height="6" fill={A_PALETTE.ink}/>
    <rect x="32" y="44" width="10" height="6" fill={A_PALETTE.ink}/>
  </svg>
);
const AAtom = ({ size = 56 }) => (
  <svg viewBox="0 0 56 56" width={size} height={size}>
    <circle cx="28" cy="28" r="4" fill={A_PALETTE.mag} stroke={A_PALETTE.ink} strokeWidth="2"/>
    <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke={A_PALETTE.ink} strokeWidth="2"/>
    <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke={A_PALETTE.ink} strokeWidth="2" transform="rotate(60 28 28)"/>
    <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke={A_PALETTE.ink} strokeWidth="2" transform="rotate(-60 28 28)"/>
  </svg>
);

// === Layout ===
const VariationA = ({ fontSet = "fraunces", heroLayout = "split" }) => {
  const rootRef = React.useRef(null);
  const easter = useEasterEgg(rootRef);
  const [logoClicks, setLogoClicks] = React.useState(0);
  const onLogoClick = () => {
    const n = logoClicks + 1;
    setLogoClicks(n);
    if (n >= 3) { easter.trigger(); setLogoClicks(0); }
    setTimeout(() => setLogoClicks(0), 600);
  };

  // typography swap from tweaks
  const displayFamily = {
    fraunces: "'Fraunces', 'Times New Roman', serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    archivo: "'Archivo Black', system-ui, sans-serif",
  }[fontSet] || "'Fraunces', serif";

  return (
    <div ref={rootRef} className="va-root va-paper-grid" style={{ minHeight: 5000, overflow: "hidden" }}>
      <style>{aCss}</style>

      {/* === NAV === */}
      <nav className="va-nav">
        <a href="#" onClick={(e) => { e.preventDefault(); onLogoClick(); }} title="psst… haz triple click">
          <Logo height={58} />
        </a>
        <div className="va-nav-links">
          <a href="#programas">Programas</a>
          <a href="#disciplinas">STEAM</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="va-cta" href="#contacto">Inscríbete <span style={{ fontSize: 16 }}>→</span></a>
      </nav>

      {/* === HERO === */}
      <section style={{ padding: "60px 64px 0", position: "relative" }}>
        {/* Rocket trajectory across hero */}
        <svg className="va-traj" style={{ top: 30, left: "55%", width: 540, height: 260 }} viewBox="0 0 540 260">
          <path d="M10 200 Q 150 -20 530 100" fill="none" stroke={A_PALETTE.ink} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round"/>
        </svg>
        <div style={{ position: "absolute", top: 38, left: "calc(55% + 510px)", transform: "translateX(-50%)" }}>
          <ARocket size={48} />
        </div>

        <div style={{ display: heroLayout === "stacked" ? "block" : "grid", gridTemplateColumns: heroLayout === "split" ? "1.15fr 1fr" : "1fr", gap: 56, alignItems: "center", position: "relative" }}>
          <div>
            <span className="va-label">{A_TEXT.hero_eyebrow}</span>
            <h1 className="va-display" style={{ fontFamily: displayFamily, fontSize: heroLayout === "stacked" ? 120 : 94, margin: "18px 0 24px" }}>
              {A_TEXT.hero_h1_top}
              <br/>
              <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>{A_TEXT.hero_h1_mid}</span>
              <span style={{ display: "inline-block", marginLeft: 12 }}>
                <AAtom size={fontSet === "fraunces" ? 70 : 60} />
              </span>
              <br/>
              <span className="va-highlight">se convierten</span> en proyectos.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: A_PALETTE.mute, maxWidth: 540, marginBottom: 32 }}>
              {A_TEXT.hero_sub}
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a className="va-cta" href="#contacto">{A_TEXT.cta_primary} <span style={{ fontSize: 16 }}>→</span></a>
              <a className="va-cta va-cta--ghost" href="#programas">{A_TEXT.cta_secondary}</a>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 8 }}>
                <div style={{ display: "flex" }}>
                  {[A_PALETTE.lime, "#2BCFEE", "#FFD83A", A_PALETTE.mag].map((c, i) => (
                    <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: `2px solid ${A_PALETTE.paper}`, marginLeft: i ? -10 : 0 }} />
                  ))}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.3 }}>
                  <strong>+200 familias</strong><br/>
                  <span style={{ color: A_PALETTE.mute }}>ya forman parte</span>
                </div>
              </div>
            </div>
          </div>

          {heroLayout === "split" && (
            <div style={{ position: "relative" }}>
              <div className="va-card" style={{ padding: 14, transform: "rotate(2deg)", position: "relative" }}>
                <PhotoPlaceholder tone="warm" label="HERO" hint="Kids con robot y microscopio" height={460} radius={12} />
                <div className="va-pill" style={{ position: "absolute", bottom: -16, left: 18, background: A_PALETTE.lime }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: A_PALETTE.ink }} /> En el laboratorio · hoy
                </div>
                <div style={{ position: "absolute", top: -22, right: -22 }}>
                  <ABot size={64} />
                </div>
              </div>
              <div className="va-doodle" style={{ bottom: -38, right: 40, transform: "rotate(-4deg)" }}>
                ← su primer robot
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Marquee strip */}
      <div style={{ marginTop: 70, borderTop: `1.5px solid ${A_PALETTE.ink}`, borderBottom: `1.5px solid ${A_PALETTE.ink}`, background: A_PALETTE.lime }}>
        <Marquee
          items={["Scratch", "WeDo", "Microbit", "Spike Prime", "Arduino", "MakeCode", "Mario Maker", "Stop-motion", "Electrónica", "Diseño 3D"]}
          fontFamily={displayFamily}
          fontSize={28} fontWeight={900} color={A_PALETTE.ink}
          separator="✦" py={18} speed={40}
        />
      </div>

      {/* === STEAM letters === */}
      <section id="disciplinas" style={{ padding: "100px 64px 60px", position: "relative" }}>
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <span className="va-label">02 · Disciplinas</span>
          <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "10px 0 14px" }}>
            Cinco letras. <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>Un millón</span> de cosas por descubrir.
          </h2>
          <p style={{ fontSize: 17, color: A_PALETTE.mute, maxWidth: 600, lineHeight: 1.55 }}>
            Cada disciplina se mezcla con las otras. Un proyecto de programación termina pintándose, uno de ciencia acaba en código.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
          {A_STEAM.map((d, i) => (
            <div key={d.L} className="va-card va-wiggle" style={{ background: d.color, color: d.ink, padding: "20px 18px 22px", transform: `rotate(${[-1.5, 1, -0.5, 1.5, -1][i]}deg)` }}>
              <div className="va-steam-letter">{d.L}</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{d.word}</div>
              <div style={{ fontSize: 14, marginTop: 12, lineHeight: 1.4, fontWeight: 500 }}>{d.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === PROGRAMS === */}
      <section id="programas" style={{ padding: "60px 64px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, gap: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 600 }}>
            <span className="va-label">03 · Programas</span>
            <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "10px 0 14px" }}>
              Programas <span className="va-highlight">para cada edad</span>
            </h2>
          </div>
          <a className="va-cta va-cta--ghost" href="#contacto">Ver horarios completos →</a>
        </div>

        <div style={{ background: A_PALETTE.paper, border: `1.5px solid ${A_PALETTE.ink}`, borderRadius: 22, overflow: "hidden", boxShadow: `6px 6px 0 ${A_PALETTE.ink}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1.4fr 2fr 1.2fr 100px", padding: "16px 24px", borderBottom: `1.5px solid ${A_PALETTE.ink}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: A_PALETTE.mute, fontWeight: 600 }}>
            <div>Edad</div><div>Programa</div><div>Descripción</div><div>Horario</div><div></div>
          </div>
          {A_PROGRAMS.map((p, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1.4fr 2fr 1.2fr 100px", padding: "26px 24px", alignItems: "center", borderBottom: i < A_PROGRAMS.length - 1 ? `1px dashed ${A_PALETTE.ink}30` : "none", transition: "background .2s", cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.background = A_PALETTE.bg}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <div><span className="va-tag" style={{ background: p.color, color: A_PALETTE.ink, border: `1.5px solid ${A_PALETTE.ink}` }}>{p.age} años</span></div>
              <div style={{ fontFamily: displayFamily, fontSize: 28, fontWeight: 700 }}>{p.title}</div>
              <div style={{ fontSize: 15, color: A_PALETTE.mute, lineHeight: 1.5 }}>{p.desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600 }}>{p.schedule}</div>
              <div style={{ textAlign: "right", fontSize: 22, color: A_PALETTE.mag }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section style={{ padding: "60px 64px", position: "relative" }}>
        <span className="va-label">04 · Familias</span>
        <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 56, margin: "10px 0 40px", maxWidth: 700 }}>
          Lo que cuentan <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>las familias</span>.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {A_TESTIMONIALS.map((t, i) => (
            <div key={i} className="va-card" style={{ padding: 28, background: i === 1 ? A_PALETTE.lime : A_PALETTE.paper, transform: `rotate(${[-0.8, 0.6, -0.4][i]}deg)` }}>
              <div style={{ fontFamily: displayFamily, fontSize: 60, lineHeight: 0.5, color: A_PALETTE.mag, marginBottom: 8 }}>“</div>
              <p style={{ fontFamily: displayFamily, fontSize: 22, lineHeight: 1.3, fontWeight: 500, margin: "0 0 24px" }}>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: `1.5px dashed ${A_PALETTE.ink}40` }}>
                <PhotoPlaceholder tone={t.tone} label="" hint="" height={44} width={44} radius={999} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: A_PALETTE.mute, fontFamily: "'JetBrains Mono', monospace" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SAGAN QUOTE === */}
      <section style={{ padding: "80px 64px", margin: "60px 0", background: A_PALETTE.ink, color: A_PALETTE.paper, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 380, height: 380, borderRadius: "50%", background: A_PALETTE.mag, opacity: 0.9 }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: 220, height: 220, borderRadius: "50%", background: A_PALETTE.lime, opacity: 0.9 }} />
        {/* stars */}
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i*37)%100}%`, top: `${(i*53)%100}%`, width: 2, height: 2, borderRadius: "50%", background: "white", opacity: 0.4 }} />
        ))}
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span className="va-label" style={{ color: A_PALETTE.lime }}>05 · Por qué importa</span>
          <blockquote style={{ margin: "20px 0", fontFamily: displayFamily, fontSize: 54, lineHeight: 1.15, fontWeight: 500, fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>
            "Vivimos en una sociedad profundamente dependiente de la ciencia y la tecnología, y en la que casi nadie sabe nada de estos temas."
          </blockquote>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: A_PALETTE.lime, marginTop: 30 }}>
            — Carl Sagan
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="precios" style={{ padding: "60px 64px" }}>
        <div style={{ maxWidth: 700, marginBottom: 50 }}>
          <span className="va-label">06 · Planes</span>
          <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "10px 0 14px" }}>
            Precios <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>claros</span>. Sin matrícula.
          </h2>
          <p style={{ fontSize: 17, color: A_PALETTE.mute, lineHeight: 1.5 }}>
            Elige cuántos días por semana vienen. Cambias de plan cuando quieras.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {A_PLANS.map((plan, i) => (
            <div key={i} className="va-card" style={{
              padding: 32,
              background: plan.featured ? A_PALETTE.ink : A_PALETTE.paper,
              color: plan.featured ? A_PALETTE.paper : A_PALETTE.ink,
              transform: plan.featured ? "scale(1.04)" : "none",
              position: "relative",
            }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -14, left: 28, background: A_PALETTE.lime, color: A_PALETTE.ink, padding: "6px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", border: `1.5px solid ${A_PALETTE.ink}` }}>
                  Más popular
                </div>
              )}
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: plan.featured ? A_PALETTE.lime : A_PALETTE.mag, fontWeight: 600 }}>{plan.name}</div>
              <div style={{ fontSize: 14, marginTop: 4, opacity: 0.7 }}>{plan.freq}</div>
              <div style={{ display: "flex", alignItems: "baseline", marginTop: 22, marginBottom: 24 }}>
                <span className="va-display" style={{ fontFamily: displayFamily, fontSize: 72 }}>{plan.price}</span>
                <span style={{ fontSize: 16, marginLeft: 6, opacity: 0.7 }}>{plan.unit}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: plan.featured ? A_PALETTE.lime : A_PALETTE.mag, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a className="va-cta" href="#contacto" style={{ marginTop: 28, display: "inline-flex", background: plan.featured ? A_PALETTE.lime : A_PALETTE.mag, color: A_PALETTE.ink, boxShadow: `0 4px 0 ${plan.featured ? A_PALETTE.limeD : A_PALETTE.magD}` }}>
                Elegir {plan.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section id="faq" style={{ padding: "60px 64px", display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 80 }}>
        <div>
          <span className="va-label">07 · Dudas</span>
          <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 56, margin: "10px 0 20px" }}>
            Preguntas <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>frecuentes</span>
          </h2>
          <p style={{ fontSize: 16, color: A_PALETTE.mute, lineHeight: 1.5, marginBottom: 24 }}>
            ¿No ves la tuya? Escríbenos. Respondemos en menos de 24 horas (laborables, claro).
          </p>
          <a className="va-cta" href="#contacto">Preguntar →</a>
        </div>
        <div>
          {A_FAQ.map((f, i) => (
            <details key={i} className="va-faq" style={{ borderBottom: i === A_FAQ.length - 1 ? `1.5px solid ${A_PALETTE.ink}` : "none" }} open={i === 0}>
              <summary style={{ fontFamily: displayFamily }}>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === MAP / LOCATION === */}
      <section style={{ padding: "60px 64px" }}>
        <div className="va-card" style={{ overflow: "hidden", padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", minHeight: 360 }}>
            <div style={{ padding: 40 }}>
              <span className="va-label">08 · Visítanos</span>
              <h3 className="va-display" style={{ fontFamily: displayFamily, fontSize: 44, margin: "10px 0 20px" }}>
                Estamos en <span className="va-highlight">Rivas</span>.
              </h3>
              <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                <strong>Av. Francisco de Quevedo, 3 · Local 2</strong><br/>
                28522 Rivas-Vaciamadrid<br/>
                <span style={{ color: A_PALETTE.mute }}>Junto al parque, a 4 min del metro Rivas Futura</span>
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="va-pill">Parking gratis</span>
                <span className="va-pill" style={{ background: A_PALETTE.lime }}>Aula 60m²</span>
                <span className="va-pill">Aire renovado</span>
              </div>
            </div>
            <div style={{ position: "relative", background: "#e9efe2", overflow: "hidden" }}>
              {/* Stylized map */}
              <svg viewBox="0 0 600 360" width="100%" height="100%" style={{ display: "block" }}>
                <rect width="600" height="360" fill="#eaf3df"/>
                {/* roads */}
                <path d="M0 120 Q 200 100 600 180" stroke="#fff" strokeWidth="22" fill="none"/>
                <path d="M0 120 Q 200 100 600 180" stroke="#d6e0c4" strokeWidth="22" fill="none" strokeDasharray="2 22"/>
                <path d="M150 0 Q 180 200 280 360" stroke="#fff" strokeWidth="18" fill="none"/>
                <path d="M380 0 Q 420 200 360 360" stroke="#fff" strokeWidth="14" fill="none"/>
                {/* blocks */}
                <rect x="40" y="40" width="60" height="50" fill="#cee0c0" rx="4"/>
                <rect x="40" y="190" width="80" height="60" fill="#cee0c0" rx="4"/>
                <rect x="460" y="240" width="100" height="70" fill="#cee0c0" rx="4"/>
                {/* park */}
                <circle cx="200" cy="260" r="40" fill="#bcd49a"/>
                <text x="200" y="265" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#5b6a44" textAnchor="middle">PARQUE</text>
                {/* marker */}
                <g transform="translate(330,160)">
                  <circle r="22" fill={A_PALETTE.mag} opacity="0.3" style={{ animation: "va-pulse 1.6s ease-in-out infinite" }}/>
                  <circle r="12" fill={A_PALETTE.mag} stroke={A_PALETTE.ink} strokeWidth="2.5"/>
                  <circle r="4" fill={A_PALETTE.paper}/>
                </g>
                <g transform="translate(330,140)">
                  <rect x="-50" y="-26" width="100" height="22" rx="11" fill={A_PALETTE.ink}/>
                  <text x="0" y="-11" fontFamily="'JetBrains Mono', monospace" fontWeight="600" fontSize="10" fill={A_PALETTE.lime} textAnchor="middle">MAKERS LAB</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA + CONTACT === */}
      <section id="contacto" style={{ padding: "60px 64px 40px" }}>
        <div className="va-card" style={{ background: A_PALETTE.lime, padding: "60px 50px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, transform: "rotate(15deg)" }}>
            <ABot size={140} />
          </div>
          <span className="va-label">09 · Próximo paso</span>
          <h2 className="va-display" style={{ fontFamily: displayFamily, fontSize: 80, margin: "10px 0 24px", maxWidth: 800, lineHeight: 0.95 }}>
            Una clase de prueba <span className="va-italic" style={{ fontStyle: fontSet === "fraunces" ? "italic" : "normal" }}>gratis</span>.<br/>
            Sin compromiso.
          </h2>
          <p style={{ fontSize: 18, maxWidth: 560, marginBottom: 30, fontWeight: 500 }}>
            Cuéntanos la edad y los intereses de tu hijo o hija y te proponemos un grupo y un día.
          </p>
          <form style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", maxWidth: 700 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Tu email" style={{ flex: "1 1 240px", padding: "16px 20px", border: `1.5px solid ${A_PALETTE.ink}`, background: A_PALETTE.paper, borderRadius: 999, fontSize: 15, fontFamily: "inherit" }}/>
            <input placeholder="Edad del niño/a" style={{ flex: "0 1 160px", padding: "16px 20px", border: `1.5px solid ${A_PALETTE.ink}`, background: A_PALETTE.paper, borderRadius: 999, fontSize: 15, fontFamily: "inherit" }}/>
            <button className="va-cta" type="submit">Reservar clase de prueba →</button>
          </form>
          <div style={{ marginTop: 20, fontSize: 13, color: A_PALETTE.ink, opacity: 0.7 }}>
            O escribe directamente: <strong>info@makerslab.com</strong> · <strong>+34 600 000 000</strong>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{ padding: "40px 64px 50px", borderTop: `1.5px solid ${A_PALETTE.ink}40` }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 30 }}>
          <div>
            <Logo height={50} />
            <p style={{ fontSize: 13, color: A_PALETTE.mute, marginTop: 14, maxWidth: 280, lineHeight: 1.5 }}>
              Desbloquea la creatividad, despierta la curiosidad: forma a los futuros innovadores.
            </p>
          </div>
          <div>
            <div className="va-label" style={{ marginBottom: 12 }}>Academia</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
              <a href="#disciplinas" style={{ color: A_PALETTE.ink, textDecoration: "none" }}>STEAM</a>
              <a href="#programas" style={{ color: A_PALETTE.ink, textDecoration: "none" }}>Programas</a>
              <a href="#precios" style={{ color: A_PALETTE.ink, textDecoration: "none" }}>Precios</a>
              <a href="#faq" style={{ color: A_PALETTE.ink, textDecoration: "none" }}>FAQ</a>
            </div>
          </div>
          <div>
            <div className="va-label" style={{ marginBottom: 12 }}>Contacto</div>
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              Av. Francisco de Quevedo, 3<br/>
              28522 Rivas-Vaciamadrid<br/>
              info@makerslab.com
            </div>
          </div>
          <div>
            <div className="va-label" style={{ marginBottom: 12 }}>Social</div>
            <div style={{ display: "flex", gap: 8 }}>
              {["IG", "FB", "TT", "YT"].map(s => (
                <div key={s} style={{ width: 34, height: 34, borderRadius: "50%", border: `1.5px solid ${A_PALETTE.ink}`, display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 20, borderTop: `1px dashed ${A_PALETTE.ink}40`, fontSize: 12, color: A_PALETTE.mute, fontFamily: "'JetBrains Mono', monospace" }}>
          <div>© 2026 Makers Lab · Hecho con 💛 en Rivas</div>
          <div>↑↑↓↓←→←→BA · psst</div>
        </div>
      </footer>

      <Confetti active={easter.active} palette={[A_PALETTE.lime, A_PALETTE.mag, "#FFD83A", "#2BCFEE", "#FF6B1A"]}/>
    </div>
  );
};

window.VariationA = VariationA;
window.A_PALETTE = A_PALETTE;
