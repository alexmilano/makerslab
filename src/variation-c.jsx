// VARIATION C — "Sticker Pop"
// Off-white · magenta/yellow/lime · chunky black outlines.
// Archivo Black + DM Sans. Stickers everywhere. Bouncy & loud.

const C_PALETTE = {
  bg:    "#F7F2E4",
  paper: "#FFFCF3",
  ink:   "#0D0D0D",
  mag:   "#E5197E",
  yellow:"#FFD83A",
  lime:  "#C8F23C",
  cyan:  "#2BCFEE",
  orange:"#FF6B1A",
};

const cCss = `
  .vc-root { background: ${C_PALETTE.bg}; color: ${C_PALETTE.ink}; font-family: 'DM Sans', system-ui, sans-serif; position: relative; }
  .vc-root *, .vc-root *::before, .vc-root *::after { box-sizing: border-box; }
  /* layered cream paper texture */
  .vc-root::before {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(13,13,13,0.04) 1px, transparent 1.2px);
    background-size: 5px 5px;
  }

  .vc-display { font-family: 'Archivo Black', system-ui, sans-serif; font-weight: 900; line-height: 0.88; letter-spacing: -0.02em; text-transform: uppercase; }
  .vc-mono { font-family: 'JetBrains Mono', monospace; }
  .vc-label { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 700; }

  /* Sticker: 3px black border + chunky drop shadow + optional rotation */
  .vc-sticker {
    border: 3px solid ${C_PALETTE.ink};
    border-radius: 18px;
    box-shadow: 8px 8px 0 ${C_PALETTE.ink};
    position: relative;
    background: ${C_PALETTE.paper};
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .vc-sticker:hover { transform: translate(-3px, -3px); box-shadow: 11px 11px 0 ${C_PALETTE.ink}; }
  .vc-sticker--mag { background: ${C_PALETTE.mag}; color: ${C_PALETTE.paper}; }
  .vc-sticker--lime { background: ${C_PALETTE.lime}; }
  .vc-sticker--yellow { background: ${C_PALETTE.yellow}; }
  .vc-sticker--cyan { background: ${C_PALETTE.cyan}; }

  .vc-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: ${C_PALETTE.mag}; color: ${C_PALETTE.paper}; text-decoration: none;
    padding: 16px 26px; border-radius: 999px;
    font-weight: 800; font-size: 16px; letter-spacing: 0.02em;
    border: 3px solid ${C_PALETTE.ink};
    box-shadow: 5px 5px 0 ${C_PALETTE.ink};
    transition: transform .12s, box-shadow .12s;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    text-transform: uppercase;
  }
  .vc-btn:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 ${C_PALETTE.ink}; }
  .vc-btn:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 ${C_PALETTE.ink}; }
  .vc-btn--lime { background: ${C_PALETTE.lime}; color: ${C_PALETTE.ink}; }
  .vc-btn--yellow { background: ${C_PALETTE.yellow}; color: ${C_PALETTE.ink}; }
  .vc-btn--white { background: ${C_PALETTE.paper}; color: ${C_PALETTE.ink}; }

  .vc-pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; border: 2px solid ${C_PALETTE.ink}; background: ${C_PALETTE.paper}; font-size: 13px; font-weight: 700; }
  .vc-tag { display: inline-block; padding: 5px 12px; border-radius: 999px; border: 2.5px solid ${C_PALETTE.ink}; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; }

  @keyframes vc-bounce { 0%,100% { transform: translateY(0) rotate(var(--r, 0deg));} 50% { transform: translateY(-6px) rotate(var(--r, 0deg));} }
  .vc-bounce { animation: vc-bounce 2.4s ease-in-out infinite; }

  @keyframes vc-spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
  .vc-spin { animation: vc-spin 18s linear infinite; }

  /* FAQ */
  .vc-faq { background: ${C_PALETTE.paper}; border: 3px solid ${C_PALETTE.ink}; border-radius: 18px; margin-bottom: 14px; box-shadow: 5px 5px 0 ${C_PALETTE.ink}; }
  .vc-faq summary { list-style: none; padding: 22px 28px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: 'Archivo Black', sans-serif; font-size: 19px; text-transform: uppercase; letter-spacing: -0.01em; }
  .vc-faq summary::-webkit-details-marker { display: none; }
  .vc-faq summary::after { content: "+"; font-size: 32px; transition: transform .2s; font-family: 'DM Sans', sans-serif; font-weight: 700; }
  .vc-faq[open] summary::after { transform: rotate(45deg); color: ${C_PALETTE.mag}; }
  .vc-faq[open] { background: ${C_PALETTE.yellow}; }
  .vc-faq p { padding: 0 28px 24px; font-size: 16px; line-height: 1.55; margin: 0; max-width: 70ch; }

  /* nav */
  .vc-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 56px; }
  .vc-nav-links { display: flex; gap: 4px; align-items: center; background: ${C_PALETTE.paper}; border: 2.5px solid ${C_PALETTE.ink}; border-radius: 999px; padding: 5px; box-shadow: 4px 4px 0 ${C_PALETTE.ink}; }
  .vc-nav-links a { color: ${C_PALETTE.ink}; text-decoration: none; font-size: 14px; font-weight: 700; padding: 9px 16px; border-radius: 999px; transition: background .15s, color .15s; }
  .vc-nav-links a:hover { background: ${C_PALETTE.lime}; }

  /* underline scribble */
  .vc-scribble { background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 14'><path d='M2 8 Q 30 2 60 7 T 120 6 T 200 5' fill='none' stroke='%23E5197E' stroke-width='5' stroke-linecap='round'/></svg>"); background-repeat: no-repeat; background-position: 0 100%; background-size: 100% 12px; padding-bottom: 14px; }

  /* halo behind text */
  .vc-halo { position: relative; display: inline-block; z-index: 1; }
  .vc-halo::before { content: ""; position: absolute; inset: -8px -14px; background: var(--halo, ${C_PALETTE.yellow}); border-radius: 18px; z-index: -1; transform: rotate(-2deg); }

  /* big STEAM letters */
  .vc-letter { font-family: 'Archivo Black', sans-serif; font-size: 140px; line-height: 0.8; text-transform: uppercase; -webkit-text-stroke: 3px ${C_PALETTE.ink}; color: transparent; }
  .vc-letter--fill { -webkit-text-stroke: 0; color: ${C_PALETTE.ink}; }
`;

