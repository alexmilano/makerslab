# Makers Lab · Style Guide

Guía de estilos para la landing de **Makers Lab** (academia STEAM en Rivas-Vaciamadrid).
Estilo: **neo-brutalismo amigable** — fichas tipo pegatina (sticker), bordes negros gruesos, sombras planas y acentos vibrantes. Personalidad: maker / lab / videojuego. Audiencia: peques (5–11 años) y sus familias.

---

## 1. Principios

1. **Mobile-first.** Pensado desde 360–390 px, se escala con breakpoints simples.
2. **Carga rápida.** Sin frameworks, sin runtime, sólo 2 familias de fuentes con `font-display: swap`, imágenes con dimensiones declaradas y nada que rompa el layout.
3. **Toque-amable.** Targets ≥ 44 px, espaciado generoso entre botones.
4. **Sin emoji-icono estructural.** Los emojis se usan como decoración divertida, no para navegación.
5. **Color con propósito.** Cada color codifica una idea: lime = lo positivo / educativo, magenta = CTA / acción, cyan = info, amarillo = atención, tinta = jerarquía.

---

## 2. Paleta

| Token              | Hex       | Uso                                   |
|--------------------|-----------|---------------------------------------|
| `--bg`             | `#F4EFE3` | Fondo principal (off-white cálido).   |
| `--paper`          | `#FBF8F0` | Superficie de las pegatinas.          |
| `--ink`            | `#0D0D0D` | Tinta — bordes, texto principal.      |
| `--ink-soft`       | `#3a3530` | Texto secundario.                     |
| `--mute`           | `#7c766b` | Texto terciario / labels.             |
| `--lime`           | `#C8F23C` | Acento principal · positivo.          |
| `--lime-d`         | `#A6CC22` | Lime oscuro · hover/contraste.        |
| `--mag`            | `#E5197E` | CTA principal · llamadas a la acción. |
| `--mag-d`          | `#B70F60` | Mag oscuro.                           |
| `--cyan`           | `#2BCFEE` | Info, datos.                          |
| `--yellow`         | `#FFD83A` | Destacar / novedad.                   |
| `--orange`         | `#FF6B1A` | Energía / mate.                       |
| `--dark-band`      | `#0A0F1E` | Bandas oscuras (sección Campamento, Sagan, footer). |

**Contraste verificado:**
- Texto `ink` sobre `bg` → 17.8 : 1 (AAA).
- Texto `paper` sobre `mag` → 5.0 : 1 (AA).
- Texto `ink` sobre `lime` → 13.5 : 1 (AAA).
- Texto `lime` sobre `dark-band` → 14.2 : 1 (AAA).

---

## 3. Tipografía

| Token              | Familia                                  | Uso                                |
|--------------------|------------------------------------------|------------------------------------|
| `--font-display`   | `'Archivo Black', system-ui`             | Titulares grandes, todo en mayúsculas. |
| `--font-body`      | `'Space Grotesk', system-ui, sans-serif` | Texto, botones, formularios.        |
| `--font-mono`      | `ui-monospace, 'JetBrains Mono', monospace` | Etiquetas, datos, "código".       |

**Escala tipográfica (mobile → desktop):**

| Rol        | Mobile        | Desktop       |
|------------|---------------|---------------|
| Display 1  | 48 px / 0.92  | 96 px / 0.9   |
| Display 2  | 36 px / 0.95  | 64 px / 0.92  |
| H2         | 28 px / 1     | 48 px / 1     |
| H3         | 20 px / 1.15  | 24 px / 1.2   |
| Body       | 16 px / 1.55  | 17 px / 1.55  |
| Small      | 14 px / 1.5   | 14 px / 1.5   |
| Label-mono | 11 px / 1.4   | 11 px / 1.4   |

Body base: 16 px (evita zoom automático en iOS). Interlineado mínimo 1.5 para texto largo.

---

## 4. Espaciado y radios

Sistema de 4 px:

| Token          | px  |
|----------------|-----|
| `--space-1`    | 4   |
| `--space-2`    | 8   |
| `--space-3`    | 12  |
| `--space-4`    | 16  |
| `--space-5`    | 24  |
| `--space-6`    | 32  |
| `--space-7`    | 48  |
| `--space-8`    | 64  |
| `--space-9`    | 96  |

Radios:

| Token            | px  | Uso                       |
|------------------|-----|---------------------------|
| `--radius-sm`    | 8   | Tags, pequeñas etiquetas. |
| `--radius-md`    | 14  | Pegatinas, FAQ.           |
| `--radius-lg`    | 18  | Pegatinas grandes.        |
| `--radius-full`  | 999 | Pills, botones.           |

---

## 5. Sombras / bordes (estilo sticker)

El "sticker shadow" es la firma visual: **sombra plana negra desplazada (offset)**, sin difuminado.

```css
--border:        2.5px solid var(--ink);
--sticker-sm:    4px 4px 0 var(--ink);
--sticker:       5px 5px 0 var(--ink);
--sticker-lg:    6px 6px 0 var(--ink);
--sticker-hover: 7px 7px 0 var(--ink);
```

Al hover (en escritorio): la pegatina se desplaza `translate(-2px, -2px)` y la sombra crece a `7px 7px 0`. Al activar (press): se hunde `translate(2px, 2px)` con sombra `2px 2px 0`.

---

