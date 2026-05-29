// Canvas — Maker Studio (D) — landing + Sobre nosotros + mobile.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "font_d": "archivo",
  "hero_layout": "split"
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const W = 1320;
  const H = 6200;
  const H_SOBRE = 3800;
  const W_MOB = 410;
  const H_MOB = 7300;

  return (
    <div>
      <DesignCanvas>
        <DCSection
          id="landing"
          title="Landing"
          subtitle="Página principal. 4 layouts de hero seleccionables desde Tweaks."
        >
          <DCArtboard id="vd" label="D · Landing principal" width={W} height={H}>
            <VariationD fontSet={t.font_d} heroLayout={t.hero_layout} />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="inner-pages"
          title="Páginas internas"
          subtitle="Sobre nosotros · Vanessa + manifiesto."
        >
          <DCArtboard id="sobre" label="Sobre nosotros · Vanessa" width={W} height={H_SOBRE}>
            <PageSobre fontSet={t.font_d} />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="mobile"
          title="Modo móvil"
          subtitle="Mockup 390px · landing reorganizada para una mano."
        >
          <DCArtboard id="mobile-landing" label="Mobile · landing" width={W_MOB} height={H_MOB}>
            <PageMobile fontSet={t.font_d} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks · Makers Lab">
        <TweakSection label="Layout del hero" />
        <TweakSelect
          label="Variante"
          value={t.hero_layout}
          options={[
            { label: "Split · texto + foto-terminal",   value: "split" },
            { label: "Stacked · título XXL + mosaico",  value: "stacked" },
            { label: "Centered · poster style",         value: "centered" },
            { label: "Mosaic · 3 columnas magazine",    value: "mosaic" },
          ]}
          onChange={(v) => setTweak("hero_layout", v)}
        />

        <TweakSection label="Tipografía (todas las páginas)" />
        <TweakSelect
          label="Display"
          value={t.font_d}
          options={[
            { label: "Archivo Black (chunky)",     value: "archivo" },
            { label: "Bricolage (geométrica)",     value: "bricolage" },
            { label: "Fraunces (serif editorial)", value: "fraunces" },
          ]}
          onChange={(v) => setTweak("font_d", v)}
        />

        <TweakSection label="Easter eggs" />
        <div style={{ fontSize: 12, color: "#9b9485", lineHeight: 1.5, padding: "0 2px" }}>
          • Konami: <code style={{ background: "#f0eee9", padding: "1px 4px", borderRadius: 3 }}>↑↑↓↓←→←→BA</code><br/>
          • Triple click en el logo<br/>
          → confetti
        </div>
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
