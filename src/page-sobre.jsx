// PAGE — Sobre Nosotros (Vanessa + manifiesto + equipo)

const MANIFIESTO = [
  { n: "01", title: "Hacer > leer",       desc: "Las manos enseñan más rápido que las diapositivas. Cada sesión termina con algo construido.", color: "lime" },
  { n: "02", title: "Errar = jugar",      desc: "Aquí no se levanta la mano para preguntar 'está bien?'. Se prueba. Si rompe, se entiende mejor.", color: "mag", dark: true },
  { n: "03", title: "Grupos pequeños",    desc: "Máximo 8 por aula. Cada peque tiene voz, espacio y materiales propios.", color: "yellow" },
  { n: "04", title: "Material profesional", desc: "Lego Spike, Arduino, Microbit. Lo mismo que usan ingenieros, escalado a su tamaño.", color: "cyan" },
  { n: "05", title: "Cero pantallas pasivas", desc: "Si hay pantalla, está para programar, diseñar o construir. Nunca para consumir.", color: "lime" },
  { n: "06", title: "Familias dentro",    desc: "3 showcases al año. Las familias ven, prueban y juegan con lo que sus peques crean.", color: "yellow" },
];

const HISTORIA = [
  "En 2025 abrí Makers Lab con una idea muy concreta: el sitio al que yo habría querido ir cuando tenía 8 años y desmontaba el mando de la tele para ver qué había dentro.",
  "Vengo de unos cuantos años en ingeniería de software y de varios más enseñando programación. Y siempre vi lo mismo: extraescolares 'tech' que en realidad eran clases magistrales con un kit. Aquí no.",
  "En Makers Lab no agrupamos por edad ni hay 'planes' distintos. Una sola cuota mensual, grupos mixtos máximo 8, y cada peque trae un proyecto y avanza con él. Los mayores explican lo que saben, los pequeños ven referentes, y la profe va rotando.",
  "Llevamos un curso completo abierto en Rivas. Es poco — pero lo suficiente para saber que esto funciona. Si tu hijo o hija desmonta cosas, hace preguntas raras, o construye torres de Lego más altas que él: bienvenido al sitio correcto.",
];

const EQUIPO = [
  { name: "Vanessa Hernández", role: "Fundadora · Profe principal", bio: "Ingeniera de software y enseñando programación a peques varios años. Habla con ellos en su idioma.", tone: "warm" },
];

const NUMEROS = [
  { n: "1º año", l: "en Rivas, abierto en 2025" },
  { n: "MÁX. 8", l: "peques por grupo" },
  { n: "5",      l: "disciplinas STEAM" },
  { n: "GRATIS", l: "clase de prueba" },
  { n: "60 m²",  l: "aula equipada" },
  { n: "0€",     l: "matrícula" },
];

