// VARIATION D — "Maker Studio" — híbrida de B (rigor + datos) y C (personalidad + color)
// Off-white cálido · lime + magenta + cyan tech · Archivo Black + Space Grotesk + JetBrains Mono.

const D_PALETTE = {
  bg:      "#F4EFE3",
  paper:   "#FBF8F0",
  ink:     "#0D0D0D",
  inkSoft: "#3a3530",
  mute:    "#7c766b",
  lime:    "#C8F23C",
  limeD:   "#A6CC22",
  mag:     "#E5197E",
  magD:    "#B70F60",
  cyan:    "#2BCFEE",
  yellow:  "#FFD83A",
  orange:  "#FF6B1A",
  darkBand:"#0A0F1E",
};

const dCss = `
  .vd-root { background: ${D_PALETTE.bg}; color: ${D_PALETTE.ink}; font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif; position: relative; }
  .vd-root *, .vd-root *::before, .vd-root *::after { box-sizing: border-box; }
  .vd-grid {
    background-image:
      linear-gradient(rgba(13,13,13,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(13,13,13,0.05) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .vd-display { font-family: 'Archivo Black', system-ui, sans-serif; font-weight: 900; line-height: 0.9; letter-spacing: -0.025em; text-transform: uppercase; }
  .vd-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  .vd-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 600; color: ${D_PALETTE.magD}; }

  /* Sticker card — chunky black border, modest shadow */
  .vd-sticker { background: ${D_PALETTE.paper}; border: 2.5px solid ${D_PALETTE.ink}; border-radius: 16px; box-shadow: 6px 6px 0 ${D_PALETTE.ink}; transition: transform .2s, box-shadow .2s; position: relative; }
  .vd-sticker:hover { transform: translate(-2px,-2px); box-shadow: 8px 8px 0 ${D_PALETTE.ink}; }
  .vd-sticker--lime  { background: ${D_PALETTE.lime}; }
  .vd-sticker--mag   { background: ${D_PALETTE.mag}; color: ${D_PALETTE.paper}; }
  .vd-sticker--cyan  { background: ${D_PALETTE.cyan}; }
  .vd-sticker--yellow{ background: ${D_PALETTE.yellow}; }
  .vd-sticker--ink   { background: ${D_PALETTE.darkBand}; color: ${D_PALETTE.paper}; }

  .vd-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: ${D_PALETTE.mag}; color: ${D_PALETTE.paper}; text-decoration: none;
    padding: 14px 24px; border-radius: 999px;
    font-weight: 700; font-size: 15px; letter-spacing: 0.02em;
    border: 2.5px solid ${D_PALETTE.ink};
    box-shadow: 5px 5px 0 ${D_PALETTE.ink};
    transition: transform .12s, box-shadow .12s;
    cursor: pointer; font-family: 'Space Grotesk', sans-serif;
  }
  .vd-btn:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 ${D_PALETTE.ink}; }
  .vd-btn:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 ${D_PALETTE.ink}; }
  .vd-btn--lime { background: ${D_PALETTE.lime}; color: ${D_PALETTE.ink}; }
  .vd-btn--white { background: ${D_PALETTE.paper}; color: ${D_PALETTE.ink}; }
  .vd-btn--ghost { background: transparent; color: ${D_PALETTE.ink}; }

  .vd-pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 13px; border-radius: 999px; border: 2px solid ${D_PALETTE.ink}; background: ${D_PALETTE.paper}; font-size: 12px; font-weight: 700; }
  .vd-tag { display: inline-block; padding: 4px 11px; border-radius: 6px; font-size: 11px; font-weight: 700; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase; background: ${D_PALETTE.ink}; color: ${D_PALETTE.lime}; }
  .vd-chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; border: 1.5px solid ${D_PALETTE.ink}; background: ${D_PALETTE.paper}; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: ${D_PALETTE.ink}; font-weight: 600; }
  .vd-chip-dot { width: 7px; height: 7px; border-radius: 50%; background: ${D_PALETTE.lime}; box-shadow: 0 0 8px ${D_PALETTE.lime}; }

  /* Nav */
  .vd-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 56px; position: relative; z-index: 5; }
  .vd-nav-links { display: flex; gap: 4px; align-items: center; background: ${D_PALETTE.paper}; border: 2px solid ${D_PALETTE.ink}; border-radius: 999px; padding: 5px; box-shadow: 4px 4px 0 ${D_PALETTE.ink}; }
  .vd-nav-links a { color: ${D_PALETTE.ink}; text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 14px; border-radius: 999px; transition: background .15s; }
  .vd-nav-links a:hover { background: ${D_PALETTE.lime}; }

  /* Halo highlight */
  .vd-halo { position: relative; display: inline-block; z-index: 1; }
  .vd-halo::before { content: ""; position: absolute; inset: -4px -10px; background: var(--halo, ${D_PALETTE.lime}); border: 2.5px solid ${D_PALETTE.ink}; border-radius: 14px; z-index: -1; transform: rotate(-2deg); box-shadow: 4px 4px 0 ${D_PALETTE.ink}; }

  /* FAQ */
  .vd-faq { background: ${D_PALETTE.paper}; border: 2.5px solid ${D_PALETTE.ink}; border-radius: 14px; margin-bottom: 12px; box-shadow: 4px 4px 0 ${D_PALETTE.ink}; }
  .vd-faq summary { list-style: none; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: 'Archivo Black', sans-serif; font-size: 17px; text-transform: uppercase; }
  .vd-faq summary::-webkit-details-marker { display: none; }
  .vd-faq summary::after { content: "[+]"; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: ${D_PALETTE.mag}; transition: color .15s; }
  .vd-faq[open] { background: ${D_PALETTE.lime}; }
  .vd-faq[open] summary::after { content: "[-]"; color: ${D_PALETTE.ink}; }
  .vd-faq p { padding: 0 24px 22px; font-size: 15px; line-height: 1.55; margin: 0; max-width: 70ch; color: ${D_PALETTE.inkSoft}; }

  /* Animations */
  @keyframes vd-blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
  .vd-caret { display: inline-block; width: 10px; height: 0.9em; background: currentColor; animation: vd-blink 1s steps(1) infinite; vertical-align: -2px; margin-left: 4px; }
  @keyframes vd-pulse-ring { 0%{transform:scale(0.6);opacity:1;} 100%{transform:scale(2.4);opacity:0;} }
  @keyframes vd-spin { from{transform:rotate(0);} to{transform:rotate(360deg);} }
  @keyframes vd-bounce { 0%,100% { transform: translateY(0) rotate(var(--r, 0deg)); } 50% { transform: translateY(-8px) rotate(var(--r, 0deg)); } }
  .vd-bounce { animation: vd-bounce 2.6s ease-in-out infinite; }
  @keyframes vd-wave { 0%,100% { transform: rotate(-12deg);} 50% { transform: rotate(18deg);} }
  .vd-wave { animation: vd-wave 1.6s ease-in-out infinite; transform-origin: bottom center; }
  @keyframes vd-wiggle { 0%,100% { transform: rotate(-1.5deg);} 50% { transform: rotate(1.5deg);} }
  .vd-sticker.vd-wiggle:hover { animation: vd-wiggle .4s ease-in-out 2; }

  /* Glow on dark band */
  .vd-glow-lime { color: ${D_PALETTE.lime}; text-shadow: 0 0 22px ${D_PALETTE.lime}88; }
  .vd-glow-cyan { color: ${D_PALETTE.cyan}; text-shadow: 0 0 22px ${D_PALETTE.cyan}88; }
  .vd-glow-mag  { color: ${D_PALETTE.mag};  text-shadow: 0 0 22px ${D_PALETTE.mag}88; }

  /* Big STEAM letters */
  .vd-letter { font-family: 'Archivo Black', sans-serif; font-size: 120px; line-height: 0.82; text-transform: uppercase; color: ${D_PALETTE.ink}; }

  /* Marker pulse used in svg */
  .vd-pulse { transform-origin: center; animation: vd-pulse-ring 2s ease-out infinite; }
`;