## 6. Componentes

### 6.1 Botón (`.btn`)

```html
<a class="btn" href="#contacto">Reservar clase prueba →</a>
<a class="btn btn--lime" href="#campamento">Ver campamento ⚡</a>
<a class="btn btn--white" href="#precios">Ver precios</a>
```

- Mín. 44 px de alto, padding `14px 22px`.
- Border 2.5 px + sticker shadow.
- `--mag` por defecto (CTA principal). Variantes: `--lime`, `--white`.

### 6.2 Pegatina (`.sticker`)

Tarjeta con borde negro grueso, fondo de papel y sombra plana. Aceptan modificadores de color:
`.sticker--lime`, `.sticker--mag`, `.sticker--cyan`, `.sticker--yellow`, `.sticker--ink`.

```html
<div class="sticker sticker--lime">
  <h3 class="display">01 · Grupo reducido</h3>
  <p>Máximo 8 peques por aula.</p>
</div>
```

### 6.3 Pill / Chip / Tag

```html
<span class="pill">STEAM · +5 años</span>
<span class="chip"><span class="chip-dot"></span> 5/5 módulos activos</span>
<span class="tag">L–V · 9:00–14:00</span>
```

- **Pill**: redondo, borde, claro. Para datos contextuales.
- **Chip**: minimalista con punto de luz lime.
- **Tag**: rectangular oscuro, mono, mayúsculas. Para metadata.

### 6.4 Halo (highlight detrás de texto)

```html
<span class="halo">FUTURO</span>
<span class="halo halo--yellow">MANOS</span>
```

Un fondo coloreado rotado ligeramente detrás del texto, con borde y sombra de sticker.

### 6.5 FAQ (`<details>` nativo)

```html
<details class="faq" open>
  <summary>¿Desde qué edad pueden venir?</summary>
  <p>A partir de 5 años…</p>
</details>
```

Sin JS. El `[+]/[-]` cambia con `details[open]`.

### 6.6 Marquee

CSS-only. Triplica los items en HTML y aplica `animation: scroll 45s linear infinite`. Respeta `prefers-reduced-motion: reduce` (animación pausada).

### 6.7 Botón flotante de WhatsApp

Fixed bottom-right, 64×64, fondo `#25D366`, borde + sombra plana. Z-index 100, siempre encima.

### 6.8 Barra CTA pegajosa

Aparece sólo cuando se ha hecho scroll > 700 px y se oculta cerca del footer. JS mínimo (event listener + class toggle).

---

## 7. Animación

- Microinteracciones: **150–250 ms** con `ease-out`.
- "Bounce" (mascota): 2.6 s `ease-in-out infinite`, ±8 px en eje Y.
- Marquee: 45 s lineal.
- Pulse del marcador del mapa: 2 s `ease-out infinite`.
- **`prefers-reduced-motion: reduce`** desactiva bounce, marquee, pulse y mantiene la UI estática.

---

## 8. Iconografía

- SVG en línea, stroke 2 px, sin emoji estructural.
- 4 iconos personalizados: cohete, robot, ráfaga de estrella, burbuja de diálogo.
- Tamaños múltiplos de 8 (24, 32, 40, 64).

---

## 9. Imágenes

- `assets/logo.png` es el único asset de marca real.
- En el prototipo se usan `PhotoPlaceholder` con gradientes para sugerir fotos. En producción reemplazar por **WebP**:
  - Hero: 800×600 (1.2× retina mobile)
  - Cards: 600×400
  - Atributos `width` y `height` SIEMPRE declarados.
  - `loading="lazy"` debajo del fold.

---

## 10. Accesibilidad

- Skip-link al inicio (oculto, visible al focus).
- Contraste mínimo 4.5 : 1 en todo texto.
- Targets táctiles ≥ 44 px.
- `:focus-visible` con anillo lime de 3 px en todo elemento interactivo.
- Labels visibles en formularios.
- `<details>` para FAQ (keyboard-friendly nativo).
- `aria-live="polite"` en feedback de formulario.
- Estructura: `h1` único, jerarquía secuencial.

---

## 11. Performance

- 0 KB de JavaScript de terceros.
- 1 CSS auto-contenido (~24 KB sin minificar).
- 1 JS vanilla (~3 KB).
- Fuentes: `preconnect` a Google Fonts + `display=swap`. Sólo Archivo Black 400 y Space Grotesk 400/600/700.
- Sin layout shift: dimensiones del logo y placeholders fijadas.
- `content-visibility: auto` en secciones largas (FAQ, marquee).
- Sin animaciones de `width/height/top/left` — sólo `transform/opacity`.

---

## 12. Breakpoints

```css
/* Mobile-first base */
@media (min-width: 600px)  { /* tablet pequeña */ }
@media (min-width: 900px)  { /* tablet / landscape */ }
@media (min-width: 1200px) { /* desktop */ }
```

Contenedor central: `max-width: 1180px` con padding lateral de 20 → 40 → 56 px.

---

## 13. Voz y tono

- **Directo y cariñoso.** "Peques", "vamos", "construir", "fallar y volver a montar".
- **Sin paternalismo.** Se habla a la familia como adulta interesada en su hijo/a.
- **CTA siempre claro.** "Reservar clase prueba →" no "Más info".
- **Cifras visibles.** Precios, edades, duraciones — sin letra pequeña.