const C_STEAM = [
  { L: "S", word: "Science",     desc: "Experimentos · hipótesis · descubrir.",   color: C_PALETTE.lime,   r: -3 },
  { L: "T", word: "Technology",  desc: "Programación con bloques y robots.",     color: C_PALETTE.cyan,   r:  2 },
  { L: "E", word: "Engineering", desc: "Construir, diseñar, romper, reparar.",   color: C_PALETTE.yellow, r: -2 },
  { L: "A", word: "Art",         desc: "Diseño visual, narrativa y juego.",      color: C_PALETTE.mag,    r:  3 },
  { L: "M", word: "Mathematics", desc: "Lógica, patrones, mates que se ven.",    color: C_PALETTE.orange, r: -1 },
];

const C_PROGRAMS = [
  { age: "5-6",  title: "Mini Makers",      desc: "Primer contacto con la lógica y experimentos.",       schedule: "MAR/JUE · 17:00", color: C_PALETTE.lime,   r: -2 },
  { age: "7-8",  title: "Code & Build",     desc: "Scratch + WeDo. Robots que cobran vida.",             schedule: "LUN/MIÉ · 17:00", color: C_PALETTE.yellow, r:  1.5 },
  { age: "9-11", title: "Lab Avanzado",     desc: "Microbit, Spike, game design, electrónica.",          schedule: "LUN/MIÉ · 18:30", color: C_PALETTE.mag,    r: -1 },
  { age: "Verano", title: "Campa STEAM",    desc: "Una semana, un reto distinto cada día.",              schedule: "JUL · 09:00",     color: C_PALETTE.cyan,   r:  2 },
];

const C_TESTIMONIALS = [
  { quote: "Llega cada martes preguntando '¿hoy también?'. Y los miércoles también pregunta.", name: "Marta R.", role: "Madre de Lucía, 8", color: C_PALETTE.lime,   r: -2 },
  { quote: "Mateo construyó un brazo robótico en casa con cartón. La curiosidad no se desactiva al salir.", name: "Diego L.", role: "Padre de Mateo, 10", color: C_PALETTE.paper, r:  1.5 },
  { quote: "Hablan de su código como otros hablan de fútbol.", name: "Sara P.", role: "Madre de Irene, 7", color: C_PALETTE.yellow, r: -1 },
];

