// VARIATION B — "Neon Lab"
// Deep night background · lime + cyan neon · magenta spark.
// Space Grotesk display + JetBrains Mono terminal accents.

const B_PALETTE = {
  bg:     "#0A0F1E",
  bg2:    "#111830",
  bg3:    "#1A2240",
  ink:    "#F2F4F7",
  mute:   "#8B92A8",
  lime:   "#C8F23C",
  cyan:   "#2BCFEE",
  mag:    "#E5197E",
  yellow: "#FFD83A",
};

const bCss = `
  .vb-root { background: ${B_PALETTE.bg}; color: ${B_PALETTE.ink}; font-family: 'Space Grotesk', system-ui, sans-serif; position: relative; }
  .vb-root *, .vb-root *::before, .vb-root *::after { box-sizing: border-box; }
  .vb-grid {
    background-image:
      linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .vb-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  .vb-display { font-family: 'Space Grotesk', system-ui, sans-serif; font-weight: 700; line-height: 0.95; letter-spacing: -0.025em; }
  .vb-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: ${B_PALETTE.lime}; font-weight: 500; }
  .vb-glow-lime { color: ${B_PALETTE.lime}; text-shadow: 0 0 18px ${B_PALETTE.lime}66; }
  .vb-glow-cyan { color: ${B_PALETTE.cyan}; text-shadow: 0 0 18px ${B_PALETTE.cyan}66; }
  .vb-glow-mag  { color: ${B_PALETTE.mag};  text-shadow: 0 0 18px ${B_PALETTE.mag}88; }

  .vb-cta {
    display: inline-flex; align-items: center; gap: 10px;
    background: ${B_PALETTE.lime}; color: ${B_PALETTE.bg};
    padding: 14px 22px; border-radius: 6px;
    font-weight: 600; font-size: 14px; letter-spacing: 0.02em; text-decoration: none;
    box-shadow: 0 0 0 1px ${B_PALETTE.lime}, 0 0 24px ${B_PALETTE.lime}55;
    transition: all .15s; border: none; cursor: pointer; text-transform: uppercase; font-family: 'JetBrains Mono', monospace;
  }
  .vb-cta:hover { transform: translateY(-2px); box-shadow: 0 0 0 1px ${B_PALETTE.lime}, 0 0 40px ${B_PALETTE.lime}88; }
  .vb-cta--ghost { background: transparent; color: ${B_PALETTE.lime}; box-shadow: 0 0 0 1px ${B_PALETTE.lime}66; }
  .vb-cta--ghost:hover { background: ${B_PALETTE.lime}10; box-shadow: 0 0 0 1px ${B_PALETTE.lime}, 0 0 24px ${B_PALETTE.lime}33; }
  .vb-cta--cyan { background: ${B_PALETTE.cyan}; box-shadow: 0 0 0 1px ${B_PALETTE.cyan}, 0 0 24px ${B_PALETTE.cyan}55; }
  .vb-cta--mag  { background: ${B_PALETTE.mag}; color: white; box-shadow: 0 0 0 1px ${B_PALETTE.mag}, 0 0 24px ${B_PALETTE.mag}55; }

  .vb-card { background: ${B_PALETTE.bg2}; border: 1px solid ${B_PALETTE.bg3}; border-radius: 14px; }
  .vb-card--neon { border-color: ${B_PALETTE.lime}; box-shadow: 0 0 0 1px ${B_PALETTE.lime}55, 0 0 32px ${B_PALETTE.lime}15; }
  .vb-tag { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; background: ${B_PALETTE.bg3}; color: ${B_PALETTE.lime}; }
  .vb-divider { height: 1px; background: linear-gradient(90deg, transparent, ${B_PALETTE.bg3}, transparent); margin: 32px 0; }
  .vb-bracket { color: ${B_PALETTE.mute}; font-family: 'JetBrains Mono', monospace; }

  @keyframes vb-blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
  .vb-caret { display: inline-block; width: 12px; height: 1em; background: ${B_PALETTE.lime}; animation: vb-blink 1s steps(1) infinite; vertical-align: -2px; margin-left: 4px; box-shadow: 0 0 10px ${B_PALETTE.lime}; }

  @keyframes vb-scan { 0% { transform: translateY(-100%);} 100% { transform: translateY(100vh);} }

  /* HUD chip */
  .vb-chip { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; border: 1px solid ${B_PALETTE.bg3}; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: ${B_PALETTE.mute}; }
  .vb-chip-dot { width: 7px; height: 7px; border-radius: 50%; background: ${B_PALETTE.lime}; box-shadow: 0 0 8px ${B_PALETTE.lime}; }

  /* nav */
  .vb-nav { display: flex; align-items: center; justify-content: space-between; padding: 24px 56px; border-bottom: 1px solid ${B_PALETTE.bg3}; background: ${B_PALETTE.bg}EE; backdrop-filter: blur(8px); position: relative; z-index: 5; }
  .vb-nav-links { display: flex; gap: 4px; align-items: center; }
  .vb-nav-links a { color: ${B_PALETTE.mute}; text-decoration: none; font-size: 13px; font-weight: 500; padding: 8px 14px; border-radius: 6px; transition: color .15s, background .15s; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.08em; }
  .vb-nav-links a:hover { color: ${B_PALETTE.lime}; background: ${B_PALETTE.bg2}; }

  /* STEAM tiles */
  .vb-steam-tile { background: ${B_PALETTE.bg2}; border: 1px solid ${B_PALETTE.bg3}; border-radius: 14px; padding: 24px; position: relative; overflow: hidden; transition: transform .2s, border-color .2s; }
  .vb-steam-tile:hover { transform: translateY(-4px); }

  /* FAQ */
  .vb-faq summary { list-style: none; padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 18px; }
  .vb-faq summary::-webkit-details-marker { display: none; }
  .vb-faq summary::after { content: "[+]"; font-size: 16px; font-family: 'JetBrains Mono', monospace; color: ${B_PALETTE.lime}; transition: color .2s; }
  .vb-faq[open] summary::after { content: "[-]"; color: ${B_PALETTE.mag}; }
  .vb-faq p { padding: 0 24px 22px; color: ${B_PALETTE.mute}; font-size: 15px; line-height: 1.6; max-width: 70ch; margin: 0; }

  @keyframes vb-pulse-ring { 0% { transform: scale(0.8); opacity: 1;} 100% { transform: scale(2.5); opacity: 0;} }
  @keyframes vb-rotate { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
`;