const D_STEAM = [
  { L: "S", word: "Science",      desc: "Experimentos · hipótesis · descubrir.",  color: D_PALETTE.lime,   r:-2, glow: D_PALETTE.limeD },
  { L: "T", word: "Technology",   desc: "Scratch · MakeCode · Mario Maker.",      color: D_PALETTE.cyan,   r: 1.5, glow: D_PALETTE.cyan },
  { L: "E", word: "Engineering",  desc: "WeDo · Spike · Microbit · Arduino.",     color: D_PALETTE.yellow, r:-1, glow: D_PALETTE.yellow },
  { L: "A", word: "Art",          desc: "Diseño visual, narrativa, stop-motion.", color: D_PALETTE.mag,    r: 2, glow: D_PALETTE.mag, dark: true },
  { L: "M", word: "Mathematics",  desc: "Lógica, patrones, algoritmos.",          color: D_PALETTE.orange, r:-1.5, glow: D_PALETTE.orange },
];

const D_PROGRAMS = []; // (legacy, no longer rendered — se reemplazó por "Las clases" + Campamento)

const D_TESTIMONIALS = [
  // PLACEHOLDERS — sustituir por testimonios reales de familias antes de publicar.
  { quote: "Mi hija Lucía llega cada martes preguntando '¿hoy también?'. Y los miércoles también pregunta.", name: "Marta R. [ejemplo]", role: "FAMILIA · EJEMPLO", color: D_PALETTE.paper,  r:-1.5 },
  { quote: "Mateo construyó un brazo robótico en casa con cartón después de su clase. La curiosidad no se desactiva al salir.", name: "Diego L. [ejemplo]", role: "FAMILIA · EJEMPLO", color: D_PALETTE.lime,   r: 1 },
];

// Sustituimos los D_PROGRAMS antiguos por los 4 pilares del campamento y un 
const CAMP_PILARES = [
  { n: "01", title: "Robótica + construcción",  desc: "Cada día un proyecto temático distinto. Vehículos, animales, atracciones de feria, naves espaciales… Montar, programar, ver cómo cobra vida.", color: "lime" },
  { n: "02", title: "Ciencia espectacular",      desc: "Volcanes, fluidos no newtonianos, circuitos eléctricos, energía solar, microscopía, reacciones químicas.", color: "yellow" },
  { n: "03", title: "Videojuegos y creación digital",  desc: "Scratch, MakeCode Arcade, Mario Maker, Roblox Studio, micro:bit, pixel art, dibujo con IA.", color: "mag", dark: true },
  { n: "04", title: "Retos, juegos y merienda", desc: "Kahoots, retos por equipos y un descanso para coger fuerzas. Saludable y divertido.", color: "cyan" },
];

const D_PLANS = [
  { name: "Curso regular", price: 55,  unit: "€/mes", freq: "1 día / semana",  features: ["Clase semanal de 90 min", "Grupos mixtos máx. 8", "Materiales incluidos", "Sin matrícula · sin permanencia", "Cambio de horario flexible"], featured: false, cta: "Reservar clase prueba" },
  { name: "Campamento verano", price: 150, unit: "€/semana", freq: "L–V · 9:00 – 14:00", features: ["Cada día un reto distinto", "Materiales y merienda incluidos", "Cada semana temática distinta", "Plazas limitadas por aula", "Posibilidad de varias semanas"], featured: true, cta: "Reservar plaza campa" },
];

const D_FAQ = [
  { q: "¿Desde qué edad pueden venir?", a: "A partir de 5 años, aproximadamente. No hay tramos cerrados — los grupos son mixtos y cada peque avanza a su ritmo. Así los más pequeños ven referentes mayores y los mayores explican lo que saben (que es la mejor forma de aprender)." },
  { q: "¿Necesita conocimientos previos?", a: "Ninguno. La clase parte de cero para quien empieza, y propone retos más avanzados para quien ya programa. Lo que sí pedimos es ganas de tocar, romper y volver a montar." },
  { q: "¿Cómo es una clase regular?", a: "90 minutos, un día por semana, grupos mixtos de máximo 8. Cada peque trae su proyecto activo y la profe va rotando. No hay clase magistral — se aprende haciendo." },
  { q: "¿Pueden empezar en cualquier momento del curso?", a: "Sí. Ofrecemos una clase de prueba gratis para que conozcan el aula, los materiales y al grupo. Si encaja, se incorporan a la semana siguiente." },
  { q: "¿Qué incluye la cuota mensual?", a: "Materiales, kits electrónicos, software con licencia educativa y todos los proyectos que se hagan. Sin matrícula. Sin permanencia." },
  { q: "¿Hay descuentos por hermanos?", a: "Sí: 15% sobre el segundo hermano y 20% sobre el tercero. Se aplica automáticamente." },
  { q: "¿De qué va el campamento de verano?", a: "Una semana intensiva (L–V de 9:00 a 14:00). Cada día combinamos robótica + ciencia espectacular + videojuegos + retos por equipos. Cada semana tiene temática distinta, así que se pueden apuntar a varias seguidas sin repetir actividad." },
  { q: "¿Cuánto cuesta el campamento y qué incluye?", a: "150€ la semana. Incluye todos los materiales, los kits que utilicen y la merienda. Plazas limitadas por aula." },
  { q: "¿Qué tiene que traer mi peque?", a: "Ganas. Nada más. Materiales, kits, ordenadores y merienda (en el campamento) los ponemos nosotros." },
  { q: "¿¿Mi peque ya programa… se va a aburrir?", a: "No. Al ser grupos mixtos sin tier rígido, le proponemos retos a su nivel: diseño de videojuegos completos, automatización de dispositivos, electrónica con Arduino. Vienen muchos de fuera con experiencia previa." },
];

// === Mini illustrations ===
const DRocket = ({ size = 40 }) => (
  <svg viewBox="0 0 40 40" width={size} height={size}>
    <path d="M20 4 C26 10 28 18 28 24 L24 28 L16 28 L12 24 C12 18 14 10 20 4 Z" fill={D_PALETTE.paper} stroke={D_PALETTE.ink} strokeWidth="2.5"/>
    <circle cx="20" cy="16" r="3" fill={D_PALETTE.mag} stroke={D_PALETTE.ink} strokeWidth="2"/>
    <path d="M16 28 L13 35 L17 32 L20 36 L23 32 L27 35 L24 28 Z" fill={D_PALETTE.lime} stroke={D_PALETTE.ink} strokeWidth="2"/>
  </svg>
);
const DStarBurst = ({ size = 100, color = D_PALETTE.yellow, children, rotate = 0 }) => (
  <div style={{ position: "relative", width: size, height: size, transform: `rotate(${rotate}deg)` }}>
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: "absolute", inset: 0, filter: `drop-shadow(4px 4px 0 ${D_PALETTE.ink})` }}>
      <polygon points="50,2 58,30 88,18 70,42 98,50 70,58 88,82 58,70 50,98 42,70 12,82 30,58 2,50 30,42 12,18 42,30" fill={color} stroke={D_PALETTE.ink} strokeWidth="3" strokeLinejoin="round"/>
    </svg>
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", fontFamily: "'Archivo Black', sans-serif", fontSize: size * 0.13, color: D_PALETTE.ink, padding: size * 0.18, textTransform: "uppercase", lineHeight: 1.05 }}>
      {children}
    </div>
  </div>
);