const C_PLANS = [
  { name: "Curioso", price: 59,  freq: "1 día/sem", features: ["1 disciplina", "Materiales incluidos", "Grupo máx. 8"], color: C_PALETTE.paper, featured: false },
  { name: "Maker",   price: 99,  freq: "2 días/sem", features: ["2 disciplinas", "Proyectos abiertos", "Showcase trimestral", "Materiales incluidos"], color: C_PALETTE.mag, featured: true },
  { name: "Lab Pro", price: 139, freq: "3 días/sem", features: ["Disciplinas combinadas", "Proyecto personal", "Showcase trimestral", "Kit para casa"], color: C_PALETTE.paper, featured: false },
];

const C_FAQ = [
  { q: "¿Necesita saber programar?", a: "Cero. Cada programa parte desde la base. Solo pedimos ganas de tocar, romper y volver a montar." },
  { q: "¿Pueden empezar en cualquier momento?", a: "Sí. Clase de prueba gratis. Si encaja, se incorporan la semana siguiente." },
  { q: "¿Y si ya programa bastante?", a: "Tenemos retos avanzados: videojuegos, automatización, circuitos." },
  { q: "¿Qué incluye la cuota?", a: "Materiales, kits, software con licencia educativa, showcases trimestrales. Sin matrícula." },
  { q: "¿Hay descuentos por hermanos?", a: "15% sobre el segundo, 20% sobre el tercero." },
];

// Star burst sticker
const CStarBurst = ({ size = 100, color = C_PALETTE.yellow, children, rotate = 0 }) => (
  <div style={{ position: "relative", width: size, height: size, transform: `rotate(${rotate}deg)` }}>
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: "absolute", inset: 0 }}>
      <polygon
        points="50,2 58,30 88,18 70,42 98,50 70,58 88,82 58,70 50,98 42,70 12,82 30,58 2,50 30,42 12,18 42,30"
        fill={color} stroke={C_PALETTE.ink} strokeWidth="3" strokeLinejoin="round"
      />
    </svg>
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", fontFamily: "'Archivo Black', sans-serif", fontSize: size * 0.16, color: C_PALETTE.ink, padding: size * 0.15, textTransform: "uppercase", lineHeight: 1 }}>
      {children}
    </div>
  </div>
);

// Blob
const CBlob = ({ size = 200, color = C_PALETTE.lime, style }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={style}>
    <path d="M100 8 C 160 8 195 50 192 110 C 188 168 140 192 92 188 C 36 184 8 150 12 92 C 16 38 50 8 100 8 Z"
      fill={color} stroke={C_PALETTE.ink} strokeWidth="4"/>
  </svg>
);