const B_STEAM = [
  { L: "S", word: "Science",     subtitle: "Experimentos · hipótesis · evidencia", glow: B_PALETTE.lime, icon: "atom" },
  { L: "T", word: "Technology",  subtitle: "Scratch · MakeCode · Mario Maker",     glow: B_PALETTE.cyan, icon: "chip" },
  { L: "E", word: "Engineering", subtitle: "WeDo · Spike · Microbit · Arduino",    glow: B_PALETTE.yellow, icon: "gear" },
  { L: "A", word: "Art",         subtitle: "Diseño visual · pixel · stop-motion",  glow: B_PALETTE.mag, icon: "spark" },
  { L: "M", word: "Mathematics", subtitle: "Lógica · patrones · algoritmos",       glow: "#FF6B1A", icon: "grid" },
];

const B_PROGRAMS = [
  { age: "5–6",  code: "MK-100", title: "Mini Makers",       desc: "Lógica con bloques y experimentos sensoriales.",   schedule: "MAR/JUE · 17:00",  duration: "60 min", spots: 3 },
  { age: "7–8",  code: "CB-200", title: "Code & Build",      desc: "Scratch + WeDo. Primer robot programado.",         schedule: "LUN/MIÉ · 17:00",  duration: "90 min", spots: 5 },
  { age: "9–11", code: "LX-300", title: "Lab Avanzado",      desc: "Microbit, Spike, game design, electrónica.",       schedule: "LUN/MIÉ · 18:30",  duration: "90 min", spots: 2 },
  { age: "Verano", code: "SM-X", title: "Campamento STEAM",  desc: "5 días intensivos · 1 reto por día.",              schedule: "JUL · 09:00",      duration: "5h",     spots: 8 },
];

const B_TESTIMONIALS = [
  { quote: "Llega cada martes preguntando '¿hoy también?'. Y los miércoles también pregunta.", name: "Marta R.", role: "MADRE · LUCÍA, 8" },
  { quote: "Mateo construyó un brazo robótico en casa con cartón. La curiosidad no se desactiva al salir.", name: "Diego L.", role: "PADRE · MATEO, 10" },
  { quote: "Hablan de su código como otros hablan de fútbol.", name: "Sara P.", role: "MADRE · IRENE, 7" },
];

const B_PLANS = [
  { name: "Curioso",  freq: "1d/sem",  price: 59,  features: ["1 disciplina", "Materiales incluidos", "Grupo máx. 8"], featured: false },
  { name: "Maker",    freq: "2d/sem",  price: 99,  features: ["2 disciplinas", "Proyectos abiertos", "Showcase trimestral", "Materiales incluidos"], featured: true },
  { name: "Lab Pro",  freq: "3d/sem",  price: 139, features: ["Disciplinas combinadas", "Proyecto personal", "Showcase trimestral", "Kit para casa"], featured: false },
];