// Friendly robot mascot — antenna, big eyes, waving hand.
const DBot = ({ size = 180 }) => (
  <svg viewBox="0 0 200 220" width={size} height={size * 220 / 200} style={{ overflow: "visible", display: "block" }}>
    <line x1="100" y1="36" x2="100" y2="14" stroke={D_PALETTE.ink} strokeWidth="4" strokeLinecap="round"/>
    <circle cx="100" cy="10" r="6" fill={D_PALETTE.mag} stroke={D_PALETTE.ink} strokeWidth="3"/>
    <rect x="40" y="36" width="120" height="96" rx="22" fill={D_PALETTE.lime} stroke={D_PALETTE.ink} strokeWidth="4"/>
    <rect x="54" y="50" width="92" height="68" rx="14" fill={D_PALETTE.paper} stroke={D_PALETTE.ink} strokeWidth="3"/>
    <circle cx="82" cy="82" r="10" fill={D_PALETTE.ink}/>
    <circle cx="118" cy="82" r="10" fill={D_PALETTE.ink}/>
    <circle cx="85" cy="79" r="3" fill={D_PALETTE.paper}/>
    <circle cx="121" cy="79" r="3" fill={D_PALETTE.paper}/>
    <path d="M82 100 Q 100 112 118 100" fill="none" stroke={D_PALETTE.ink} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="66" cy="100" r="5" fill={D_PALETTE.mag} opacity="0.65"/>
    <circle cx="134" cy="100" r="5" fill={D_PALETTE.mag} opacity="0.65"/>
    <rect x="86" y="130" width="28" height="10" fill={D_PALETTE.ink}/>
    <rect x="50" y="140" width="100" height="60" rx="14" fill={D_PALETTE.cyan} stroke={D_PALETTE.ink} strokeWidth="4"/>
    <rect x="76" y="158" width="48" height="6" rx="3" fill={D_PALETTE.ink}/>
    <circle cx="82" cy="180" r="4" fill={D_PALETTE.mag}/>
    <circle cx="100" cy="180" r="4" fill={D_PALETTE.yellow}/>
    <circle cx="118" cy="180" r="4" fill={D_PALETTE.lime}/>
    <rect x="30" y="150" width="20" height="40" rx="10" fill={D_PALETTE.cyan} stroke={D_PALETTE.ink} strokeWidth="4"/>
    <g style={{ transformOrigin: "160px 192px", animation: "vd-wave 1.6s ease-in-out infinite" }}>
      <rect x="150" y="150" width="20" height="42" rx="10" fill={D_PALETTE.cyan} stroke={D_PALETTE.ink} strokeWidth="4"/>
      <circle cx="160" cy="150" r="12" fill={D_PALETTE.yellow} stroke={D_PALETTE.ink} strokeWidth="4"/>
    </g>
  </svg>
);

// Speech bubble with tail
const DBubble = ({ children, color = D_PALETTE.paper, rotate = -3, style }) => (
  <div style={{
    position: "relative", display: "inline-block",
    background: color, border: `2.5px solid ${D_PALETTE.ink}`,
    borderRadius: 18, padding: "12px 16px",
    boxShadow: `4px 4px 0 ${D_PALETTE.ink}`,
    fontFamily: "'Archivo Black', sans-serif", fontSize: 14, lineHeight: 1.2,
    textTransform: "uppercase", letterSpacing: "0.02em",
    transform: `rotate(${rotate}deg)`,
    ...style,
  }}>
    {children}
    <div style={{ position: "absolute", left: -10, bottom: 16, width: 16, height: 16, background: color, borderLeft: `2.5px solid ${D_PALETTE.ink}`, borderBottom: `2.5px solid ${D_PALETTE.ink}`, transform: "rotate(45deg)" }}/>
  </div>
);

// ============================================================
// HERO — 4 layouts seleccionables: split, stacked, centered, mosaic
// ============================================================
const HeroPills = () => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
    <span className="vd-pill" style={{ background: D_PALETTE.lime }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: D_PALETTE.ink }}/>
      Academia STEAM · a partir de 5 años
    </span>
    <span className="vd-chip">▸ clases mixtas · Rivas</span>
  </div>
);

const HeroTitle = ({ fontFamily, size }) => (
  <h1 className="vd-display" style={{ fontFamily, fontSize: size, margin: "12px 0 28px" }}>
    CONSTRUYE<br/>
    EL <span className="vd-halo" style={{ "--halo": D_PALETTE.lime }}>FUTURO</span><br/>
    CON TUS<br/>
    PROPIAS <span className="vd-halo" style={{ "--halo": D_PALETTE.yellow, color: D_PALETTE.mag }}>MANOS<span style={{ color: D_PALETTE.ink }}>.</span></span>
  </h1>
);

const HeroSub = ({ align = "left" }) => (
  <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 580, marginBottom: 32, fontWeight: 500, color: D_PALETTE.inkSoft, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0, textAlign: align }}>
    Extraescolares STEAM para mentes entre 5 y 11 años. Programación, robótica, ciencia y arte. <strong style={{ color: D_PALETTE.ink }}>Aprenden haciendo. Y celebrando cada error.</strong>
  </p>
);

const HeroCTAs = ({ align = "left" }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: align === "center" ? "center" : "flex-start" }}>
    <a className="vd-btn" href="#contacto">Reservar clase prueba →</a>
    <a className="vd-btn vd-btn--white" href="#campamento">Ver campamento ⚡</a>
  </div>
);

const HeroStats = ({ marginTop = 48 }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop, border: `2px solid ${D_PALETTE.ink}`, borderRadius: 12, overflow: "hidden", background: D_PALETTE.paper, boxShadow: `5px 5px 0 ${D_PALETTE.ink}` }}>
    {[
      { n: "GRATIS",    l: "clase de prueba",  color: D_PALETTE.mag },
      { n: "MÁX. 8",   l: "por grupo" },
      { n: "INCLUIDOS", l: "todos los materiales" },
      { n: "55€/MES",   l: "sin matrícula" },
    ].map((s, i) => (
      <div key={i} style={{ padding: "18px 16px", borderRight: i < 3 ? `2px solid ${D_PALETTE.ink}` : "none", textAlign: "left" }}>
        <div className="vd-display" style={{ fontSize: s.n.length > 6 ? 28 : 32, color: s.color || D_PALETTE.ink }}>{s.n}</div>
        <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: D_PALETTE.mute, marginTop: 4, fontWeight: 600 }}>{s.l}</div>
      </div>
    ))}
  </div>
);

const HeroPhotoCard = ({ width = "88%", rotate = -3 }) => (
  <div className="vd-sticker" style={{ padding: 0, transform: `rotate(${rotate}deg)`, width, overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: `2px solid ${D_PALETTE.ink}`, background: D_PALETTE.darkBand }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: D_PALETTE.mag, border: `1.5px solid ${D_PALETTE.ink}` }}/>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: D_PALETTE.yellow, border: `1.5px solid ${D_PALETTE.ink}` }}/>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: D_PALETTE.lime, border: `1.5px solid ${D_PALETTE.ink}` }}/>
      <div className="vd-mono" style={{ marginLeft: 10, fontSize: 11, color: D_PALETTE.lime }}>~/makers-lab — aula 02 — LIVE</div>
    </div>
    <PhotoPlaceholder tone="warm" label="LAB" hint="niños programando" height={340} radius={0} />
    <div className="vd-mono" style={{ padding: "14px 18px", fontSize: 12, lineHeight: 1.7, background: D_PALETTE.paper, color: D_PALETTE.inkSoft }}>
      <div><span style={{ color: D_PALETTE.mag, fontWeight: 700 }}>$</span> run --module=robotics --age=9</div>
      <div style={{ color: D_PALETTE.limeD, fontWeight: 700 }}>→ kit: spike-prime ✓ loaded</div>
      <div style={{ color: D_PALETTE.ink }}>→ program: line-follower<span className="vd-caret"/></div>
    </div>
  </div>
);

const HUDStrip = ({ time }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: D_PALETTE.mute, textTransform: "uppercase", letterSpacing: "0.16em" }}>
    <span><span className="vd-chip-dot" style={{ display: "inline-block", marginRight: 8 }}/>¡Hola! · curso 26/27 abierto</span>
    <span>{time} · RIVAS · 40.359°N 3.516°W</span>
  </div>
);

