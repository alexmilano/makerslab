// Shared utilities for all variations.
// Logo, photo placeholders, custom cursor, easter-egg helpers.

const LOGO_SRC = "assets/logo.png";

// ----- Logo -----
const Logo = ({ height = 64, withGlow = false, style }) => (
  <img
    src={LOGO_SRC}
    alt="Makers Lab"
    style={{
      height,
      width: "auto",
      display: "block",
      filter: withGlow ? "drop-shadow(0 0 18px rgba(200,242,60,0.6))" : "none",
      ...style,
    }}
  />
);

// ----- Photo placeholder (kid-photo stand-in, deterministic colored striped block) -----
// Picks a tone palette per `tone` prop so we don't have to ship stock photos.
const PHOTO_TONES = {
  warm: ["#f4d6b8", "#e5b08d", "#c98c66"],
  cool: ["#cfe3f3", "#9fc6e6", "#5d9bcd"],
  lime: ["#e8f5b4", "#c4dd6a", "#8bb13a"],
  magenta: ["#f7c8de", "#e88cb6", "#c2538a"],
  studio: ["#e8e4dc", "#c9c2b3", "#8c8273"],
  dark: ["#1a2236", "#2a3552", "#3d4d77"],
};

const PhotoPlaceholder = ({
  label = "PHOTO",
  tone = "warm",
  width = "100%",
  height = 320,
  radius = 18,
  hint = "kids · steam · lab",
  dashed = false,
  style,
}) => {
  const colors = PHOTO_TONES[tone] || PHOTO_TONES.warm;
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: `repeating-linear-gradient(135deg, ${colors[0]} 0 16px, ${colors[1]} 16px 32px)`,
        position: "relative",
        overflow: "hidden",
        border: dashed ? `2px dashed ${colors[2]}` : "none",
        ...style,
      }}
    >
      {/* simple silhouette gradient overlay to suggest a subject */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(70% 60% at 50% 65%, ${colors[2]}AA 0%, transparent 60%)`,
      }} />
      <div style={{
        position: "absolute",
        top: 12, left: 14,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontSize: 10, letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.85)",
        textTransform: "uppercase",
        background: "rgba(0,0,0,0.35)",
        padding: "4px 8px",
        borderRadius: 999,
      }}>
        {label} · {hint}
      </div>
    </div>
  );
};

// ----- Custom cursor (used inside artboards; opt-in per variation) -----
// Pass `flavor` to pick a look. The cursor follows mousemove inside its
// parent container (position: relative). Hides native cursor on that scope.
const CustomCursor = ({ flavor = "atom", scopeRef, color = "#E5197E" }) => {
  const [pos, setPos] = React.useState({ x: -100, y: -100, visible: false });
  const [pressed, setPressed] = React.useState(false);
  React.useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
    };
    const onLeave = () => setPos(p => ({ ...p, visible: false }));
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
    };
  }, [scopeRef]);

  const size = flavor === "crosshair" ? 40 : 28;
  const s = pressed ? 0.85 : 1;
  if (!pos.visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: pos.x, top: pos.y,
        width: size, height: size,
        transform: `translate(-50%, -50%) scale(${s})`,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform .12s ease",
        mixBlendMode: flavor === "neon" ? "screen" : "normal",
      }}
    >
      {flavor === "atom" && (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <circle cx="20" cy="20" r="3" fill={color} />
          <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={color} strokeWidth="1.5" />
          <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="16" ry="6" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(-60 20 20)" />
        </svg>
      )}
      {flavor === "crosshair" && (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <circle cx="20" cy="20" r="14" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="20" cy="20" r="2" fill={color} />
          <line x1="20" y1="2" x2="20" y2="10" stroke={color} strokeWidth="1.5" />
          <line x1="20" y1="30" x2="20" y2="38" stroke={color} strokeWidth="1.5" />
          <line x1="2" y1="20" x2="10" y2="20" stroke={color} strokeWidth="1.5" />
          <line x1="30" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
      {flavor === "neon" && (
        <svg viewBox="0 0 40 40" width={size} height={size}>
          <circle cx="20" cy="20" r="10" fill="none" stroke={color} strokeWidth="2"
            style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
          <circle cx="20" cy="20" r="3" fill={color}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
        </svg>
      )}
      {flavor === "sticker" && (
        <div style={{
          width: size, height: size, borderRadius: "50%",
          background: color,
          border: "3px solid #1a1a1a",
          boxShadow: "2px 2px 0 #1a1a1a",
        }} />
      )}
    </div>
  );
};

// ----- Marquee (for hero strip / banners) -----
const Marquee = ({ items, speed = 30, separator = "✦", color = "#1a1a1a", bg = "transparent", fontFamily, fontWeight = 700, fontSize = 18, py = 14 }) => {
  const inner = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: bg, padding: `${py}px 0`, width: "100%" }}>
      <div style={{
        display: "inline-flex",
        whiteSpace: "nowrap",
        animation: `mm-scroll ${speed}s linear infinite`,
        gap: 32,
        color,
        fontFamily: fontFamily || "inherit",
        fontWeight,
        fontSize,
        letterSpacing: "0.02em",
      }}>
        {inner.map((it, i) => (
          <span key={i} style={{ display: "inline-flex", gap: 32, alignItems: "center" }}>
            {it}
            <span style={{ opacity: 0.5 }}>{separator}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes mm-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
};

// ----- Confetti easter egg (triggered by Konami / triple-click logo) -----
const Confetti = ({ active, palette }) => {
  const pieces = React.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      duration: 1.6 + Math.random() * 1.2,
      color: palette[i % palette.length],
      rotate: Math.random() * 360,
      size: 8 + Math.random() * 8,
    }));
  }, [palette]);
  if (!active) return null;
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 9998,
    }}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          top: -20, left: `${p.left}%`,
          width: p.size, height: p.size * 0.6,
          background: p.color,
          transform: `rotate(${p.rotate}deg)`,
          animation: `mk-fall ${p.duration}s ${p.delay}s ease-in forwards`,
        }} />
      ))}
      <style>{`@keyframes mk-fall { 0%{ transform: translateY(0) rotate(0); opacity:1 } 100%{ transform: translateY(120vh) rotate(720deg); opacity: 0.8 } }`}</style>
    </div>
  );
};

// Hook: detects Konami code (↑↑↓↓←→←→BA), triple-click on logo, or pressing 'M'+'L'.
const useEasterEgg = (scopeRef) => {
  const [fire, setFire] = React.useState(0);
  const trigger = React.useCallback(() => {
    setFire(f => f + 1);
    setTimeout(() => setFire(f => Math.max(0, f - 1)), 3000);
  }, []);
  React.useEffect(() => {
    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let idx = 0;
    const onKey = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === seq[idx]) { idx++; if (idx === seq.length) { trigger(); idx = 0; } }
      else { idx = (k === seq[0] ? 1 : 0); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trigger]);
  return { active: fire > 0, trigger };
};

Object.assign(window, {
  Logo, PhotoPlaceholder, CustomCursor, Marquee, Confetti, useEasterEgg, LOGO_SRC, PHOTO_TONES,
});