const B_FAQ = [
  { q: "¿Necesita conocimientos previos?", a: "Cero. Cada programa parte desde la base y avanza al ritmo del grupo. Solo pedimos ganas de tocar, romper y volver a montar." },
  { q: "¿Pueden empezar en cualquier momento del curso?", a: "Sí. Ofrecemos una clase de prueba gratis. Si encaja, se incorporan la semana siguiente." },
  { q: "¿Y si mi hijo o hija ya programa?", a: "Le ponemos retos avanzados: diseño de videojuegos completos, automatización de dispositivos, circuitos propios." },
  { q: "¿Qué incluye la cuota?", a: "Materiales, kits electrónicos, software con licencia educativa, showcases trimestrales abiertos a familias. Sin matrícula." },
  { q: "¿Hay descuentos por hermanos?", a: "15% sobre el segundo, 20% sobre el tercero." },
];

// === Icons ===
const BIcon = ({ kind, glow, size = 32 }) => {
  const filter = `drop-shadow(0 0 8px ${glow})`;
  if (kind === "atom") return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ filter }}>
      <circle cx="16" cy="16" r="2" fill={glow}/>
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke={glow} strokeWidth="1.2"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke={glow} strokeWidth="1.2" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke={glow} strokeWidth="1.2" transform="rotate(-60 16 16)"/>
    </svg>
  );
  if (kind === "chip") return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ filter }}>
      <rect x="9" y="9" width="14" height="14" rx="2" fill="none" stroke={glow} strokeWidth="1.4"/>
      <rect x="13" y="13" width="6" height="6" fill={glow}/>
      {[10,16,22].map(p => <React.Fragment key={p}>
        <line x1={p} y1="3" x2={p} y2="9" stroke={glow} strokeWidth="1.4"/>
        <line x1={p} y1="23" x2={p} y2="29" stroke={glow} strokeWidth="1.4"/>
        <line x1="3" y1={p} x2="9" y2={p} stroke={glow} strokeWidth="1.4"/>
        <line x1="23" y1={p} x2="29" y2={p} stroke={glow} strokeWidth="1.4"/>
      </React.Fragment>)}
    </svg>
  );
  if (kind === "gear") return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ filter }}>
      <circle cx="16" cy="16" r="5" fill="none" stroke={glow} strokeWidth="1.4"/>
      <circle cx="16" cy="16" r="1.8" fill={glow}/>
      {[0,45,90,135,180,225,270,315].map(a => (
        <rect key={a} x="15" y="2" width="2" height="5" fill={glow} transform={`rotate(${a} 16 16)`}/>
      ))}
    </svg>
  );
  if (kind === "spark") return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ filter }}>
      <path d="M16 3 L18 14 L29 16 L18 18 L16 29 L14 18 L3 16 L14 14 Z" fill={glow}/>
    </svg>
  );
  if (kind === "grid") return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ filter }}>
      {[5,12,19,26].map(x => [5,12,19,26].map(y => (
        <rect key={`${x}-${y}`} x={x-2} y={y-2} width="4" height="4" fill={glow} opacity={((x+y) % 14 === 0) ? 1 : 0.4}/>
      )))}
    </svg>
  );
  return null;
};