const VariationC = ({ fontSet = "archivo", heroLayout = "split" }) => {
  const rootRef = React.useRef(null);
  const easter = useEasterEgg(rootRef);
  const [logoClicks, setLogoClicks] = React.useState(0);
  const onLogoClick = () => {
    const n = logoClicks + 1;
    setLogoClicks(n);
    if (n >= 3) { easter.trigger(); setLogoClicks(0); }
    setTimeout(() => setLogoClicks(0), 600);
  };

  const displayFamily = {
    archivo: "'Archivo Black', system-ui, sans-serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    fraunces: "'Fraunces', serif",
  }[fontSet] || "'Archivo Black', sans-serif";

  return (
    <div ref={rootRef} className="vc-root" style={{ minHeight: 5000, overflow: "hidden" }}>
      <style>{cCss}</style>

      {/* Floating background blobs */}
      <CBlob size={280} color={C_PALETTE.lime} style={{ position: "absolute", top: 800, left: -120, opacity: 0.35, zIndex: 0 }}/>
      <CBlob size={220} color={C_PALETTE.yellow} style={{ position: "absolute", top: 1600, right: -80, opacity: 0.4, zIndex: 0 }}/>
      <CBlob size={320} color={C_PALETTE.mag} style={{ position: "absolute", top: 3300, left: -150, opacity: 0.25, zIndex: 0 }}/>

      {/* === NAV === */}
      <nav className="vc-nav" style={{ position: "relative", zIndex: 5 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onLogoClick(); }} title="psst… triple click">
          <Logo height={60} />
        </a>
        <div className="vc-nav-links">
          <a href="#programas">Programas</a>
          <a href="#disciplinas">STEAM</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="vc-btn vc-btn--lime" href="#contacto">¡Inscríbete! ✦</a>
      </nav>

      {/* === HERO === */}
      <section style={{ padding: "40px 56px 80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: heroLayout === "stacked" ? "block" : "grid", gridTemplateColumns: heroLayout === "split" ? "1.2fr 1fr" : "1fr", gap: 50, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span className="vc-pill" style={{ background: C_PALETTE.lime }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C_PALETTE.ink }}/>
                Academia STEAM · 5-11 años
              </span>
              <span className="vc-pill">Rivas-Vaciamadrid</span>
            </div>
            <h1 className="vc-display" style={{ fontFamily: displayFamily, fontSize: heroLayout === "stacked" ? 150 : 116, margin: "12px 0 28px" }}>
              <span>Ideas</span>
              <br/>
              <span className="vc-halo" style={{ "--halo": C_PALETTE.yellow }}>locas,</span>
              <br/>
              <span style={{ color: C_PALETTE.mag }}>manos</span>
              <br/>
              <span className="vc-halo" style={{ "--halo": C_PALETTE.lime }}>al lab.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.45, maxWidth: 520, marginBottom: 30, fontWeight: 500 }}>
              Programación, robótica, ciencia y arte para mentes curiosas. Aprenden haciendo, fallando, repitiendo. <strong>Y celebrando.</strong>
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a className="vc-btn" href="#contacto">Inscríbete →</a>
              <a className="vc-btn vc-btn--white" href="#programas">Clase de prueba ⚡</a>
            </div>

            {/* social proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 40 }}>
              <div style={{ display: "flex" }}>
                {[C_PALETTE.lime, C_PALETTE.mag, C_PALETTE.yellow, C_PALETTE.cyan, C_PALETTE.orange].map((c, i) => (
                  <div key={i} style={{ width: 42, height: 42, borderRadius: "50%", background: c, border: `2.5px solid ${C_PALETTE.ink}`, marginLeft: i ? -12 : 0, display: "grid", placeItems: "center", fontSize: 18, fontWeight: 900, fontFamily: "'Archivo Black', sans-serif" }}>
                    {["★","♥","♦","✦","✪"][i]}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.3 }}>
                <strong style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 18 }}>+200 FAMILIAS</strong><br/>
                <span>ya forman parte del lab</span>
              </div>
            </div>
          </div>

          {heroLayout === "split" && (
            <div style={{ position: "relative", height: 540 }}>
              {/* Main photo sticker */}
              <div className="vc-sticker" style={{ position: "absolute", top: 30, left: 20, padding: 12, transform: "rotate(-4deg)", width: "85%" }}>
                <PhotoPlaceholder tone="warm" label="LAB" hint="niños construyendo robots" height={400} radius={8} />
                <div style={{ marginTop: 12, fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Lab #007 · Spike Prime
                </div>
              </div>
              {/* Floating star sticker */}
              <div style={{ position: "absolute", top: -20, right: -10, "--r": "12deg" }} className="vc-bounce">
                <CStarBurst size={150} color={C_PALETTE.yellow} rotate={12}>
                  100%<br/>diversión
                </CStarBurst>
              </div>
              {/* Floating pill */}
              <div className="vc-sticker vc-sticker--mag" style={{ position: "absolute", bottom: 30, right: -10, padding: "16px 22px", transform: "rotate(5deg)", maxWidth: 220 }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 26, lineHeight: 1, textTransform: "uppercase" }}>+200 niños</div>
                <div style={{ fontSize: 13, marginTop: 4 }}>haciendo cosas chulas</div>
              </div>
              {/* Mini cyan badge */}
              <div className="vc-sticker vc-sticker--cyan" style={{ position: "absolute", bottom: 100, left: -20, padding: "10px 16px", transform: "rotate(-6deg)" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase" }}>★ Premiados 2025</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* === MARQUEE === */}
      <div style={{ background: C_PALETTE.ink, color: C_PALETTE.lime, borderTop: `3px solid ${C_PALETTE.ink}`, borderBottom: `3px solid ${C_PALETTE.ink}` }}>
        <Marquee
          items={["SCRATCH", "ROBOTS", "EXPERIMENTOS", "VIDEOJUEGOS", "PIXEL ART", "MICROBIT", "STOP-MOTION", "ELECTRÓNICA", "MARIO MAKER", "MATEMÁGICAS"]}
          fontFamily="'Archivo Black', sans-serif"
          fontSize={26} fontWeight={900} color={C_PALETTE.lime}
          separator="✦" py={20} speed={45}
        />
      </div>

      {/* === STEAM === */}
      <section id="disciplinas" style={{ padding: "100px 56px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 50, flexWrap: "wrap" }}>
          <span className="vc-pill" style={{ background: C_PALETTE.mag, color: C_PALETTE.paper, borderColor: C_PALETTE.ink, fontWeight: 800 }}>02 · STEAM</span>
          <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 80, margin: 0 }}>
            CINCO LETRAS.<br/>
            <span style={{ color: C_PALETTE.mag }}>UN MILLÓN</span> DE PROYECTOS.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {C_STEAM.map((d, i) => (
            <div key={d.L} className="vc-sticker" style={{ background: d.color, padding: "26px 22px 24px", transform: `rotate(${d.r}deg)` }}>
              <div className="vc-letter vc-letter--fill" style={{ fontFamily: displayFamily, fontSize: 130 }}>{d.L}</div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 4 }}>{d.word}</div>
              <div style={{ fontSize: 13, marginTop: 12, lineHeight: 1.45, fontWeight: 500 }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === PROGRAMS === */}
      <section id="programas" style={{ padding: "80px 56px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 50, gap: 30, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 720 }}>
            <span className="vc-pill" style={{ background: C_PALETTE.cyan, fontWeight: 800 }}>03 · Programas</span>
            <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 80, margin: "16px 0 0" }}>
              ELIGE TU <span style={{ color: C_PALETTE.mag }}>MISIÓN</span>
            </h2>
          </div>
          <CStarBurst size={120} color={C_PALETTE.mag} rotate={-6}>
            <span style={{ color: C_PALETTE.paper }}>+18<br/>plazas<br/>libres</span>
          </CStarBurst>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 26 }}>
          {C_PROGRAMS.map((p, i) => (
            <div key={i} className="vc-sticker" style={{ background: p.color, padding: 30, transform: `rotate(${p.r}deg)`, position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                <span className="vc-tag" style={{ background: C_PALETTE.paper }}>{p.age} AÑOS</span>
                <span className="vc-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>0{i+1}/04</span>
              </div>
              <h3 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 44, margin: "8px 0 14px", textTransform: "uppercase" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 24, fontWeight: 500 }}>{p.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: `2.5px dashed ${C_PALETTE.ink}` }}>
                <div className="vc-mono" style={{ fontSize: 14, fontWeight: 700 }}>{p.schedule}</div>
                <a className="vc-btn vc-btn--white" href="#contacto" style={{ padding: "10px 18px", fontSize: 13 }}>Apúntate →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section style={{ padding: "100px 56px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 50, textAlign: "center" }}>
          <span className="vc-pill" style={{ background: C_PALETTE.lime, fontWeight: 800 }}>04 · Familias</span>
          <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 80, margin: "16px 0 0" }}>
            LO QUE <span style={{ color: C_PALETTE.mag }}>CUENTAN</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
          {C_TESTIMONIALS.map((t, i) => (
            <div key={i} className="vc-sticker" style={{ background: t.color, padding: 28, transform: `rotate(${t.r}deg)`, marginTop: i === 1 ? 28 : 0 }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 80, lineHeight: 0.4, color: C_PALETTE.ink, marginBottom: 16 }}>"</div>
              <p style={{ fontSize: 19, lineHeight: 1.35, fontWeight: 600, margin: "0 0 24px" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: `2.5px solid ${C_PALETTE.ink}` }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: C_PALETTE.paper, border: `2.5px solid ${C_PALETTE.ink}`, display: "grid", placeItems: "center", fontFamily: "'Archivo Black', sans-serif", fontSize: 14 }}>
                  {t.name.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SAGAN === */}
      <section style={{ padding: "100px 56px", margin: "60px 0", background: C_PALETTE.ink, color: C_PALETTE.paper, position: "relative", overflow: "hidden", border: `3px solid ${C_PALETTE.ink}` }}>
        {/* big blobs */}
        <CBlob size={400} color={C_PALETTE.mag} style={{ position: "absolute", top: -130, right: -120, opacity: 0.9 }}/>
        <CBlob size={260} color={C_PALETTE.lime} style={{ position: "absolute", bottom: -80, left: -60 }}/>
        {/* stars */}
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i*41)%100}%`, top: `${(i*67)%100}%`, width: i%5===0?4:2, height: i%5===0?4:2, borderRadius: "50%", background: i%6===0 ? C_PALETTE.yellow : C_PALETTE.paper, opacity: 0.7 }}/>
        ))}
        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <span className="vc-pill" style={{ background: C_PALETTE.yellow, fontWeight: 800 }}>05 · POR QUÉ IMPORTA</span>
          <blockquote className="vc-display" style={{ fontFamily: displayFamily, fontSize: 60, lineHeight: 1.1, margin: "30px 0", color: C_PALETTE.paper, fontWeight: 900 }}>
            "VIVIMOS EN UNA SOCIEDAD <span style={{ color: C_PALETTE.lime }}>PROFUNDAMENTE DEPENDIENTE</span> DE LA CIENCIA Y LA TECNOLOGÍA, Y EN LA QUE <span style={{ color: C_PALETTE.mag }}>CASI NADIE</span> SABE NADA DE ESTOS TEMAS."
          </blockquote>
          <div className="vc-mono" style={{ fontSize: 14, letterSpacing: "0.25em", color: C_PALETTE.yellow, marginTop: 30, fontWeight: 700 }}>
            — CARL SAGAN
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="precios" style={{ padding: "60px 56px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="vc-pill" style={{ background: C_PALETTE.yellow, fontWeight: 800 }}>06 · Planes</span>
          <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 80, margin: "16px 0 12px" }}>
            ELIGE TU <span style={{ color: C_PALETTE.mag }}>PLAN</span>
          </h2>
          <p style={{ fontSize: 18, fontWeight: 500, maxWidth: 580, margin: "0 auto" }}>
            Sin matrícula. Sin trampa. Cambias de plan cuando quieras.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}>
          {C_PLANS.map((plan, i) => (
            <div key={i} className="vc-sticker" style={{
              background: plan.color,
              color: plan.featured ? C_PALETTE.paper : C_PALETTE.ink,
              padding: 32,
              transform: plan.featured ? "rotate(-1deg) scale(1.06)" : `rotate(${i === 0 ? -2 : 2}deg)`,
              position: "relative",
              marginTop: plan.featured ? -20 : 0,
            }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -22, right: -22, zIndex: 2 }}>
                  <CStarBurst size={88} color={C_PALETTE.yellow} rotate={14}>
                    Más<br/>popular
                  </CStarBurst>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div>
                  <div className="vc-display" style={{ fontFamily: displayFamily, fontSize: 36 }}>{plan.name}</div>
                  <div className="vc-mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: 0.85 }}>{plan.freq}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", marginTop: 26, marginBottom: 26 }}>
                <span className="vc-display" style={{ fontFamily: displayFamily, fontSize: 96 }}>{plan.price}€</span>
                <span style={{ fontSize: 16, marginLeft: 6, opacity: 0.7, fontWeight: 600 }}>/mes</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: 15, lineHeight: 1.7, fontWeight: 500 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                    <span style={{ fontWeight: 900, color: plan.featured ? C_PALETTE.lime : C_PALETTE.mag }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "vc-btn vc-btn--lime" : "vc-btn"} href="#contacto" style={{ width: "100%", justifyContent: "center" }}>
                ELEGIR →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section id="faq" style={{ padding: "100px 56px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 60, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 30 }}>
            <span className="vc-pill" style={{ background: C_PALETTE.mag, color: C_PALETTE.paper, fontWeight: 800 }}>07 · Dudas</span>
            <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "16px 0 20px" }}>
              ¿NOS<br/>PREGUNTAS?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 22, fontWeight: 500 }}>
              ¿No ves la tuya? Escríbenos. Respondemos en menos de 24h laborables.
            </p>
            <a className="vc-btn" href="#contacto">Preguntar →</a>
          </div>
          <div>
            {C_FAQ.map((f, i) => (
              <details key={i} className="vc-faq" open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === MAP === */}
      <section style={{ padding: "60px 56px", position: "relative", zIndex: 1 }}>
        <div className="vc-sticker" style={{ overflow: "hidden", padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", minHeight: 380 }}>
            <div style={{ padding: 40, background: C_PALETTE.yellow }}>
              <span className="vc-pill" style={{ fontWeight: 800 }}>08 · Visítanos</span>
              <h3 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 56, margin: "18px 0 20px" }}>
                EN<br/><span style={{ color: C_PALETTE.mag }}>RIVAS</span>
              </h3>
              <div style={{ fontSize: 16, lineHeight: 1.6, fontWeight: 500 }}>
                <strong style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 17, textTransform: "uppercase" }}>Av. Francisco de Quevedo, 3 · Local 2</strong><br/>
                28522 Rivas-Vaciamadrid<br/>
                <span style={{ fontWeight: 700 }}>★ 4 min de Metro Rivas Futura</span>
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="vc-tag" style={{ background: C_PALETTE.paper }}>Parking</span>
                <span className="vc-tag" style={{ background: C_PALETTE.lime }}>Aula 60m²</span>
                <span className="vc-tag" style={{ background: C_PALETTE.paper }}>Aire renovado</span>
              </div>
            </div>
            <div style={{ position: "relative", background: "#dfeac6", overflow: "hidden" }}>
              <svg viewBox="0 0 600 380" width="100%" height="100%" style={{ display: "block" }}>
                <rect width="600" height="380" fill="#dfeac6"/>
                <path d="M0 130 Q 200 110 600 190" stroke="#fff" strokeWidth="26" fill="none"/>
                <path d="M0 130 Q 200 110 600 190" stroke={C_PALETTE.ink} strokeWidth="26" fill="none" strokeDasharray="2 32" opacity="0.18"/>
                <path d="M150 0 Q 180 200 280 380" stroke="#fff" strokeWidth="22" fill="none"/>
                <path d="M380 0 Q 420 200 360 380" stroke="#fff" strokeWidth="18" fill="none"/>
                <rect x="40" y="50" width="60" height="50" fill={C_PALETTE.lime} stroke={C_PALETTE.ink} strokeWidth="3" rx="4"/>
                <rect x="40" y="200" width="80" height="60" fill={C_PALETTE.cyan} stroke={C_PALETTE.ink} strokeWidth="3" rx="4"/>
                <rect x="460" y="250" width="100" height="80" fill={C_PALETTE.orange} stroke={C_PALETTE.ink} strokeWidth="3" rx="4"/>
                <circle cx="200" cy="270" r="42" fill="#a8c47e" stroke={C_PALETTE.ink} strokeWidth="3"/>
                <text x="200" y="275" fontFamily="'Archivo Black', sans-serif" fontSize="13" fill={C_PALETTE.ink} textAnchor="middle">PARQUE</text>
                {/* marker */}
                <g transform="translate(330,170)">
                  <ellipse cx="0" cy="22" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>
                  <path d="M0 -28 C 18 -28 26 -14 22 -2 C 18 8 0 24 0 24 C 0 24 -18 8 -22 -2 C -26 -14 -18 -28 0 -28 Z" fill={C_PALETTE.mag} stroke={C_PALETTE.ink} strokeWidth="3"/>
                  <circle cx="0" cy="-12" r="6" fill={C_PALETTE.paper} stroke={C_PALETTE.ink} strokeWidth="2"/>
                </g>
                <g transform="translate(330,128)">
                  <rect x="-58" y="-26" width="116" height="26" rx="13" fill={C_PALETTE.ink}/>
                  <text x="0" y="-9" fontFamily="'Archivo Black', sans-serif" fontSize="12" fill={C_PALETTE.lime} textAnchor="middle">MAKERS LAB</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section id="contacto" style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
        <div className="vc-sticker vc-sticker--mag" style={{ padding: "60px 50px", position: "relative", overflow: "hidden", color: C_PALETTE.paper }}>
          <div style={{ position: "absolute", top: -40, right: 40 }}>
            <CStarBurst size={140} color={C_PALETTE.lime} rotate={-8}>
              Clase<br/>de prueba<br/>GRATIS
            </CStarBurst>
          </div>
          <span className="vc-pill" style={{ background: C_PALETTE.lime, fontWeight: 800 }}>09 · Próximo paso</span>
          <h2 className="vc-display" style={{ fontFamily: displayFamily, fontSize: 100, margin: "16px 0 24px", maxWidth: 800, lineHeight: 0.92 }}>
            VEN A<br/>
            <span style={{ color: C_PALETTE.yellow }}>PROBAR</span><br/>
            EL LAB.
          </h2>
          <p style={{ fontSize: 19, maxWidth: 540, marginBottom: 30, fontWeight: 500 }}>
            Cuéntanos la edad y los intereses de tu peque y te proponemos un grupo y un día.
          </p>
          <form style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 720 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Tu email" style={{ flex: "1 1 240px", padding: "16px 22px", border: `3px solid ${C_PALETTE.ink}`, background: C_PALETTE.paper, color: C_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <input placeholder="Edad" style={{ flex: "0 1 130px", padding: "16px 22px", border: `3px solid ${C_PALETTE.ink}`, background: C_PALETTE.paper, color: C_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <button className="vc-btn vc-btn--yellow" type="submit">Reservar →</button>
          </form>
          <div style={{ marginTop: 22, fontSize: 14, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
            info@makerslab.com  ·  +34 600 000 000
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{ padding: "60px 56px 40px", borderTop: `3px solid ${C_PALETTE.ink}`, background: C_PALETTE.ink, color: C_PALETTE.paper, position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 32 }}>
          <div>
            <div style={{ background: C_PALETTE.paper, padding: 10, borderRadius: 12, display: "inline-block" }}>
              <Logo height={50} />
            </div>
            <p style={{ fontSize: 14, marginTop: 16, maxWidth: 290, lineHeight: 1.55, fontWeight: 500 }}>
              Forma a los futuros innovadores. Una clase, un robot, una idea a la vez.
            </p>
          </div>
          {[
            { t: "ACADEMIA", links: [["STEAM","#disciplinas"],["Programas","#programas"],["Precios","#precios"],["FAQ","#faq"]] },
            { t: "CONTACTO", links: [["info@makerslab.com","#"],["+34 600 000 000","#"],["Av. Quevedo, 3","#"],["28522 Rivas","#"]] },
            { t: "SOCIAL",   links: [["Instagram","#"],["TikTok","#"],["YouTube","#"],["Newsletter","#"]] },
          ].map(c => (
            <div key={c.t}>
              <div className="vc-mono" style={{ fontSize: 12, letterSpacing: "0.2em", color: C_PALETTE.lime, marginBottom: 14, fontWeight: 700 }}>// {c.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, fontWeight: 500 }}>
                {c.links.map(([l, href]) => <a key={l} href={href} style={{ color: C_PALETTE.paper, textDecoration: "none", transition: "color .15s" }} onMouseEnter={(e) => e.currentTarget.style.color = C_PALETTE.yellow} onMouseLeave={(e) => e.currentTarget.style.color = C_PALETTE.paper}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, borderTop: `2px dashed ${C_PALETTE.paper}33`, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: C_PALETTE.paper + "AA" }}>
          <div>© 2026 MAKERS LAB · HECHO CON ✦ EN RIVAS</div>
          <div>↑↑↓↓←→←→BA · konami unlocks confetti</div>
        </div>
      </footer>

      <Confetti active={easter.active} palette={[C_PALETTE.lime, C_PALETTE.mag, C_PALETTE.yellow, C_PALETTE.cyan, C_PALETTE.orange]}/>
    </div>
  );
};

window.VariationC = VariationC;
window.C_PALETTE = C_PALETTE;