const PageSobre = ({ fontSet = "archivo" }) => {
  const C = window.D_PALETTE;
  const displayFamily = {
    archivo:   "'Archivo Black', system-ui, sans-serif",
    bricolage: "'Bricolage Grotesque', system-ui, sans-serif",
    fraunces:  "'Fraunces', serif",
  }[fontSet] || "'Archivo Black', sans-serif";
  const colorMap = { lime: C.lime, mag: C.mag, yellow: C.yellow, cyan: C.cyan };

  return (
    <div className="vd-root vd-grid" style={{ minHeight: 4000, overflow: "hidden", position: "relative" }}>
      <style>{window.dCss}</style>

      {/* === NAV === */}
      <nav className="vd-nav">
        <a href="index.html"><Logo height={60}/></a>
        <div className="vd-nav-links">
          <a href="index.html#clases">Las clases</a>
          <a href="index.html#campamento">Campamento</a>
          <a href="index.html#disciplinas">STEAM</a>
          <a href="index.html#precios">Precios</a>
          <a href="index.html#faq">FAQ</a>
        </div>
        <a className="vd-btn" href="index.html#contacto">Reservar prueba →</a>
      </nav>

      {/* === HERO === */}
      <section style={{ padding: "30px 56px 80px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 50, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span className="vd-pill" style={{ background: C.lime }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.ink }}/>
                Sobre nosotros · desde 2025
              </span>
              <span className="vd-chip">▸ Rivas-Vaciamadrid</span>
            </div>
            <h1 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 112, margin: "12px 0 28px", lineHeight: 0.92 }}>
              UN <span style={{ color: C.mag }}>LAB</span><br/>
              POR Y PARA<br/>
              <span className="vd-halo" style={{ "--halo": C.yellow }}>CURIOSOS<span style={{ color: C.ink }}>.</span></span>
            </h1>
            <p style={{ fontSize: 21, lineHeight: 1.45, maxWidth: 600, marginBottom: 28, fontWeight: 500, color: C.inkSoft }}>
              Makers Lab no es una academia. Es el sitio al que su fundadora habría querido ir cuando tenía 8 años — donde las preguntas raras se toman en serio y las cosas se rompen para entenderlas.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="vd-btn" href="index.html#contacto">Visita el lab →</a>
              <a className="vd-btn vd-btn--white" href="#equipo">Conoce al equipo ↓</a>
            </div>
          </div>

          {/* photo + bot */}
          <div style={{ position: "relative", minHeight: 500 }}>
            <div className="vd-sticker" style={{ position: "absolute", top: 10, left: 0, padding: 12, transform: "rotate(-3deg)", width: "100%" }}>
              <PhotoPlaceholder tone="warm" label="VANESSA" hint="fundadora · 2025" height={400} radius={8}/>
              <div style={{ marginTop: 10, fontFamily: "'Archivo Black', sans-serif", fontSize: 14, textTransform: "uppercase" }}>
                Vanessa · fundadora
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -10, right: -10, zIndex: 3, "--r": "8deg" }} className="vd-bounce">
              <DStarBurst size={130} color={C.lime} rotate={8}>
                Abierto<br/>en 2025
              </DStarBurst>
            </div>
          </div>
        </div>
      </section>

      {/* === NÚMEROS === */}
      <section style={{ padding: "60px 56px", background: C.paper, borderTop: `2.5px solid ${C.ink}`, borderBottom: `2.5px solid ${C.ink}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, border: `2.5px solid ${C.ink}`, borderRadius: 14, overflow: "hidden", boxShadow: `6px 6px 0 ${C.ink}` }}>
          {NUMEROS.map((s, i) => (
            <div key={i} style={{ padding: "26px 18px", borderRight: i < 5 ? `2px solid ${C.ink}` : "none", textAlign: "left", background: i % 2 === 0 ? C.paper : C.bg }}>
              <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 44, color: i === 2 ? C.mag : C.ink }}>{s.n}</div>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.mute, marginTop: 4, fontWeight: 700, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === HISTORIA === */}
      <section style={{ padding: "80px 56px 60px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 70, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 30 }}>
            <span className="vd-label">02 // historia</span>
            <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 60, margin: "12px 0 18px" }}>
              CÓMO<br/>
              EMPEZÓ<br/>
              <span style={{ color: C.mag }}>ESTO.</span>
            </h2>
            <div style={{ marginTop: 20 }}>
              <DBubble color={C.yellow} rotate={-4}>
                Spoiler:<br/>desmontando un mando.
              </DBubble>
            </div>
          </div>
          <div>
            {HISTORIA.map((p, i) => (
              <p key={i} style={{ fontSize: 19, lineHeight: 1.55, marginBottom: 22, fontWeight: 500, color: i === 0 ? C.ink : C.inkSoft, maxWidth: 680 }}>
                {i === 0 && <span className="vd-display" style={{ fontFamily: displayFamily, fontSize: 44, color: C.mag, float: "left", lineHeight: 0.85, marginRight: 10, marginTop: 4 }}>{p[0]}</span>}
                {i === 0 ? p.slice(1) : p}
              </p>
            ))}
            <div className="vd-sticker" style={{ background: C.lime, padding: 24, marginTop: 24, transform: "rotate(-1deg)", maxWidth: 580 }}>
              <div className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>VANESSA HERNÁNDEZ · FUNDADORA</div>
              <div style={{ fontFamily: displayFamily, fontSize: 22, lineHeight: 1.2, textTransform: "uppercase" }}>
                "Si tu peque desmonta cosas, estás en el sitio correcto."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MANIFIESTO === */}
      <section style={{ padding: "80px 56px 60px", position: "relative" }}>
        <div style={{ marginBottom: 50, textAlign: "center" }}>
          <span className="vd-label">03 // manifiesto</span>
          <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 76, margin: "12px 0", maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}>
            6 COSAS QUE<br/>
            HACEMOS <span style={{ color: C.mag }}>DIFERENTE.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {MANIFIESTO.map((m, i) => (
            <div key={i} className="vd-sticker" style={{ background: colorMap[m.color], color: m.dark ? C.paper : C.ink, padding: 28, transform: `rotate(${[-1, 1, -0.5, 0.7, -0.8, 0.4][i]}deg)` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 44 }}>{m.n}</div>
                <span className="vd-mono" style={{ fontSize: 10, letterSpacing: "0.12em", opacity: 0.7, fontWeight: 700 }}>// principio</span>
              </div>
              <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 26, textTransform: "uppercase", margin: "0 0 12px", lineHeight: 1 }}>{m.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === EQUIPO === */}
      <section id="equipo" style={{ padding: "80px 56px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 30, marginBottom: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 700 }}>
            <span className="vd-label">04 // quién está al frente</span>
            <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 72, margin: "12px 0 14px" }}>
              VANESSA<br/>
              <span style={{ color: C.mag }}>HERNÁNDEZ.</span>
            </h2>
            <p style={{ fontSize: 17, color: C.inkSoft, lineHeight: 1.5, maxWidth: 640, fontWeight: 500 }}>
              Fundadora, profe principal y la que está todos los días en el aula. Por ahora soy yo, pero conforme la academia crezca abriremos más plazas y más manos.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 24 }}>
          {EQUIPO.map((p, i) => (
            <div key={i} className="vd-sticker" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "180px 1fr", transform: `rotate(${-1}deg)` }}>
              <PhotoPlaceholder tone={p.tone} label={p.name.split(" ")[0].toUpperCase()} hint="" height={220} width={180} radius={0}/>
              <div style={{ padding: 22 }}>
                <div className="vd-display" style={{ fontFamily: displayFamily, fontSize: 22, textTransform: "uppercase" }}>{p.name}</div>
                <div className="vd-mono" style={{ fontSize: 11, color: C.magD, letterSpacing: "0.08em", fontWeight: 700, marginTop: 4, textTransform: "uppercase" }}>{p.role}</div>
                <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>{p.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === CITA SAGAN cierre === */}
      <section style={{ padding: "100px 56px", margin: "60px 0", background: C.darkBand, color: C.paper, position: "relative", overflow: "hidden", borderTop: `2.5px solid ${C.ink}`, borderBottom: `2.5px solid ${C.ink}` }}>
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{ position: "absolute", left: `${(i*41)%100}%`, top: `${(i*67)%100}%`, width: i%5===0?3:1.5, height: i%5===0?3:1.5, borderRadius: "50%", background: i%4===0 ? C.lime : C.paper, opacity: 0.55, boxShadow: i%5===0 ? `0 0 6px ${C.lime}` : "none" }}/>
        ))}
        <div style={{ position: "relative", maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
          <span className="vd-label" style={{ color: C.lime }}>05 // nos define esta cita</span>
          <blockquote className="vd-display" style={{ fontFamily: displayFamily, fontSize: 52, lineHeight: 1.15, margin: "24px 0", fontWeight: 900 }}>
            "VIVIMOS EN UNA SOCIEDAD <span className="vd-glow-cyan">PROFUNDAMENTE DEPENDIENTE</span> DE LA CIENCIA Y LA TECNOLOGÍA, Y EN LA QUE <span className="vd-glow-mag">CASI NADIE</span> SABE NADA DE ESTOS TEMAS."
          </blockquote>
          <div className="vd-mono" style={{ fontSize: 13, letterSpacing: "0.25em", color: C.lime, marginTop: 30, fontWeight: 700 }}>
            — CARL SAGAN
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section style={{ padding: "60px 56px" }}>
        <div className="vd-sticker" style={{ background: C.lime, padding: "60px 50px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 30, right: 50, zIndex: 2 }} className="vd-bounce">
            <DStarBurst size={150} color={C.mag} rotate={-8}>
              <span style={{ color: C.paper }}>Ven al<br/>aula</span>
            </DStarBurst>
          </div>
          <span className="vd-label">06 // ven al lab</span>
          <h2 className="vd-display" style={{ fontFamily: displayFamily, fontSize: 88, margin: "12px 0 24px", maxWidth: 800, lineHeight: 0.92 }}>
            VEN A<br/>
            VERLO <span style={{ color: C.mag }}>EN VIVO.</span>
          </h2>
          <p style={{ fontSize: 18, maxWidth: 560, marginBottom: 30, fontWeight: 500 }}>
            La mejor forma de entender el lab es entrar. Cuéntanos cuándo te viene bien y te enseñamos el sitio.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="vd-btn" href="index.html#contacto">Reservar visita →</a>
            <a className="vd-btn vd-btn--white" href="index.html#clases">Ver las clases</a>
          </div>
        </div>
      </section>

      {/* === FOOTER mínimo === */}
      <footer style={{ padding: "40px 56px", background: C.darkBand, color: C.paper, borderTop: `2.5px solid ${C.ink}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <a href="index.html" style={{ background: C.paper, padding: 8, borderRadius: 10, display: "inline-block", border: `2px solid ${C.ink}` }}>
          <Logo height={40}/>
        </a>
        <div className="vd-mono" style={{ fontSize: 12, color: C.paper + "AA", letterSpacing: "0.1em" }}>
          © 2026 MAKERS LAB · DESDE 2025 EN RIVAS
        </div>
        <a className="vd-btn vd-btn--white" href="index.html" style={{ padding: "10px 16px", fontSize: 13 }}>← Volver a inicio</a>
      </footer>
    </div>
  );
};

window.PageSobre = PageSobre;