const VariationB = ({ fontSet = "spaceGrotesk", heroLayout = "split" }) => {
  const rootRef = React.useRef(null);
  const easter = useEasterEgg(rootRef);
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const displayFamily = {
    spaceGrotesk: "'Space Grotesk', system-ui, sans-serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    archivo: "'Archivo Black', system-ui, sans-serif",
  }[fontSet] || "'Space Grotesk', sans-serif";

  const time = now.toTimeString().slice(0, 8);

  return (
    <div ref={rootRef} className="vb-root vb-grid" style={{ minHeight: 5000, overflow: "hidden", cursor: "none" }}>
      <style>{bCss}</style>
      <CustomCursor scopeRef={rootRef} flavor="neon" color={B_PALETTE.lime} />

      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: 200, left: -100, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${B_PALETTE.cyan}33, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 1200, right: -150, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${B_PALETTE.mag}28, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 2600, left: -200, width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${B_PALETTE.lime}22, transparent 70%)`, pointerEvents: "none" }} />

      {/* === NAV === */}
      <nav className="vb-nav">
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Logo height={48} />
          <div className="vb-chip">
            <span className="vb-chip-dot"/> Curso 26/27 · matrícula abierta
          </div>
        </div>
        <div className="vb-nav-links">
          <a href="#programas">Programas</a>
          <a href="#disciplinas">STEAM</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="vb-cta" href="#contacto">[ inscríbete ]</a>
      </nav>

      {/* === HERO === */}
      <section style={{ padding: "70px 56px 90px", position: "relative" }}>
        {/* HUD corners */}
        <div style={{ position: "absolute", top: 90, left: 56, width: 24, height: 24, borderLeft: `2px solid ${B_PALETTE.lime}`, borderTop: `2px solid ${B_PALETTE.lime}` }}/>
        <div style={{ position: "absolute", top: 90, right: 56, width: 24, height: 24, borderRight: `2px solid ${B_PALETTE.lime}`, borderTop: `2px solid ${B_PALETTE.lime}` }}/>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: B_PALETTE.mute, textTransform: "uppercase", letterSpacing: "0.18em" }}>
          <span><span style={{ color: B_PALETTE.lime }}>●</span> SYSTEM ONLINE · MAKERS.LAB/v3</span>
          <span>{time} · RIVAS-VACIAMADRID · 40.359°N 3.516°W</span>
        </div>

        <div style={{ display: heroLayout === "stacked" ? "block" : "grid", gridTemplateColumns: heroLayout === "split" ? "1.3fr 1fr" : "1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="vb-label" style={{ marginBottom: 16 }}>// academia.steam · edad [05-11] · rivas</div>
            <h1 className="vb-display" style={{ fontFamily: displayFamily, fontSize: heroLayout === "stacked" ? 130 : 100, margin: "0 0 24px" }}>
              Construye<br/>
              el <span className="vb-glow-lime">futuro</span><br/>
              <span style={{ color: B_PALETTE.mute, fontWeight: 400 }}>con tus propias</span><br/>
              <span className="vb-glow-cyan">manos.<span className="vb-caret"/></span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: B_PALETTE.mute, maxWidth: 560, marginBottom: 36 }}>
              <span className="vb-bracket">{">"}</span> Extraescolares STEAM para mentes entre 5 y 11 años. Programación, robótica, ciencia y arte. <span style={{ color: B_PALETTE.ink }}>Aprenden haciendo. Y celebrando cada error.</span>
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a className="vb-cta" href="#contacto">▸ inscríbete</a>
              <a className="vb-cta vb-cta--ghost" href="#programas">▸ ver programas</a>
              <div style={{ marginLeft: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: B_PALETTE.mute }}>
                <span style={{ color: B_PALETTE.lime }}>●</span> 18 plazas libres · curso 26/27
              </div>
            </div>

            {/* Stat row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: B_PALETTE.bg3, marginTop: 60, border: `1px solid ${B_PALETTE.bg3}`, borderRadius: 8, overflow: "hidden" }}>
              {[
                { n: "200+", l: "familias" },
                { n: "12", l: "programas" },
                { n: "5", l: "disciplinas" },
                { n: "4yr", l: "trayectoria" },
              ].map((s, i) => (
                <div key={i} style={{ background: B_PALETTE.bg, padding: "22px 18px" }}>
                  <div className="vb-display vb-glow-lime" style={{ fontFamily: displayFamily, fontSize: 36 }}>{s.n}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: B_PALETTE.mute, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {heroLayout === "split" && (
            <div style={{ position: "relative" }}>
              {/* Terminal frame */}
              <div className="vb-card vb-card--neon" style={{ padding: 0, overflow: "hidden", position: "relative", background: B_PALETTE.bg2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: `1px solid ${B_PALETTE.bg3}`, background: B_PALETTE.bg }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: B_PALETTE.mag }}/>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: B_PALETTE.yellow }}/>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: B_PALETTE.lime }}/>
                  <div style={{ marginLeft: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: B_PALETTE.mute }}>~/makers-lab — aula-rivas — 80x24</div>
                </div>
                <PhotoPlaceholder tone="dark" label="LAB" hint="Niños programando" height={340} radius={0} />
                <div style={{ padding: "16px 20px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.8, background: B_PALETTE.bg }}>
                  <div style={{ color: B_PALETTE.mute }}>$ run --module=robotics --age=9</div>
                  <div style={{ color: B_PALETTE.lime }}>→ loading kit: spike-prime ✓</div>
                  <div style={{ color: B_PALETTE.cyan }}>→ deploying program: line-follower</div>
                  <div style={{ color: B_PALETTE.mag }}>→ output: robot.moves() ✦<span className="vb-caret"/></div>
                </div>
              </div>
              {/* Floating chips */}
              <div className="vb-chip" style={{ position: "absolute", top: -16, right: 24, background: B_PALETTE.bg, color: B_PALETTE.lime, borderColor: B_PALETTE.lime }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: B_PALETTE.lime, boxShadow: `0 0 8px ${B_PALETTE.lime}` }}/> LIVE · grupo 9-11
              </div>
              <div className="vb-chip" style={{ position: "absolute", bottom: -16, left: 28, background: B_PALETTE.bg, color: B_PALETTE.cyan, borderColor: B_PALETTE.cyan }}>
                ▸ proyecto: brazo robótico
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop: `1px solid ${B_PALETTE.bg3}`, borderBottom: `1px solid ${B_PALETTE.bg3}`, background: B_PALETTE.bg2 }}>
        <Marquee
          items={["SCRATCH", "WEDO", "MICROBIT", "SPIKE-PRIME", "ARDUINO", "MAKECODE", "MARIO-MAKER", "STOP-MOTION", "ELECTRÓNICA", "DISEÑO-3D", "PIXEL-ART", "PYTHON"]}
          fontFamily="'JetBrains Mono', monospace"
          fontSize={14} fontWeight={500} color={B_PALETTE.mute}
          separator={<span style={{ color: B_PALETTE.lime }}>▸</span>} py={16} speed={50}
        />
      </div>

      {/* === STEAM === */}
      <section id="disciplinas" style={{ padding: "110px 56px 80px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 50, gap: 40 }}>
          <div style={{ maxWidth: 700 }}>
            <div className="vb-label" style={{ marginBottom: 12 }}>02 // disciplinas</div>
            <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "0 0 14px" }}>
              Cinco letras. <span className="vb-glow-cyan">Un millón</span> de combinaciones.
            </h2>
            <p style={{ fontSize: 16, color: B_PALETTE.mute, maxWidth: 560, lineHeight: 1.5 }}>
              Cada disciplina se mezcla con las otras. Un proyecto de programación termina pintándose, uno de ciencia acaba en código.
            </p>
          </div>
          <div className="vb-chip"><span className="vb-chip-dot"/> 5/5 modules online</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
          {B_STEAM.map((d, i) => (
            <div key={d.L} className="vb-steam-tile" onMouseEnter={(e) => { e.currentTarget.style.borderColor = d.glow; e.currentTarget.style.boxShadow = `0 0 0 1px ${d.glow}55, 0 0 32px ${d.glow}22`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = B_PALETTE.bg3; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ position: "absolute", top: 14, right: 14 }}>
                <BIcon kind={d.icon} glow={d.glow} size={24}/>
              </div>
              <div className="vb-display" style={{ fontFamily: displayFamily, fontSize: 96, lineHeight: 0.9, color: d.glow, textShadow: `0 0 24px ${d.glow}80`, fontWeight: 700 }}>{d.L}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: d.glow, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{d.word}</div>
              <div style={{ fontSize: 13, color: B_PALETTE.mute, marginTop: 14, lineHeight: 1.5 }}>{d.subtitle}</div>
              <div style={{ position: "absolute", bottom: 14, right: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: B_PALETTE.mute }}>
                0{i+1}/05
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PROGRAMS table === */}
      <section id="programas" style={{ padding: "60px 56px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, gap: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 700 }}>
            <div className="vb-label" style={{ marginBottom: 12 }}>03 // programas activos</div>
            <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "0 0 14px" }}>
              Un <span className="vb-glow-mag">programa</span> por edad. Plazas en vivo.
            </h2>
          </div>
          <a className="vb-cta vb-cta--ghost" href="#contacto">▸ horarios completos</a>
        </div>

        <div className="vb-card" style={{ overflow: "hidden", padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "100px 100px 1.4fr 2fr 200px 100px 60px", padding: "14px 24px", borderBottom: `1px solid ${B_PALETTE.bg3}`, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: B_PALETTE.mute, fontWeight: 500, background: B_PALETTE.bg }}>
            <div>edad</div><div>código</div><div>programa</div><div>descripción</div><div>horario</div><div>plazas</div><div></div>
          </div>
          {B_PROGRAMS.map((p, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 100px 1.4fr 2fr 200px 100px 60px", padding: "22px 24px", alignItems: "center", borderBottom: i < B_PROGRAMS.length - 1 ? `1px solid ${B_PALETTE.bg3}` : "none", transition: "background .15s", cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.background = B_PALETTE.bg3 + "33"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <div><span className="vb-tag">{p.age}</span></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: B_PALETTE.cyan }}>{p.code}</div>
              <div style={{ fontFamily: displayFamily, fontSize: 20, fontWeight: 600 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: B_PALETTE.mute, lineHeight: 1.5 }}>{p.desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: B_PALETTE.lime }}>{p.schedule} · {p.duration}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
                <span style={{ color: p.spots <= 3 ? B_PALETTE.mag : B_PALETTE.lime }}>● {p.spots}</span>
              </div>
              <div style={{ textAlign: "right", fontSize: 16, color: B_PALETTE.lime, fontFamily: "monospace" }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section style={{ padding: "80px 56px" }}>
        <div className="vb-label" style={{ marginBottom: 12 }}>04 // familias</div>
        <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 56, margin: "0 0 40px", maxWidth: 700 }}>
          Lo que nos cuentan <span className="vb-glow-cyan">las familias</span>.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {B_TESTIMONIALS.map((t, i) => {
            const accent = [B_PALETTE.lime, B_PALETTE.cyan, B_PALETTE.mag][i];
            return (
              <div key={i} className="vb-card" style={{ padding: 26, borderTop: `2px solid ${accent}`, position: "relative" }}>
                <div style={{ position: "absolute", top: -1, left: -1, width: 24, height: 24, borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}/>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                  ▸ testimonio_{String(i+1).padStart(2, "0")}.log
                </div>
                <p style={{ fontFamily: displayFamily, fontSize: 19, lineHeight: 1.4, margin: "0 0 24px", color: B_PALETTE.ink }}>
                  "{t.quote}"
                </p>
                <div style={{ paddingTop: 16, borderTop: `1px solid ${B_PALETTE.bg3}`, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: B_PALETTE.bg3, display: "grid", placeItems: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 600 }}>
                    {t.name.split(" ").map(s => s[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: B_PALETTE.mute, letterSpacing: "0.1em" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* === SAGAN === */}
      <section style={{ padding: "120px 56px", margin: "60px 0", position: "relative", overflow: "hidden", borderTop: `1px solid ${B_PALETTE.bg3}`, borderBottom: `1px solid ${B_PALETTE.bg3}` }}>
        {/* Star field */}
        {[...Array(60)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i * 41) % 100}%`,
            top: `${(i * 67) % 100}%`,
            width: i % 7 === 0 ? 3 : 1.5,
            height: i % 7 === 0 ? 3 : 1.5,
            borderRadius: "50%",
            background: i % 5 === 0 ? B_PALETTE.lime : B_PALETTE.ink,
            opacity: 0.6,
            boxShadow: i % 7 === 0 ? `0 0 6px ${B_PALETTE.lime}` : "none",
          }}/>
        ))}
        {/* Orbiting rings */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", border: `1px dashed ${B_PALETTE.bg3}`, animation: "vb-rotate 80s linear infinite" }}>
          <div style={{ position: "absolute", top: -6, left: "50%", width: 12, height: 12, borderRadius: "50%", background: B_PALETTE.lime, boxShadow: `0 0 16px ${B_PALETTE.lime}` }}/>
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", border: `1px dashed ${B_PALETTE.bg3}`, animation: "vb-rotate 60s linear infinite reverse" }}>
          <div style={{ position: "absolute", top: "50%", right: -4, width: 8, height: 8, borderRadius: "50%", background: B_PALETTE.mag, boxShadow: `0 0 14px ${B_PALETTE.mag}` }}/>
        </div>

        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <div className="vb-label" style={{ marginBottom: 12, color: B_PALETTE.cyan }}>05 // por_qué_importa.txt</div>
          <blockquote style={{ margin: "20px 0", fontFamily: displayFamily, fontSize: 52, lineHeight: 1.2, fontWeight: 500 }}>
            "Vivimos en una sociedad profundamente dependiente de la <span className="vb-glow-cyan">ciencia y la tecnología</span>, y en la que casi nadie sabe nada de estos temas."
          </blockquote>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: B_PALETTE.lime, marginTop: 30 }}>
            — Carl Sagan · 1996
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section id="precios" style={{ padding: "60px 56px" }}>
        <div style={{ maxWidth: 700, marginBottom: 50 }}>
          <div className="vb-label" style={{ marginBottom: 12 }}>06 // planes</div>
          <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 64, margin: "0 0 14px" }}>
            Precios <span className="vb-glow-lime">claros</span>. Sin matrícula.
          </h2>
          <p style={{ fontSize: 16, color: B_PALETTE.mute, lineHeight: 1.55 }}>
            Elige días/semana. Cambias de plan cuando quieras. Cuota all-inclusive: materiales, software, showcases.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {B_PLANS.map((plan, i) => (
            <div key={i} className={plan.featured ? "vb-card vb-card--neon" : "vb-card"} style={{ padding: 30, position: "relative" }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -10, left: 26, background: B_PALETTE.lime, color: B_PALETTE.bg, padding: "4px 12px", borderRadius: 4, fontSize: 10, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  // recomendado
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div className="vb-display" style={{ fontFamily: displayFamily, fontSize: 28, fontWeight: 600 }}>{plan.name}</div>
                <span className="vb-tag">{plan.freq}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", marginTop: 24, marginBottom: 28 }}>
                <span className="vb-display" style={{ fontFamily: displayFamily, fontSize: 72, color: plan.featured ? B_PALETTE.lime : B_PALETTE.ink, textShadow: plan.featured ? `0 0 24px ${B_PALETTE.lime}66` : "none" }}>{plan.price}€</span>
                <span style={{ fontSize: 14, marginLeft: 8, color: B_PALETTE.mute, fontFamily: "'JetBrains Mono', monospace" }}>/mes</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: 14, lineHeight: 1.8, color: B_PALETTE.ink }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingBottom: 6, borderBottom: j < plan.features.length - 1 ? `1px dashed ${B_PALETTE.bg3}` : "none", marginBottom: 6 }}>
                    <span style={{ color: plan.featured ? B_PALETTE.lime : B_PALETTE.cyan, fontFamily: "monospace" }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "vb-cta" : "vb-cta vb-cta--ghost"} href="#contacto" style={{ width: "100%", justifyContent: "center" }}>
                ▸ elegir {plan.name.toLowerCase()}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section id="faq" style={{ padding: "80px 56px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60 }}>
        <div>
          <div className="vb-label" style={{ marginBottom: 12 }}>07 // dudas</div>
          <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 52, margin: "0 0 20px" }}>
            Preguntas <span className="vb-glow-mag">frecuentes</span>
          </h2>
          <p style={{ fontSize: 15, color: B_PALETTE.mute, lineHeight: 1.55, marginBottom: 24 }}>
            ¿No ves la tuya? Escríbenos. Respondemos en menos de 24h laborables.
          </p>
          <a className="vb-cta vb-cta--mag" href="#contacto">▸ preguntar</a>
        </div>
        <div className="vb-card" style={{ padding: 0 }}>
          {B_FAQ.map((f, i) => (
            <details key={i} className="vb-faq" style={{ borderBottom: i < B_FAQ.length - 1 ? `1px solid ${B_PALETTE.bg3}` : "none" }} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === MAP === */}
      <section style={{ padding: "60px 56px" }}>
        <div className="vb-card" style={{ overflow: "hidden", padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", minHeight: 360 }}>
            <div style={{ padding: 36 }}>
              <div className="vb-label" style={{ marginBottom: 12 }}>08 // ubicación</div>
              <h3 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 40, margin: "0 0 18px" }}>
                <span className="vb-glow-cyan">Rivas</span>-Vaciamadrid
              </h3>
              <div style={{ fontSize: 15, lineHeight: 1.7, fontFamily: "'JetBrains Mono', monospace", color: B_PALETTE.mute }}>
                <div style={{ color: B_PALETTE.ink, fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Av. Francisco de Quevedo, 3 · Local 2</div>
                28522 Rivas-Vaciamadrid<br/>
                <span style={{ color: B_PALETTE.lime }}>►</span> 40.359°N, 3.516°W<br/>
                <span style={{ color: B_PALETTE.lime }}>►</span> 4 min de Metro Rivas Futura
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="vb-tag">parking</span>
                <span className="vb-tag" style={{ background: B_PALETTE.lime + "22", color: B_PALETTE.lime }}>aula 60m²</span>
                <span className="vb-tag">aire renovado</span>
              </div>
            </div>
            <div style={{ position: "relative", background: B_PALETTE.bg2, overflow: "hidden" }}>
              <svg viewBox="0 0 600 360" width="100%" height="100%" style={{ display: "block" }}>
                <defs>
                  <pattern id="vb-mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L0 0 0 40" fill="none" stroke={B_PALETTE.bg3} strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="600" height="360" fill={B_PALETTE.bg}/>
                <rect width="600" height="360" fill="url(#vb-mapgrid)"/>
                {/* roads */}
                <path d="M0 120 Q 200 100 600 180" stroke={B_PALETTE.bg3} strokeWidth="2" fill="none"/>
                <path d="M150 0 Q 180 200 280 360" stroke={B_PALETTE.bg3} strokeWidth="2" fill="none"/>
                <path d="M380 0 Q 420 200 360 360" stroke={B_PALETTE.bg3} strokeWidth="2" fill="none"/>
                {/* blocks */}
                <rect x="40" y="40" width="60" height="50" fill={B_PALETTE.bg3} stroke={B_PALETTE.cyan} strokeWidth="0.8" opacity="0.5"/>
                <rect x="40" y="190" width="80" height="60" fill={B_PALETTE.bg3} stroke={B_PALETTE.cyan} strokeWidth="0.8" opacity="0.5"/>
                <rect x="460" y="240" width="100" height="70" fill={B_PALETTE.bg3} stroke={B_PALETTE.cyan} strokeWidth="0.8" opacity="0.5"/>
                <circle cx="200" cy="260" r="40" fill={B_PALETTE.lime} opacity="0.15"/>
                <text x="200" y="265" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill={B_PALETTE.lime} textAnchor="middle" opacity="0.7">PARQUE</text>
                {/* marker */}
                <g transform="translate(330,160)">
                  <circle r="36" fill="none" stroke={B_PALETTE.lime} strokeWidth="1" opacity="0.5"/>
                  <circle r="22" fill="none" stroke={B_PALETTE.lime} strokeWidth="1.5"/>
                  <circle r="10" fill={B_PALETTE.lime}/>
                  <circle r="40" fill="none" stroke={B_PALETTE.lime} strokeWidth="2" opacity="0.6" style={{ animation: "vb-pulse-ring 2s ease-out infinite", transformOrigin: "330px 160px" }}/>
                </g>
                {/* crosshair labels */}
                <text x="340" y="155" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill={B_PALETTE.lime}>[ MAKERS.LAB ]</text>
                <text x="340" y="170" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill={B_PALETTE.mute}>40.359°N 3.516°W</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section id="contacto" style={{ padding: "80px 56px" }}>
        <div className="vb-card vb-card--neon" style={{ padding: 56, position: "relative", overflow: "hidden", background: B_PALETTE.bg2 }}>
          <div style={{ position: "absolute", top: -150, right: -150, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${B_PALETTE.lime}33, transparent 70%)` }}/>
          <div style={{ position: "relative" }}>
            <div className="vb-label" style={{ marginBottom: 14 }}>09 // próximo paso</div>
            <h2 className="vb-display" style={{ fontFamily: displayFamily, fontSize: 76, margin: "0 0 24px", maxWidth: 900, lineHeight: 0.95 }}>
              <span className="vb-glow-lime">Clase de prueba</span> gratis.<br/>
              <span style={{ color: B_PALETTE.mute, fontWeight: 400 }}>Sin compromiso. Sin truco.</span>
            </h2>
            <p style={{ fontSize: 17, maxWidth: 600, marginBottom: 32, color: B_PALETTE.mute, lineHeight: 1.55 }}>
              Cuéntanos la edad y los intereses de tu peque y te proponemos un grupo y un día.
            </p>
            <form style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 10, maxWidth: 800, marginBottom: 18 }} onSubmit={(e) => e.preventDefault()}>
              <input placeholder="email@ejemplo.com" style={{ padding: "16px 18px", border: `1px solid ${B_PALETTE.bg3}`, background: B_PALETTE.bg, color: B_PALETTE.ink, borderRadius: 6, fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}/>
              <input placeholder="edad" style={{ padding: "16px 18px", border: `1px solid ${B_PALETTE.bg3}`, background: B_PALETTE.bg, color: B_PALETTE.ink, borderRadius: 6, fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}/>
              <button className="vb-cta" type="submit" style={{ width: "100%", justifyContent: "center" }}>▸ reservar</button>
            </form>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: B_PALETTE.mute }}>
              <span style={{ color: B_PALETTE.lime }}>►</span> info@makerslab.com &nbsp;·&nbsp; <span style={{ color: B_PALETTE.lime }}>►</span> +34 600 000 000
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{ padding: "60px 56px 40px", borderTop: `1px solid ${B_PALETTE.bg3}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 32 }}>
          <div>
            <Logo height={50} />
            <p style={{ fontSize: 13, color: B_PALETTE.mute, marginTop: 14, maxWidth: 280, lineHeight: 1.5 }}>
              Forma a los futuros innovadores. Una clase, un robot, una idea a la vez.
            </p>
          </div>
          {[
            { t: "academia", links: ["STEAM", "Programas", "Precios", "FAQ"] },
            { t: "contacto", links: ["info@makerslab.com", "+34 600 000 000", "Av. Quevedo, 3", "28522 Rivas"] },
            { t: "social",   links: ["Instagram", "TikTok", "YouTube", "Newsletter"] },
          ].map(c => (
            <div key={c.t}>
              <div className="vb-label" style={{ marginBottom: 12 }}>// {c.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: B_PALETTE.mute }}>
                {c.links.map(l => <a key={l} href="#" style={{ color: "inherit", textDecoration: "none", transition: "color .15s" }} onMouseEnter={(e) => e.currentTarget.style.color = B_PALETTE.lime} onMouseLeave={(e) => e.currentTarget.style.color = B_PALETTE.mute}>▸ {l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, borderTop: `1px dashed ${B_PALETTE.bg3}`, fontSize: 11, color: B_PALETTE.mute, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
          <div>© 2026 MAKERS.LAB · RIVAS-VACIAMADRID</div>
          <div>↑↑↓↓←→←→BA · konami.activated()</div>
        </div>
      </footer>

      <Confetti active={easter.active} palette={[B_PALETTE.lime, B_PALETTE.mag, B_PALETTE.cyan, B_PALETTE.yellow]}/>
    </div>
  );
};

window.VariationB = VariationB;
window.B_PALETTE = B_PALETTE;