const HeroD = ({ mode = "split", displayFamily, time }) => {
  // ---- A · SPLIT — texto izq, foto-terminal der ----
  if (mode === "split") {
    return (
      <section style={{ padding: "30px 56px 80px", position: "relative" }}>
        <HUDStrip time={time}/>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center", position: "relative" }}>
          <div>
            <HeroPills/>
            <HeroTitle fontFamily={displayFamily} size={102}/>
            <HeroSub/>
            <HeroCTAs/>
            <HeroStats/>
          </div>
          <div style={{ position: "relative", height: 540 }}>
            <div style={{ position: "absolute", top: 20, left: 16, width: "88%" }}>
              <HeroPhotoCard width="100%" rotate={-3}/>
            </div>
            <div style={{ position: "absolute", top: -30, right: -30, zIndex: 3, width: 200 }}>
              <div style={{ position: "absolute", top: -20, left: -150 }}>
                <DBubble color={D_PALETTE.yellow} rotate={-6}>¡Hola!<br/>¿construimos algo?</DBubble>
              </div>
              <div className="vd-bounce" style={{ "--r": "6deg" }}>
                <DBot size={170}/>
              </div>
            </div>
            <div className="vd-sticker vd-sticker--mag vd-bounce" style={{ position: "absolute", bottom: 10, right: -10, padding: "14px 20px", "--r": "4deg", maxWidth: 220 }}>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>// gratis</div>
              <div className="vd-display" style={{ fontSize: 22, marginTop: 2 }}>Clase de prueba</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>sin compromiso · 90 min</div>
            </div>
            <svg style={{ position: "absolute", top: -10, left: -20, width: 240, height: 180, pointerEvents: "none", zIndex: 2 }} viewBox="0 0 240 180">
              <path d="M10 160 Q 80 -10 220 80" fill="none" stroke={D_PALETTE.ink} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round"/>
            </svg>
            <div style={{ position: "absolute", top: 40, left: -10, transform: "rotate(-20deg)" }}>
              <DRocket size={44}/>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---- B · STACKED — título XXL, fotos como mosaico abajo ----
  if (mode === "stacked") {
    return (
      <section style={{ padding: "30px 56px 80px", position: "relative" }}>
        <HUDStrip time={time}/>
        <div style={{ position: "relative" }}>
          {/* floating mascot top-right */}
          <div style={{ position: "absolute", top: -10, right: 0, zIndex: 3 }}>
            <div style={{ position: "absolute", top: 10, right: 140 }}>
              <DBubble color={D_PALETTE.yellow} rotate={-6}>¡Hola!<br/>¿qué construimos?</DBubble>
            </div>
            <div className="vd-bounce" style={{ "--r": "6deg" }}>
              <DBot size={160}/>
            </div>
          </div>
          <HeroPills/>
          <HeroTitle fontFamily={displayFamily} size={138}/>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, marginTop: 40, alignItems: "start" }}>
            <div>
              <HeroSub/>
              <HeroCTAs/>
            </div>
            <div className="vd-sticker vd-sticker--mag" style={{ padding: "20px 24px", transform: "rotate(2deg)" }}>
              <div className="vd-mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>// gratis</div>
              <div className="vd-display" style={{ fontSize: 30, marginTop: 4 }}>Clase de prueba</div>
              <div style={{ fontSize: 13, marginTop: 6 }}>sin compromiso · 90 min</div>
            </div>
          </div>
        </div>

        {/* Photo mosaic */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16, marginTop: 50, alignItems: "stretch" }}>
          <div className="vd-sticker" style={{ padding: 10, transform: "rotate(-1.5deg)" }}>
            <PhotoPlaceholder tone="warm" label="LAB · LX-300" hint="grupo construyendo robot" height={300} radius={6}/>
          </div>
          <div className="vd-sticker vd-sticker--lime" style={{ padding: 10, transform: "rotate(1deg)" }}>
            <PhotoPlaceholder tone="lime" label="MINI MAKERS" hint="5-6 años" height={180} radius={6}/>
            <div style={{ fontFamily: displayFamily, fontSize: 14, textTransform: "uppercase", marginTop: 10 }}>El primer reto</div>
          </div>
          <div className="vd-sticker vd-sticker--cyan" style={{ padding: 10, transform: "rotate(-1deg)" }}>
            <PhotoPlaceholder tone="cool" label="CODE & BUILD" hint="7-8 años" height={180} radius={6}/>
            <div style={{ fontFamily: displayFamily, fontSize: 14, textTransform: "uppercase", marginTop: 10 }}>Su primer robot</div>
          </div>
        </div>
        <HeroStats marginTop={40}/>
      </section>
    );
  }

  // ---- C · CENTERED — poster style, sin foto principal, mascotas a los lados ----
  if (mode === "centered") {
    return (
      <section style={{ padding: "30px 56px 80px", position: "relative", textAlign: "center" }}>
        <HUDStrip time={time}/>
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto" }}>
          {/* left mascot */}
          <div style={{ position: "absolute", top: 120, left: -40, zIndex: 2 }}>
            <div className="vd-bounce" style={{ "--r": "-8deg" }}>
              <DBot size={140}/>
            </div>
            <div style={{ position: "absolute", top: -20, right: -80 }}>
              <DBubble color={D_PALETTE.yellow} rotate={-6}>¡Vamos!</DBubble>
            </div>
          </div>
          {/* right star */}
          <div style={{ position: "absolute", top: 60, right: -10, zIndex: 2 }} className="vd-bounce">
            <DStarBurst size={140} color={D_PALETTE.mag} rotate={12}>
              <span style={{ color: D_PALETTE.paper }}>Clase<br/>de prueba<br/>GRATIS</span>
            </DStarBurst>
          </div>
          {/* trajectory */}
          <svg style={{ position: "absolute", top: 200, left: "10%", width: "80%", height: 80, pointerEvents: "none", zIndex: 1 }} viewBox="0 0 800 80" preserveAspectRatio="none">
            <path d="M0 60 Q 400 -20 800 50" fill="none" stroke={D_PALETTE.ink} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round"/>
          </svg>
          <div style={{ position: "absolute", top: 175, right: "8%" }}>
            <DRocket size={48}/>
          </div>

          <div style={{ display: "inline-flex", marginBottom: 20 }}>
            <HeroPills/>
          </div>
          <h1 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 168, margin: "0 0 32px", lineHeight: 0.88 }}>
            CONSTRUYE<br/>
            EL <span className="vd-halo" style={{ "--halo": D_PALETTE.lime }}>FUTURO</span><br/>
            CON TUS <span className="vd-halo" style={{ "--halo": D_PALETTE.yellow, color: D_PALETTE.mag }}>MANOS<span style={{ color: D_PALETTE.ink }}>.</span></span>
          </h1>
          <HeroSub align="center"/>
          <HeroCTAs align="center"/>
          <div style={{ marginTop: 50 }}>
            <HeroStats marginTop={0}/>
          </div>
        </div>
      </section>
    );
  }

  // ---- D · MOSAIC — magazine layout, varias fotos + título cruzando ----
  if (mode === "mosaic") {
    return (
      <section style={{ padding: "30px 56px 80px", position: "relative" }}>
        <HUDStrip time={time}/>
        <HeroPills/>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 0.9fr", gap: 18, marginTop: 20, alignItems: "stretch" }}>
          {/* col 1 — photo top, sticker bottom */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="vd-sticker" style={{ padding: 8, transform: "rotate(-2deg)" }}>
              <PhotoPlaceholder tone="lime" label="MINI MAKERS" hint="5-6 años" height={240} radius={6}/>
            </div>
            <div className="vd-sticker vd-sticker--mag" style={{ padding: "18px 20px", transform: "rotate(1deg)" }}>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>// gratis</div>
              <div className="vd-display" style={{ fontSize: 24, marginTop: 4 }}>Clase prueba</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>90 min · sin compromiso</div>
            </div>
            <div className="vd-sticker vd-sticker--yellow" style={{ padding: "16px 18px", transform: "rotate(-0.5deg)" }}>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>★ abierto en 2025</div>
              <div className="vd-display" style={{ fontSize: 22, marginTop: 4 }}>1 año en Rivas</div>
            </div>
          </div>
          {/* col 2 — centered title block */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 96, margin: "0 0 24px", lineHeight: 0.9 }}>
              CONSTRUYE<br/>
              EL <span className="vd-halo" style={{ "--halo": D_PALETTE.lime }}>FUTURO</span><br/>
              CON TUS<br/>
              PROPIAS <span className="vd-halo" style={{ "--halo": D_PALETTE.yellow, color: D_PALETTE.mag }}>MANOS<span style={{ color: D_PALETTE.ink }}>.</span></span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.5, marginBottom: 24, fontWeight: 500, color: D_PALETTE.inkSoft }}>
              Extraescolares STEAM para mentes entre 5 y 11 años. <strong style={{ color: D_PALETTE.ink }}>Aprenden haciendo. Y celebrando cada error.</strong>
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="vd-btn" href="#contacto">Reservar clase prueba →</a>
              <a className="vd-btn vd-btn--white" href="#campamento">Ver campamento ⚡</a>
            </div>
          </div>
          {/* col 3 — photo + mascot */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            <div className="vd-sticker" style={{ padding: 8, transform: "rotate(2deg)" }}>
              <PhotoPlaceholder tone="warm" label="LAB AVANZADO" hint="9-11 años · robot" height={280} radius={6}/>
            </div>
            <div className="vd-sticker vd-sticker--cyan" style={{ padding: "16px 18px", transform: "rotate(-1deg)" }}>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>// rivas</div>
              <div className="vd-display" style={{ fontSize: 22, marginTop: 4 }}>4 min metro</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Rivas Futura</div>
            </div>
            <div style={{ position: "absolute", bottom: -20, left: -50, zIndex: 3 }} className="vd-bounce">
              <DBot size={120}/>
            </div>
          </div>
        </div>
        <HeroStats marginTop={40}/>
      </section>
    );
  }

  return null;
};

