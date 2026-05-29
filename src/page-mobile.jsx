// PAGE — Mobile version of D (390px wide mockup).
// Same content, stacked & resized for thumb-friendly reading.

const PageMobile = ({ fontSet = "archivo" }) => {
  const C = window.D_PALETTE;
  const displayFamily = {
    archivo:   "'Archivo Black', system-ui, sans-serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    fraunces:  "'Fraunces', serif",
  }[fontSet] || "'Archivo Black', sans-serif";
  const [menuOpen, setMenuOpen] = React.useState(false);

  const css = `
    .mob-root { background: ${C.bg}; color: ${C.ink}; font-family: 'Space Grotesk', 'DM Sans', sans-serif; width: 390px; min-height: 6500px; position: relative; overflow: hidden;
      background-image:
        linear-gradient(rgba(13,13,13,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(13,13,13,0.05) 1px, transparent 1px);
      background-size: 30px 30px;
    }
    .mob-root *, .mob-root *::before, .mob-root *::after { box-sizing: border-box; }
    .mob-display { font-family: ${displayFamily}; font-weight: 900; line-height: 0.92; letter-spacing: -0.02em; text-transform: uppercase; }
    .mob-mono { font-family: 'JetBrains Mono', monospace; }
    .mob-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700; color: ${C.magD}; }
    .mob-sticker { background: ${C.paper}; border: 2.5px solid ${C.ink}; border-radius: 16px; box-shadow: 5px 5px 0 ${C.ink}; }
    .mob-btn { display: inline-flex; align-items: center; gap: 8px; background: ${C.mag}; color: ${C.paper}; text-decoration: none; padding: 12px 20px; border-radius: 999px; font-weight: 700; font-size: 14px; border: 2.5px solid ${C.ink}; box-shadow: 4px 4px 0 ${C.ink}; font-family: 'Space Grotesk', sans-serif; }
    .mob-btn--lime { background: ${C.lime}; color: ${C.ink}; }
    .mob-btn--white { background: ${C.paper}; color: ${C.ink}; }
    .mob-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 999px; border: 2px solid ${C.ink}; background: ${C.paper}; font-size: 11px; font-weight: 700; }
    .mob-tag { display: inline-block; padding: 3px 9px; border-radius: 5px; font-size: 10px; font-weight: 700; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.08em; text-transform: uppercase; background: ${C.ink}; color: ${C.lime}; }
    .mob-halo { position: relative; display: inline-block; z-index: 1; }
    .mob-halo::before { content: ""; position: absolute; inset: -3px -8px; background: var(--halo, ${C.lime}); border: 2.5px solid ${C.ink}; border-radius: 10px; z-index: -1; transform: rotate(-2deg); box-shadow: 3px 3px 0 ${C.ink}; }
    .mob-faq { background: ${C.paper}; border: 2.5px solid ${C.ink}; border-radius: 12px; margin-bottom: 10px; box-shadow: 3px 3px 0 ${C.ink}; }
    .mob-faq summary { list-style: none; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-family: ${displayFamily}; font-size: 14px; text-transform: uppercase; }
    .mob-faq summary::-webkit-details-marker { display: none; }
    .mob-faq summary::after { content: "[+]"; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: ${C.mag}; }
    .mob-faq[open] { background: ${C.lime}; }
    .mob-faq[open] summary::after { content: "[-]"; color: ${C.ink}; }
    .mob-faq p { padding: 0 16px 16px; font-size: 13px; line-height: 1.5; margin: 0; color: ${C.inkSoft}; }
  `;

  const Section = ({ children, style = {} }) => (
    <section style={{ padding: "24px 20px", position: "relative", ...style }}>{children}</section>
  );

  return (
    <div className="mob-root">
      <style>{css}</style>

      {/* === iOS-ish status bar === */}
      <div style={{ padding: "12px 20px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.ink, fontWeight: 700 }}>
        <span>9:41</span>
        <span>● ● ●</span>
        <span>■■■■ 87%</span>
      </div>

      {/* === NAV === */}
      <nav style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50, background: C.bg + "EE", backdropFilter: "blur(8px)" }}>
        <Logo height={42}/>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a className="mob-btn mob-btn--lime" href="#contacto" style={{ padding: "8px 14px", fontSize: 12 }}>Reserva ✦</a>
          <button onClick={() => setMenuOpen(o => !o)} style={{ width: 42, height: 42, borderRadius: 12, border: `2.5px solid ${C.ink}`, background: C.paper, boxShadow: `3px 3px 0 ${C.ink}`, cursor: "pointer", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 16 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mob-sticker" style={{ margin: "8px 16px", padding: 14, position: "relative", zIndex: 49 }}>
          {["Las clases", "Campamento", "STEAM", "Precios", "FAQ", "Contacto"].map(l => (
            <a key={l} href="#" style={{ display: "block", padding: "10px 4px", borderBottom: `1.5px dashed ${C.ink}30`, color: C.ink, textDecoration: "none", fontFamily: displayFamily, fontSize: 14, textTransform: "uppercase" }}>{l}</a>
          ))}
        </div>
      )}

      {/* === HERO === */}
      <Section>
        <div className="mob-mono" style={{ fontSize: 10, color: C.mute, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14, fontWeight: 700 }}>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: C.lime, marginRight: 6 }}/>¡Hola! · curso 26/27 abierto
        </div>
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          <span className="mob-pill" style={{ background: C.lime }}>STEAM · +5 años</span>
          <span className="mob-pill">▸ clases mixtas</span>
        </div>
        <h1 className="mob-display" style={{ fontSize: 52, margin: "8px 0 16px" }}>
          CONSTRUYE<br/>
          EL <span className="mob-halo" style={{ "--halo": C.lime }}>FUTURO</span><br/>
          CON TUS<br/>
          PROPIAS <span className="mob-halo" style={{ "--halo": C.yellow, color: C.mag }}>MANOS<span style={{ color: C.ink }}>.</span></span>
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.45, marginBottom: 20, color: C.inkSoft, fontWeight: 500 }}>
          Extraescolares STEAM para mentes entre 5 y 11 años. Programación, robótica, ciencia y arte. <strong style={{ color: C.ink }}>Aprenden haciendo.</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a className="mob-btn" href="#contacto" style={{ justifyContent: "center" }}>Reservar prueba →</a>
          <a className="mob-btn mob-btn--white" href="#campamento" style={{ justifyContent: "center" }}>Ver campamento ⚡</a>
        </div>

        {/* Mascot floating */}
        <div style={{ position: "absolute", top: 220, right: -20, transform: "rotate(8deg)", zIndex: 2 }}>
          <DBot size={100}/>
        </div>

        {/* Stat row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, marginTop: 26, border: `2.5px solid ${C.ink}`, borderRadius: 12, overflow: "hidden", background: C.paper, boxShadow: `5px 5px 0 ${C.ink}` }}>
          {[
            { n: "GRATIS", l: "clase prueba" },
            { n: "MÁX. 8", l: "por grupo" },
            { n: "55€",    l: "al mes" },
            { n: "INCL.",   l: "materiales" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "14px 12px", borderRight: i % 2 === 0 ? `2px solid ${C.ink}` : "none", borderTop: i >= 2 ? `2px solid ${C.ink}` : "none" }}>
              <div className="mob-display" style={{ fontSize: s.n.length > 5 ? 18 : 24, color: i === 0 || i === 2 ? C.mag : C.ink }}>{s.n}</div>
              <div className="mob-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: C.mute, marginTop: 2, fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* === Photo card === */}
      <Section>
        <div className="mob-sticker" style={{ padding: 0, overflow: "hidden", transform: "rotate(-1deg)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderBottom: `2px solid ${C.ink}`, background: C.darkBand }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.mag, border: `1px solid ${C.ink}` }}/>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.yellow, border: `1px solid ${C.ink}` }}/>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.lime, border: `1px solid ${C.ink}` }}/>
            <div className="mob-mono" style={{ marginLeft: 6, fontSize: 10, color: C.lime }}>aula 02 — LIVE</div>
          </div>
          <PhotoPlaceholder tone="warm" label="LAB" hint="niños programando" height={200} radius={0}/>
          <div className="mob-mono" style={{ padding: "10px 12px", fontSize: 11, lineHeight: 1.6, color: C.inkSoft }}>
            <div><span style={{ color: C.mag, fontWeight: 700 }}>$</span> run --kit=spike --age=9</div>
            <div style={{ color: C.limeD, fontWeight: 700 }}>→ kit cargado ✓</div>
            <div>→ deploy: line-follower</div>
          </div>
        </div>
      </Section>

      {/* === Marquee === */}
      <div style={{ background: C.ink, color: C.lime, borderTop: `2.5px solid ${C.ink}`, borderBottom: `2.5px solid ${C.ink}` }}>
        <Marquee
          items={["SCRATCH", "WEDO", "MICROBIT", "SPIKE", "ARDUINO", "MAKECODE", "MARIO MAKER", "STOP-MOTION", "PIXEL ART"]}
          fontFamily={displayFamily} fontSize={16} fontWeight={900} color={C.lime}
          separator={<span style={{ color: C.mag }}>✦</span>} py={12} speed={30}
        />
      </div>

      {/* === STEAM === */}
      <Section>
        <span className="mob-label">02 // disciplinas</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 18px" }}>
          5 LETRAS.<br/>
          <span className="mob-halo" style={{ "--halo": C.cyan }}>UN MILLÓN</span><br/>
          DE COMBOS.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { L: "S", word: "Science",     color: C.lime,   r: -1.5 },
            { L: "T", word: "Technology",  color: C.cyan,   r:  1 },
            { L: "E", word: "Engineering", color: C.yellow, r: -1 },
            { L: "A", word: "Art",         color: C.mag,    r:  1.5, dark: true },
            { L: "M", word: "Math",        color: C.orange, r: -1 },
          ].map((d, i) => (
            <div key={i} className="mob-sticker" style={{ background: d.color, color: d.dark ? C.paper : C.ink, padding: "14px 14px", transform: `rotate(${d.r}deg)`, gridColumn: i === 4 ? "span 2" : "auto" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <div className="mob-display" style={{ fontSize: 56, lineHeight: 0.85 }}>{d.L}</div>
                <span className="mob-mono" style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.8 }}>0{i+1}/05</span>
              </div>
              <div className="mob-display" style={{ fontSize: 12, marginTop: 4 }}>{d.word}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* === Las clases (curso regular) === */}
      <Section id="clases">
        <span className="mob-label">03 // las clases</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 16px" }}>
          CLASES MIXTAS.<br/>
          A SU <span style={{ color: C.mag }}>RITMO.</span>
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 18, color: C.inkSoft, fontWeight: 500 }}>
          A partir de 5 años. Grupos mixtos máx. 8 peques. 90 min, 1 día por semana. Cada uno avanza con su proyecto.
        </p>
        <div className="mob-sticker" style={{ padding: 18, marginBottom: 14 }}>
          <div className="mob-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: C.magD }}>// curso regular</div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 6 }}>
            <div className="mob-display" style={{ fontSize: 44 }}>55€</div>
            <span style={{ fontSize: 13, marginLeft: 6, opacity: 0.7, fontWeight: 600 }}>/mes</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4, color: C.inkSoft }}>1 día / semana · sin matrícula · materiales incluidos</div>
          <a className="mob-btn" href="#contacto" style={{ marginTop: 14, fontSize: 13, padding: "10px 16px" }}>Reservar clase prueba →</a>
        </div>
      </Section>

      {/* === Campamento (protagonista) === */}
      <Section id="campamento" style={{ background: C.darkBand, color: C.paper, borderTop: `2.5px solid ${C.ink}`, borderBottom: `2.5px solid ${C.ink}` }}>
        <div style={{ display: "inline-flex", gap: 6, alignItems: "center", flexWrap: "wrap", marginBottom: 12 }}>
          <span className="mob-tag" style={{ background: C.yellow, color: C.ink }}>★ VERANO</span>
          <span className="mob-tag" style={{ background: C.lime, color: C.ink }}>150€ / SEM</span>
        </div>
        <h2 className="mob-display" style={{ fontSize: 42, margin: "8px 0 12px" }}>
          <span style={{ color: C.lime }}>CAMPAMENTO</span><br/>
          DE <span style={{ color: C.mag }}>VERANO.</span>
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 14, fontWeight: 500 }}>
          Una semana intensiva, de 9:00 a 14:00. <strong style={{ color: C.lime }}>Cada día un reto distinto</strong> — robótica, ciencia, videojuegos, juegos en equipo.
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 18, color: C.paper + "AA", fontWeight: 500 }}>
          Cada semana temática distinta: se pueden apuntar a varias seguidas sin repetir actividad.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { n: "01", t: "Robótica", c: C.lime },
            { n: "02", t: "Ciencia", c: C.yellow },
            { n: "03", t: "Videojuegos", c: C.mag, d: true },
            { n: "04", t: "Retos", c: C.cyan },
          ].map((p, i) => (
            <div key={i} className="mob-sticker" style={{ background: p.c, color: p.d ? C.paper : C.ink, padding: "12px 14px", transform: `rotate(${i%2?1:-1}deg)` }}>
              <div className="mob-display" style={{ fontSize: 22, lineHeight: 0.9 }}>{p.n}</div>
              <div className="mob-display" style={{ fontSize: 13, marginTop: 4 }}>{p.t}</div>
            </div>
          ))}
        </div>
        <a className="mob-btn mob-btn--lime" href="#contacto" style={{ marginTop: 18, justifyContent: "center", fontSize: 13 }}>Reservar plaza campa →</a>
      </Section>

      {/* === Testimonials === */}
      <Section>
        <span className="mob-label">04 // familias</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 20px" }}>
          LO QUE<br/>
          <span style={{ color: C.mag }}>CUENTAN.</span>
        </h2>
        {[
          { quote: "Llega cada martes preguntando '¿hoy también?'.", name: "Marta R.", role: "LUCÍA · 8", color: C.paper, r: -1.5 },
          { quote: "Mateo construyó un brazo robótico en casa con cartón.", name: "Diego L.", role: "MATEO · 10", color: C.lime, r: 1 },
          { quote: "Hablan de su código como otros de fútbol.", name: "Sara P.", role: "IRENE · 7", color: C.paper, r: -0.8 },
        ].map((t, i) => (
          <div key={i} className="mob-sticker" style={{ background: t.color, padding: 18, transform: `rotate(${t.r}deg)`, marginBottom: 16 }}>
            <div className="mob-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: C.magD, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
              ▸ testimonio_{String(i+1).padStart(2, "0")}.log
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 600, margin: "0 0 14px" }}>"{t.quote}"</p>
            <div style={{ paddingTop: 10, borderTop: `2px dashed ${C.ink}40`, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.paper, border: `2px solid ${C.ink}`, display: "grid", placeItems: "center", fontFamily: displayFamily, fontSize: 11 }}>
                {t.name.split(" ").map(s => s[0]).join("")}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 13 }}>{t.name}</div>
                <div className="mob-mono" style={{ fontSize: 9, color: C.mute, fontWeight: 600 }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Section>

      {/* === SAGAN === */}
      <div style={{ background: C.darkBand, color: C.paper, padding: "40px 20px", position: "relative", overflow: "hidden", borderTop: `2.5px solid ${C.ink}`, borderBottom: `2.5px solid ${C.ink}` }}>
        {[...Array(30)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i*41)%100}%`, top: `${(i*67)%100}%`, width: 2, height: 2, borderRadius: "50%", background: i%4===0 ? C.lime : C.paper, opacity: 0.6 }}/>
        ))}
        <div style={{ position: "relative", textAlign: "center" }}>
          <span className="mob-label" style={{ color: C.lime }}>05 // por qué importa</span>
          <blockquote className="mob-display" style={{ fontSize: 24, lineHeight: 1.18, margin: "16px 0", fontWeight: 900 }}>
            "VIVIMOS EN UNA SOCIEDAD <span style={{ color: C.cyan }}>DEPENDIENTE</span> DE LA CIENCIA, EN LA QUE <span style={{ color: C.mag }}>CASI NADIE</span> SABE NADA."
          </blockquote>
          <div className="mob-mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: C.lime, marginTop: 16, fontWeight: 700 }}>
            — CARL SAGAN
          </div>
        </div>
      </div>

      {/* === PRICING === */}
      <Section id="precios">
        <span className="mob-label">06 // planes</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 18px" }}>
          PRECIOS<br/>
          <span className="mob-halo" style={{ "--halo": C.lime }}>CLAROS.</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { name: "Curioso", price: 59,  freq: "1d/sem",  feat: ["1 disciplina", "Materiales", "Grupo máx. 8"], featured: false },
            { name: "Maker",   price: 99,  freq: "2d/sem",  feat: ["2 disciplinas", "Showcase trimestral", "Materiales"], featured: true },
            { name: "Lab Pro", price: 139, freq: "3d/sem",  feat: ["Combinadas", "Proyecto personal", "Kit para casa"], featured: false },
          ].map((plan, i) => (
            <div key={i} className="mob-sticker" style={{ background: plan.featured ? C.mag : C.paper, color: plan.featured ? C.paper : C.ink, padding: 20, transform: `rotate(${i === 1 ? -1 : 0.5}deg)`, position: "relative" }}>
              {plan.featured && (
                <div style={{ position: "absolute", top: -16, right: -10 }}>
                  <DStarBurst size={66} color={C.lime} rotate={14}>Más<br/>popular</DStarBurst>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div className="mob-display" style={{ fontSize: 22 }}>{plan.name}</div>
                <span className="mob-mono" style={{ fontSize: 11, fontWeight: 700, opacity: 0.85 }}>{plan.freq}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", margin: "12px 0" }}>
                <span className="mob-display" style={{ fontSize: 52, color: plan.featured ? C.lime : C.ink }}>{plan.price}€</span>
                <span style={{ fontSize: 12, marginLeft: 6, opacity: 0.7 }}>/mes</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", fontSize: 13, lineHeight: 1.6, fontWeight: 500 }}>
                {plan.feat.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 900, color: plan.featured ? C.lime : C.mag }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "mob-btn mob-btn--lime" : "mob-btn"} href="#contacto" style={{ width: "100%", justifyContent: "center", fontSize: 13 }}>
                Elegir →
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* === FAQ === */}
      <Section>
        <span className="mob-label">07 // dudas</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 18px" }}>
          PREGUNTAS<br/>
          <span style={{ color: C.mag }}>FRECUENTES.</span>
        </h2>
        {(window.D_FAQ || []).slice(0, 4).map((f, i) => (
          <details key={i} className="mob-faq" open={i === 0}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </Section>

      {/* === Map === */}
      <Section>
        <span className="mob-label">08 // ubicación</span>
        <h2 className="mob-display" style={{ fontSize: 38, margin: "8px 0 16px" }}>
          EN <span style={{ color: C.mag }}>RIVAS.</span>
        </h2>
        <div className="mob-sticker" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: 16, background: C.yellow }}>
            <div style={{ fontFamily: displayFamily, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.02em" }}>Av. Francisco de Quevedo, 3 · Local 2</div>
            <div style={{ fontSize: 13, marginTop: 4, fontWeight: 600 }}>28522 Rivas-Vaciamadrid</div>
            <div className="mob-mono" style={{ fontSize: 11, marginTop: 6, fontWeight: 600 }}>► 4 min de Metro Rivas Futura</div>
          </div>
          <div style={{ position: "relative", background: "#dfeac6", height: 200 }}>
            <svg viewBox="0 0 350 200" width="100%" height="100%">
              <rect width="350" height="200" fill="#dfeac6"/>
              <path d="M0 80 Q 120 60 350 110" stroke="#fff" strokeWidth="14" fill="none"/>
              <path d="M90 0 Q 110 100 160 200" stroke="#fff" strokeWidth="12" fill="none"/>
              <rect x="20" y="30" width="40" height="34" fill={C.lime} stroke={C.ink} strokeWidth="2" rx="3"/>
              <rect x="260" y="140" width="60" height="46" fill={C.orange} stroke={C.ink} strokeWidth="2" rx="3"/>
              <circle cx="110" cy="150" r="26" fill="#a8c47e" stroke={C.ink} strokeWidth="2"/>
              <g transform="translate(190,95)">
                <circle r="30" fill={C.mag} opacity="0.18"/>
                <path d="M0 -20 C 12 -20 18 -10 16 -2 C 12 6 0 16 0 16 C 0 16 -12 6 -16 -2 C -18 -10 -12 -20 0 -20 Z" fill={C.mag} stroke={C.ink} strokeWidth="2"/>
                <circle cy="-8" r="4" fill={C.paper} stroke={C.ink} strokeWidth="1.5"/>
              </g>
            </svg>
          </div>
        </div>
      </Section>

      {/* === FINAL CTA === */}
      <Section id="contacto">
        <div className="mob-sticker" style={{ background: C.lime, padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 14, right: 10 }} className="vd-bounce">
            <DStarBurst size={88} color={C.mag} rotate={-8}>
              <span style={{ color: C.paper }}>Gratis</span>
            </DStarBurst>
          </div>
          <span className="mob-label">09 // próximo paso</span>
          <h2 className="mob-display" style={{ fontSize: 44, margin: "8px 0 16px", lineHeight: 0.92 }}>
            VEN A<br/>
            PROBAR<br/>
            EL <span style={{ color: C.mag }}>LAB.</span>
          </h2>
          <p style={{ fontSize: 14, marginBottom: 18, fontWeight: 500, maxWidth: "70%" }}>
            Clase de prueba gratis. Sin compromiso.
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: 10 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Tu email" style={{ padding: "12px 16px", border: `2.5px solid ${C.ink}`, background: C.paper, color: C.ink, borderRadius: 999, fontSize: 14, fontWeight: 600 }}/>
            <input placeholder="Edad del peque" style={{ padding: "12px 16px", border: `2.5px solid ${C.ink}`, background: C.paper, color: C.ink, borderRadius: 999, fontSize: 14, fontWeight: 600 }}/>
            <button className="mob-btn" type="submit" style={{ justifyContent: "center" }}>Reservar →</button>
          </form>
          <div className="mob-mono" style={{ marginTop: 14, fontSize: 11, fontWeight: 600 }}>
            <span style={{ color: C.magD }}>►</span> info@makerslab.com<br/>
            <span style={{ color: C.magD }}>►</span> +34 660 10 14 30 (WhatsApp)
          </div>
        </div>
      </Section>

      {/* === FOOTER === */}
      <footer style={{ padding: "30px 20px", background: C.darkBand, color: C.paper, borderTop: `2.5px solid ${C.ink}`, textAlign: "center" }}>
        <div style={{ background: C.paper, padding: 8, borderRadius: 10, display: "inline-block", border: `2px solid ${C.ink}`, marginBottom: 14 }}>
          <Logo height={38}/>
        </div>
        <div style={{ fontSize: 13, fontWeight: 500, color: C.paper + "CC", marginBottom: 14, maxWidth: 280, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
          Forma a los futuros innovadores. Una clase, un robot, una idea a la vez.
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 18 }}>
          {["IG", "TT", "YT"].map(s => (
            <div key={s} style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${C.lime}`, color: C.lime, display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{s}</div>
          ))}
        </div>
        <div className="mob-mono" style={{ fontSize: 10, color: C.paper + "88", letterSpacing: "0.1em" }}>© 2026 MAKERS LAB · RIVAS · DESDE 2025</div>
      </footer>

      {/* iOS home indicator */}
      <div style={{ padding: "8px 0 14px", display: "flex", justifyContent: "center", background: C.darkBand }}>
        <div style={{ width: 140, height: 5, borderRadius: 999, background: C.paper, opacity: 0.4 }}/>
      </div>
    </div>
  );
};

window.PageMobile = PageMobile;