window.HeroD = HeroD;

const VariationD = ({ fontSet = "archivo", heroLayout = "split" }) => {
  const rootRef = React.useRef(null);
  const easter = useEasterEgg(rootRef);
  const [logoClicks, setLogoClicks] = React.useState(0);
  const onLogoClick = () => {
    const n = logoClicks + 1; setLogoClicks(n);
    if (n >= 3) { easter.trigger(); setLogoClicks(0); }
    setTimeout(() => setLogoClicks(0), 600);
  };
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const displayFamily = {
    archivo: "'Archivo Black', system-ui, sans-serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    fraunces: "'Fraunces', serif",
  }[fontSet] || "'Archivo Black', sans-serif";

  const time = now.toTimeString().slice(0,5);

  return (
    <div ref={rootRef} className="vd-root vd-grid" style={{ minHeight: 5000, overflow: "hidden" }}>
      <style>{dCss}</style>

      {/* === NAV === */}
      <nav className="vd-nav">
        <a href="#" onClick={(e) => { e.preventDefault(); onLogoClick(); }} title="psst… triple click">
          <Logo height={60} />
        </a>
        <div className="vd-nav-links">
          <a href="#clases">Las clases</a>
          <a href="#campamento">Campamento</a>
          <a href="#disciplinas">STEAM</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
          <a href="#mapa">Visitanos</a>
        </div>
        <a className="vd-btn" href="#contacto">Inscríbete →</a>
      </nav>

      {/* === HERO === */}
      <HeroD mode={heroLayout} displayFamily={displayFamily} time={time}/>

      {/* === MARQUEE strip === */}
      <div style={{ background: D_PALETTE.ink, color: D_PALETTE.lime, borderTop: `2.5px solid ${D_PALETTE.ink}`, borderBottom: `2.5px solid ${D_PALETTE.ink}` }}>
        <Marquee
          items={["SCRATCH", "WEDO", "MICROBIT", "SPIKE-PRIME", "ARDUINO", "MAKECODE", "MARIO MAKER", "STOP-MOTION", "ELECTRÓNICA", "DISEÑO 3D", "PIXEL ART", "PYTHON"]}
          fontFamily="'Archivo Black', sans-serif"
          fontSize={24} fontWeight={900} color={D_PALETTE.lime}
          separator={<span style={{ color: D_PALETTE.mag }}>✦</span>} py={18} speed={45}
        />
      </div>

      {/* === STEAM === */}
      <section id="disciplinas" style={{ padding: "100px 56px 70px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 50, gap: 30, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 760 }}>
            <span className="vd-label">02 // disciplinas</span>
            <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 72, margin: "12px 0 14px" }}>
              CINCO LETRAS.<br/>
              <span className="vd-halo" style={{ "--halo": D_PALETTE.cyan }}>UN MILLÓN</span> DE COMBINACIONES.
            </h2>
            <p style={{ fontSize: 16, color: D_PALETTE.inkSoft, maxWidth: 580, lineHeight: 1.5, fontWeight: 500 }}>
              Cada disciplina se mezcla con las otras. Un proyecto de programación termina pintándose, uno de ciencia acaba en código.
            </p>
          </div>
          <div className="vd-chip"><span className="vd-chip-dot"/> 5/5 módulos activos</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {D_STEAM.map((d, i) => (
            <div key={d.L} className="vd-sticker" style={{ background: d.color, color: d.dark ? D_PALETTE.paper : D_PALETTE.ink, padding: "22px 20px 22px", transform: `rotate(${d.r}deg)`, position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div className="vd-letter" style={{ color: d.dark ? D_PALETTE.paper : D_PALETTE.ink }}>{d.L}</div>
                <div className="vd-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.75, marginTop: 6 }}>0{i+1}/05</div>
              </div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 6 }}>{d.word}</div>
              <div style={{ fontSize: 13, marginTop: 12, lineHeight: 1.4, fontWeight: 500 }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === LAS CLASES (curso regular) === */}
      <section id="clases" style={{ padding: "60px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, gap: 30, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 760 }}>
            <span className="vd-label">03 // las clases</span>
            <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 72, margin: "12px 0 14px" }}>
              CLASES <span style={{ color: D_PALETTE.mag }}>MIXTAS.</span><br/>
              <span className="vd-halo" style={{ "--halo": D_PALETTE.lime }}>CADA PEQUE</span> A SU RITMO.
            </h2>
            <p style={{ fontSize: 17, color: D_PALETTE.inkSoft, maxWidth: 620, lineHeight: 1.55, fontWeight: 500 }}>
              No agrupamos por edad ni por nivel. Los grupos mezclan peques desde 5 años, cada uno avanzando con su proyecto. Los mayores explican lo que saben, los pequeños ven referentes y todos aprenden de los demás.
            </p>
          </div>
          <div className="vd-bounce" style={{ "--r": "-6deg" }}>
            <DStarBurst size={130} color={D_PALETTE.lime} rotate={-6}>
              1 clase<br/>de prueba<br/>GRATIS
            </DStarBurst>
          </div>
        </div>

        {/* Las clases — 4 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { n: "01", t: "Grupo reducido", d: "Máximo 8 peques por aula. La profe te conoce, conoce tu proyecto y conoce tu ritmo.", color: D_PALETTE.lime, r: -1.5 },
            { n: "02", t: "1 día / semana", d: "90 minutos de hacer cosas. Eliges el día que mejor te encaje y se puede cambiar cada mes.", color: D_PALETTE.yellow, r: 1 },
            { n: "03", t: "Aprender haciendo", d: "Nada de clases magistrales. Llegan, eligen reto, construyen, fallan, ajustan, lo enseñan.", color: D_PALETTE.cyan, r: -1 },
            { n: "04", t: "Materiales pro", d: "Spike Prime, micro:bit, Arduino, MakeCode. Lo mismo que usan ingenieros, a su escala.", color: D_PALETTE.mag, r: 1.5, dark: true },
          ].map((card, i) => (
            <div key={i} className="vd-sticker" style={{ background: card.color, color: card.dark ? D_PALETTE.paper : D_PALETTE.ink, padding: "22px 20px", transform: `rotate(${card.r}deg)` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 36 }}>{card.n}</div>
                <span className="vd-mono" style={{ fontSize: 10, opacity: 0.7, fontWeight: 700 }}>// clase</span>
              </div>
              <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 22, textTransform: "uppercase", lineHeight: 1, margin: "0 0 12px" }}>{card.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 500 }}>{card.d}</div>
            </div>
          ))}
        </div>

        {/* Logística row */}
        <div className="vd-sticker" style={{ marginTop: 28, padding: "26px 32px", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28, alignItems: "center" }}>
          <div>
            <div className="vd-mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: D_PALETTE.magD, fontWeight: 700 }}>// cuota mensual</div>
            <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 56, lineHeight: 1, marginTop: 4 }}>55€<span style={{ fontSize: 18, color: D_PALETTE.mute, marginLeft: 6, fontWeight: 600 }}>/mes</span></div>
            <div style={{ fontSize: 13, color: D_PALETTE.inkSoft, marginTop: 6, fontWeight: 500 }}>1 día por semana · 90 min · sin matrícula</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, borderLeft: `2px dashed ${D_PALETTE.ink}30`, paddingLeft: 28 }}>
            {[
              { l: "Materiales", v: "incluidos" },
              { l: "Permanencia", v: "ninguna" },
              { l: "Hermanos", v: "−15% / −20%" },
            ].map((x, i) => (
              <div key={i}>
                <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: D_PALETTE.mute, fontWeight: 700 }}>{x.l}</div>
                <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 18, marginTop: 2, textTransform: "uppercase" }}>{x.v}</div>
              </div>
            ))}
          </div>
          <a className="vd-btn" href="#contacto">Reservar prueba →</a>
        </div>
      </section>

      {/* === CAMPAMENTO DE VERANO (PROTAGONISTA) === */}
      <section id="campamento" style={{ padding: "80px 56px 70px", position: "relative" }}>
        <div className="vd-sticker" style={{ padding: 0, overflow: "hidden", background: D_PALETTE.darkBand, color: D_PALETTE.paper, position: "relative" }}>
          {/* Decorative stars */}
          {[...Array(40)].map((_, i) => (
            <div key={i} style={{ position: "absolute", left: `${(i*41)%100}%`, top: `${(i*67)%100}%`, width: i%6===0?3:1.5, height: i%6===0?3:1.5, borderRadius: "50%", background: i%5===0 ? D_PALETTE.yellow : D_PALETTE.paper, opacity: 0.5, pointerEvents: "none" }}/>
          ))}

          <div style={{ padding: "50px 50px 40px", position: "relative", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 50, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 18 }}>
                <span className="vd-tag" style={{ background: D_PALETTE.yellow, color: D_PALETTE.ink }}>★ NOVEDAD VERANO</span>
                <span className="vd-tag">L–V · 9:00–14:00</span>
                <span className="vd-tag" style={{ background: D_PALETTE.lime, color: D_PALETTE.ink }}>150€ / SEMANA</span>
              </div>
              <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 92, margin: "0 0 22px", lineHeight: 0.9 }}>
                <span className="vd-glow-lime">CAMPAMENTO</span><br/>
                DE <span className="vd-glow-mag">VERANO</span>.
              </h2>
              <p style={{ fontSize: 19, lineHeight: 1.5, marginBottom: 24, fontWeight: 500, maxWidth: 540 }}>
                Una semana intensiva donde <strong style={{ color: D_PALETTE.lime }}>cada día es un reto distinto</strong>. Combinamos cada jornada robótica, ciencia espectacular, videojuegos y juegos en equipo.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 28, color: D_PALETTE.paper + "CC", fontWeight: 500, maxWidth: 540 }}>
                Cada semana tiene temática propia, así que pueden apuntarse a varias seguidas sin repetir actividad.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="vd-btn vd-btn--lime" href="#contacto">Reservar plaza campa →</a>
                <a className="vd-btn vd-btn--white" href="#campamento-pilares">Ver qué se hace ↓</a>
              </div>
            </div>
            <div style={{ position: "relative", height: 360 }}>
              <div className="vd-sticker" style={{ position: "absolute", top: 10, left: 0, padding: 10, transform: "rotate(-3deg)", width: "100%", background: D_PALETTE.paper, color: D_PALETTE.ink }}>
                <PhotoPlaceholder tone="warm" label="CAMPA" hint="niños en el aula · verano" height={300} radius={6}/>
              </div>
              <div className="vd-sticker vd-sticker--yellow vd-bounce" style={{ position: "absolute", bottom: -10, left: -20, padding: "14px 18px", "--r": "-6deg", color: D_PALETTE.ink }}>
                <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75 }}>// horario</div>
                <div className="vd-display" style={{ fontSize: 22, marginTop: 2 }}>9:00 – 14:00</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>incluye merienda</div>
              </div>
              <div className="vd-bounce" style={{ position: "absolute", top: -10, right: -10, "--r": "10deg" }}>
                <DStarBurst size={110} color={D_PALETTE.mag} rotate={10}>
                  <span style={{ color: D_PALETTE.paper }}>Cada<br/>semana<br/>distinta</span>
                </DStarBurst>
              </div>
            </div>
          </div>

          {/* Los 4 pilares */}
          <div id="campamento-pilares" style={{ padding: "30px 50px 50px", position: "relative" }}>
            <div className="vd-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: D_PALETTE.lime, fontWeight: 700, marginBottom: 24 }}>
              // qué van a hacer cada día
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
              {CAMP_PILARES.map((p, i) => {
                const cmap = { lime: D_PALETTE.lime, yellow: D_PALETTE.yellow, mag: D_PALETTE.mag, cyan: D_PALETTE.cyan };
                return (
                  <div key={i} className="vd-sticker" style={{ background: cmap[p.color], color: p.dark ? D_PALETTE.paper : D_PALETTE.ink, padding: "20px 18px", transform: `rotate(${[-1.5, 1, -1, 1.5][i]}deg)` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 32 }}>{p.n}</div>
                      <span className="vd-mono" style={{ fontSize: 10, opacity: 0.7, fontWeight: 700 }}>// pilar</span>
                    </div>
                    <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 18, textTransform: "uppercase", lineHeight: 1.05, margin: "8px 0 10px" }}>{p.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 500 }}>{p.desc}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 30, padding: "18px 22px", border: `1.5px dashed ${D_PALETTE.lime}66`, borderRadius: 12, background: D_PALETTE.bg2 || "transparent", fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: D_PALETTE.paper + "BB", letterSpacing: "0.04em", lineHeight: 1.6 }}>
              <span style={{ color: D_PALETTE.lime, fontWeight: 700 }}>▸</span> Veh­ículos, animales, deportes, atracciones, naves espaciales, máquinas... · volcanes, fluidos no newtonianos, circuitos, energía solar, microscopía, química... · Scratch, MakeCode Arcade, Mario Maker, Roblox Studio, pixel art, dibujo con IA, micro:bit...
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section style={{ padding: "80px 56px" }}>
        <div style={{ marginBottom: 50 }}>
          <span className="vd-label">04 // familias</span>
          <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 72, margin: "12px 0 14px", maxWidth: 800 }}>
            LO QUE CUENTAN<br/>
            LAS <span style={{ color: D_PALETTE.mag }}>FAMILIAS.</span>
          </h2>
          <p style={{ fontSize: 14, color: D_PALETTE.mute, maxWidth: 600, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.02em" }}>
            <span style={{ color: D_PALETTE.magD, fontWeight: 700 }}>// nota interna</span> testimonios ejemplo — sustituir por reseñas reales antes de publicar.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "start", maxWidth: 900 }}>
          {D_TESTIMONIALS.map((t, i) => (
            <div key={i} className="vd-sticker" style={{ background: t.color, padding: 28, transform: `rotate(${t.r}deg)`, marginTop: i === 1 ? 24 : 0 }}>
              <div className="vd-mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: D_PALETTE.magD, fontWeight: 700, marginBottom: 14 }}>
                ▸ testimonio_{String(i+1).padStart(2, "0")}.log
              </div>
              <p style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 600, margin: "0 0 22px", color: D_PALETTE.ink }}>
                "{t.quote}"
              </p>
              <div style={{ paddingTop: 16, borderTop: `2px dashed ${D_PALETTE.ink}40`, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: D_PALETTE.paper, border: `2px solid ${D_PALETTE.ink}`, display: "grid", placeItems: "center", fontFamily: "'Archivo Black', sans-serif", fontSize: 13 }}>
                  {t.name.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{t.name}</div>
                  <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: D_PALETTE.mute, fontWeight: 600 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SAGAN dark band === */}
      <section style={{ padding: "100px 56px", margin: "60px 0", background: D_PALETTE.darkBand, color: D_PALETTE.paper, position: "relative", overflow: "hidden", borderTop: `2.5px solid ${D_PALETTE.ink}`, borderBottom: `2.5px solid ${D_PALETTE.ink}` }}>
        {/* stars */}
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i*41)%100}%`, top: `${(i*67)%100}%`, width: i%6===0?3:1.5, height: i%6===0?3:1.5, borderRadius: "50%", background: i%5===0 ? D_PALETTE.lime : D_PALETTE.paper, opacity: 0.6, boxShadow: i%6===0 ? `0 0 6px ${D_PALETTE.lime}` : "none" }}/>
        ))}
        {/* orbit ring */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 720, height: 720, borderRadius: "50%", border: `1px dashed ${D_PALETTE.paper}22`, animation: "vd-spin 80s linear infinite" }}>
          <div style={{ position: "absolute", top: -6, left: "50%", marginLeft: -6, width: 12, height: 12, borderRadius: "50%", background: D_PALETTE.lime, boxShadow: `0 0 16px ${D_PALETTE.lime}` }}/>
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 520, height: 520, borderRadius: "50%", border: `1px dashed ${D_PALETTE.paper}22`, animation: "vd-spin 60s linear infinite reverse" }}>
          <div style={{ position: "absolute", top: "50%", right: -5, marginTop: -5, width: 10, height: 10, borderRadius: "50%", background: D_PALETTE.mag, boxShadow: `0 0 14px ${D_PALETTE.mag}` }}/>
        </div>

        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <span className="vd-label" style={{ color: D_PALETTE.lime }}>05 // por_qué_importa.txt</span>
          <blockquote className="vd-display" style={{ fontFamily: displayFamily, fontSize: 56, lineHeight: 1.15, margin: "24px 0", fontWeight: 900 }}>
            "VIVIMOS EN UNA SOCIEDAD <span className="vd-glow-cyan">PROFUNDAMENTE DEPENDIENTE</span> DE LA CIENCIA Y LA TECNOLOGÍA, Y EN LA QUE <span className="vd-glow-mag">CASI NADIE</span> SABE NADA DE ESTOS TEMAS."
          </blockquote>
          <div className="vd-mono" style={{ fontSize: 13, letterSpacing: "0.25em", color: D_PALETTE.lime, marginTop: 30, fontWeight: 700 }}>
            — CARL SAGAN · 1996
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="precios" style={{ padding: "60px 56px" }}>
        <div style={{ marginBottom: 50 }}>
          <span className="vd-label">06 // precios</span>
          <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 72, margin: "12px 0 14px", maxWidth: 820 }}>
            PRECIOS <span className="vd-halo" style={{ "--halo": D_PALETTE.lime }}>CLAROS.</span><br/>
            SIN MATRÍCULA.
          </h2>
          <p style={{ fontSize: 16, color: D_PALETTE.inkSoft, lineHeight: 1.55, fontWeight: 500, maxWidth: 620 }}>
            Una cuota mensual para el curso regular. Una semana de campamento si quieren más en verano. Cero letra pequeña.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "start" }}>
          {D_PLANS.map((plan, i) => (
            <div key={i} className="vd-sticker" style={{
              background: plan.featured ? D_PALETTE.mag : D_PALETTE.paper,
              color: plan.featured ? D_PALETTE.paper : D_PALETTE.ink,
              padding: 36,
              transform: plan.featured ? "rotate(-1deg)" : "rotate(1deg)",
              position: "relative",
            }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -22, right: -22, zIndex: 2 }}>
                  <div className="vd-bounce" style={{ "--r": "14deg" }}>
                    <DStarBurst size={96} color={D_PALETTE.lime} rotate={14}>
                      Solo en<br/>verano
                    </DStarBurst>
                  </div>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 36 }}>{plan.name}</div>
                  <div className="vd-mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 4, opacity: 0.85 }}>{plan.freq}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", marginTop: 28, marginBottom: 28 }}>
                <span className="vd-display" style={{ fontFamily: displayFamily, fontSize: 96, color: plan.featured ? D_PALETTE.lime : D_PALETTE.ink }}>{plan.price}€</span>
                <span style={{ fontSize: 17, marginLeft: 10, opacity: 0.78, fontWeight: 600 }}>{plan.unit.replace(/^€/, "")}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", fontSize: 15, lineHeight: 1.7, fontWeight: 500 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingBottom: 8, marginBottom: 8, borderBottom: j < plan.features.length - 1 ? `1.5px dashed ${plan.featured ? D_PALETTE.paper + "55" : D_PALETTE.ink + "30"}` : "none" }}>
                    <span style={{ fontWeight: 900, color: plan.featured ? D_PALETTE.lime : D_PALETTE.mag }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "vd-btn vd-btn--lime" : "vd-btn"} href="#contacto" style={{ width: "100%", justifyContent: "center" }}>
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Bonus row — descuentos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 26 }}>
          {[
            { l: "Sin matrícula", v: "Cero coste de entrada", icon: "✓" },
            { l: "Descuento hermanos", v: "−15% el 2º · −20% el 3º", icon: "♥" },
            { l: "Sin permanencia", v: "Te das de baja cuando quieras", icon: "↻" },
          ].map((b, i) => (
            <div key={i} className="vd-sticker" style={{ background: [D_PALETTE.lime, D_PALETTE.yellow, D_PALETTE.cyan][i], padding: "18px 22px", transform: `rotate(${[-0.8, 0.5, -0.4][i]}deg)`, display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 28, lineHeight: 1, color: D_PALETTE.ink }}>{b.icon}</div>
              <div>
                <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, opacity: 0.75 }}>{b.l}</div>
                <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 17, marginTop: 2, textTransform: "uppercase" }}>{b.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section id="faq" style={{ padding: "100px 56px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 60, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 30 }}>
            <span className="vd-label">07 // dudas</span>
            <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 60, margin: "12px 0 20px" }}>
              PREGUNTAS<br/><span style={{ color: D_PALETTE.mag }}>FRECUENTES</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 22, color: D_PALETTE.inkSoft, fontWeight: 500 }}>
              ¿No ves la tuya? Escríbenos. Respondemos en menos de 24h laborables.
            </p>
            <a className="vd-btn" href="#contacto">Preguntar →</a>
          </div>
          <div>
            {D_FAQ.map((f, i) => (
              <details key={i} className="vd-faq" open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === MAP === */}
      <section id="mapa" style={{ padding: "60px 56px" }}>
        <div className="vd-sticker" style={{ overflow: "hidden", padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", minHeight: 380 }}>
            <div style={{ padding: 40, background: D_PALETTE.yellow }}>
              <span className="vd-label">08 // ubicación</span>
              <h3 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 52, margin: "12px 0 20px" }}>
                EN<br/><span style={{ color: D_PALETTE.mag }}>RIVAS.</span>
              </h3>
              <div style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 500 }}>
                <strong style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 16, textTransform: "uppercase", letterSpacing: "0.02em" }}>Av. Francisco de Quevedo, 3 · Local 2</strong><br/>
                28522 Rivas-Vaciamadrid<br/>
                <span className="vd-mono" style={{ fontSize: 13 }}>► 40.359°N · 3.516°W</span><br/>
                <span style={{ fontWeight: 700 }}>★ 4 min de Metro Rivas Futura</span>
              </div>
              <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="vd-pill">Parking</span>
                <span className="vd-pill" style={{ background: D_PALETTE.lime }}>Aula 60m²</span>
                <span className="vd-pill">Aire renovado</span>
              </div>
            </div>
            <div style={{ position: "relative", background: "#dfeac6", overflow: "hidden" }}>
              <svg viewBox="0 0 600 380" width="100%" height="100%" style={{ display: "block" }}>
                <defs>
                  <pattern id="vd-mapg" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke={D_PALETTE.ink} strokeWidth="0.6" opacity="0.15"/>
                  </pattern>
                </defs>
                <rect width="600" height="380" fill="#dfeac6"/>
                <rect width="600" height="380" fill="url(#vd-mapg)"/>
                <path d="M0 130 Q 200 110 600 190" stroke="#fff" strokeWidth="24" fill="none"/>
                <path d="M150 0 Q 180 200 280 380" stroke="#fff" strokeWidth="20" fill="none"/>
                <path d="M380 0 Q 420 200 360 380" stroke="#fff" strokeWidth="16" fill="none"/>
                <rect x="40" y="50" width="60" height="50" fill={D_PALETTE.lime} stroke={D_PALETTE.ink} strokeWidth="2.5" rx="4"/>
                <rect x="40" y="200" width="80" height="60" fill={D_PALETTE.cyan} stroke={D_PALETTE.ink} strokeWidth="2.5" rx="4"/>
                <rect x="460" y="250" width="100" height="80" fill={D_PALETTE.orange} stroke={D_PALETTE.ink} strokeWidth="2.5" rx="4"/>
                <circle cx="200" cy="270" r="42" fill="#a8c47e" stroke={D_PALETTE.ink} strokeWidth="2.5"/>
                <text x="200" y="275" fontFamily="'Archivo Black', sans-serif" fontSize="13" fill={D_PALETTE.ink} textAnchor="middle">PARQUE</text>
                {/* marker */}
                <g transform="translate(330,170)">
                  <circle r="40" fill={D_PALETTE.mag} opacity="0.18"/>
                  <circle r="40" fill="none" stroke={D_PALETTE.mag} strokeWidth="2" className="vd-pulse"/>
                  <ellipse cx="0" cy="22" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>
                  <path d="M0 -28 C 18 -28 26 -14 22 -2 C 18 8 0 24 0 24 C 0 24 -18 8 -22 -2 C -26 -14 -18 -28 0 -28 Z" fill={D_PALETTE.mag} stroke={D_PALETTE.ink} strokeWidth="3"/>
                  <circle cx="0" cy="-12" r="6" fill={D_PALETTE.paper} stroke={D_PALETTE.ink} strokeWidth="2"/>
                </g>
                <g transform="translate(330,128)">
                  <rect x="-58" y="-26" width="116" height="26" rx="13" fill={D_PALETTE.ink}/>
                  <text x="0" y="-9" fontFamily="'Archivo Black', sans-serif" fontSize="12" fill={D_PALETTE.lime} textAnchor="middle">MAKERS LAB</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section id="contacto" style={{ padding: "100px 56px" }}>
        <div className="vd-sticker" style={{ background: D_PALETTE.lime, padding: "60px 50px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 20, right: 40, zIndex: 2 }} className="vd-bounce">
            <DStarBurst size={160} color={D_PALETTE.mag} rotate={-8}>
              <span style={{ color: D_PALETTE.paper }}>Clase<br/>de prueba<br/>GRATIS</span>
            </DStarBurst>
          </div>
          <span className="vd-label">09 // próximo paso</span>
          <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 96, margin: "12px 0 24px", maxWidth: 800, lineHeight: 0.92 }}>
            VEN A<br/>
            PROBAR<br/>
            EL <span style={{ color: D_PALETTE.mag }}>LAB.</span>
          </h2>
          <p style={{ fontSize: 18, maxWidth: 560, marginBottom: 30, fontWeight: 500 }}>
            Cuéntanos la edad y los intereses de tu peque y te proponemos un día. <strong>Clase de prueba gratis. Sin compromiso.</strong>
          </p>
          <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 720 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Nombre del peque" style={{ padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <input placeholder="Edad" type="number" min="4" max="14" style={{ padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <input placeholder="Tu nombre (madre/padre)" style={{ padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <input placeholder="Teléfono o WhatsApp" type="tel" style={{ padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <input placeholder="Tu email" type="email" style={{ gridColumn: "span 2", padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 999, fontSize: 15, fontFamily: "inherit", fontWeight: 600 }}/>
            <textarea placeholder="¿Qué le interesa? (opcional — ej. robots, videojuegos, ciencia…)" rows="2" style={{ gridColumn: "span 2", padding: "15px 22px", border: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.paper, color: D_PALETTE.ink, borderRadius: 18, fontSize: 15, fontFamily: "inherit", fontWeight: 500, resize: "none" }}/>
            <button className="vd-btn" type="submit" style={{ gridColumn: "span 2", justifyContent: "center", padding: "16px 22px", fontSize: 16 }}>Reservar clase de prueba →</button>
          </form>
          <div className="vd-mono" style={{ marginTop: 22, fontSize: 13, fontWeight: 600 }}>
            <span style={{ color: D_PALETTE.magD }}>►</span> info@makerslab.com &nbsp;·&nbsp; <span style={{ color: D_PALETTE.magD }}>►</span> +34 660 10 14 30 (WhatsApp)
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{ padding: "60px 56px 40px", borderTop: `2.5px solid ${D_PALETTE.ink}`, background: D_PALETTE.darkBand, color: D_PALETTE.paper, position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 32 }}>
          <div>
            <div style={{ background: D_PALETTE.paper, padding: 10, borderRadius: 12, display: "inline-block", border: `2px solid ${D_PALETTE.ink}` }}>
              <Logo height={50} />
            </div>
            <p style={{ fontSize: 14, marginTop: 16, maxWidth: 290, lineHeight: 1.55, fontWeight: 500, color: D_PALETTE.paper + "CC" }}>
              Forma a los futuros innovadores. Una clase, un robot, una idea a la vez.
            </p>
          </div>
          {[
            { t: "academia", links: [["STEAM","#disciplinas"],["Las clases","#clases"],["Campamento","#campamento"],["Precios","#precios"],["FAQ","#faq"]] },
            { t: "contacto", links: [["info@makerslab.com","mailto:info@makerslab.com"],["+34 660 10 14 30","tel:+34660101430"],["WhatsApp directo","https://wa.me/34660101430"],["Av. Quevedo 3, 28522 Rivas","#mapa"]] },
            { t: "social",   links: [["@makerslab_rivas","https://www.instagram.com/makerslab_rivas/"],["Newsletter","#contacto"]] },
          ].map(c => (
            <div key={c.t}>
              <div className="vd-mono" style={{ fontSize: 12, letterSpacing: "0.2em", color: D_PALETTE.lime, marginBottom: 14, fontWeight: 700 }}>// {c.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, fontWeight: 500 }}>
                {c.links.map(([l, href]) => <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ color: D_PALETTE.paper + "CC", textDecoration: "none", transition: "color .15s" }} onMouseEnter={(e) => e.currentTarget.style.color = D_PALETTE.lime} onMouseLeave={(e) => e.currentTarget.style.color = D_PALETTE.paper + "CC"}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, borderTop: `1.5px dashed ${D_PALETTE.paper}33`, fontSize: 12, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: D_PALETTE.paper + "99" }}>
          <div>© 2026 MAKERS LAB · ABIERTO EN RIVAS DESDE 2025</div>
          <div>↑↑↓↓←→←→BA · konami.activated()</div>
        </div>
      </footer>

      <Confetti active={easter.active} palette={[D_PALETTE.lime, D_PALETTE.mag, D_PALETTE.yellow, D_PALETTE.cyan, D_PALETTE.orange]}/>

      {/* === STICKY CTA bar (aparece tras scrollear) === */}
      <DStickyCTA/>

      {/* === Botón flotante WhatsApp === */}
      <DWhatsAppButton/>
    </div>
  );
};

// --- Floating WhatsApp button ---
const DWhatsAppButton = () => (
  <a
    href="https://wa.me/34660101430?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20clase%20de%20prueba%20gratis%20en%20Makers%20Lab"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp"
    style={{
      position: "fixed",
      bottom: 24, right: 24,
      width: 64, height: 64,
      borderRadius: "50%",
      background: "#25D366",
      border: `2.5px solid ${D_PALETTE.ink}`,
      boxShadow: `5px 5px 0 ${D_PALETTE.ink}`,
      display: "grid",
      placeItems: "center",
      zIndex: 100,
      textDecoration: "none",
      transition: "transform .15s, box-shadow .15s",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = `7px 7px 0 ${D_PALETTE.ink}`; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = `5px 5px 0 ${D_PALETTE.ink}`; }}
  >
    <svg viewBox="0 0 32 32" width="32" height="32">
      <path fill="#fff" d="M16 3C9 3 3 8.6 3 15.6c0 2.3.6 4.4 1.7 6.3L3 29l7.4-1.9c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.6 12.7-12.6S23.7 3 16 3zm0 23c-1.9 0-3.7-.5-5.4-1.5l-.4-.2-4.4 1.1 1.2-4.3-.2-.4c-1-1.7-1.6-3.6-1.6-5.5 0-5.8 4.7-10.4 10.4-10.4 5.8 0 10.4 4.7 10.4 10.4 0 5.7-4.6 10.4-10.4 10.4zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4z"/>
    </svg>
  </a>
);

// --- Sticky CTA bar (slides up after user scrolls past hero) ---
const DStickyCTA = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      // Show only when scrolled past initial hero (~800px) but hide near footer.
      const y = window.scrollY;
      const max = (document.documentElement.scrollHeight || 0) - window.innerHeight;
      setVisible(y > 700 && y < max - 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed",
      bottom: visible ? 20 : -100,
      left: "50%",
      transform: "translateX(-50%)",
      transition: "bottom .3s ease",
      zIndex: 99,
      background: D_PALETTE.lime,
      border: `2.5px solid ${D_PALETTE.ink}`,
      borderRadius: 999,
      padding: "10px 14px 10px 22px",
      boxShadow: `5px 5px 0 ${D_PALETTE.ink}`,
      display: "flex",
      gap: 16,
      alignItems: "center",
    }}>
      <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.02em", color: D_PALETTE.ink }}>
        ¿Le apuntas? Clase de prueba gratis
      </span>
      <a href="#contacto" className="vd-btn" style={{ background: D_PALETTE.mag, color: D_PALETTE.paper, padding: "8px 16px", fontSize: 13, boxShadow: `3px 3px 0 ${D_PALETTE.ink}` }}>
        Reservar →
      </a>
    </div>
  );
};

window.VariationD = VariationD;
window.D_PALETTE = D_PALETTE;
window.dCss = dCss;
window.DBot = DBot;
window.DBubble = DBubble;
window.DStarBurst = DStarBurst;
window.DRocket = DRocket;
window.D_FAQ = D_FAQ;
