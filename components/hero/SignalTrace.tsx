/**
 * "The unbroken line" — an abstract monitoring signal.
 *
 * InspireX's own language is continuity: eliminate interruptions, minimize
 * downtime, 24/7 monitoring. The trace is deliberately level rather than
 * rising: it depicts steady service, not a performance claim. It draws itself
 * once on load and a single pulse travels it. Pure CSS, so this stays a
 * server component.
 */

const TRACE =
  "M0 300H96C118 300 120 244 142 244H232C254 244 256 320 278 320H352C374 320 376 262 398 262H478C500 262 502 302 524 302H600C622 302 624 250 646 250H720";

const NODES: [number, number][] = [
  [142, 244],
  [278, 320],
  [398, 262],
  [524, 302],
  [646, 250],
];

/** Faint orthogonal routing behind the signal: infrastructure, not decoration. */
const ROUTES = [
  "M48 452H168V392H288",
  "M352 452H442V412H572V444H704",
  "M16 128H106V180H192",
  "M462 84H548V124H656V84",
];

export function SignalTrace({
  className = "",
  variant = "panel",
}: {
  className?: string;
  /** "strip" crops to the signal itself for a slim readout. */
  variant?: "panel" | "strip";
}) {
  const strip = variant === "strip";
  return (
    <svg
      viewBox={strip ? "0 196 720 168" : "0 0 720 560"}
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="tr-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d35652" stopOpacity="0.25" />
          <stop offset="38%" stopColor="#e4736f" stopOpacity="1" />
          <stop offset="100%" stopColor="#f2b0ad" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="tr-veil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d35652" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#d35652" stopOpacity="0" />
        </linearGradient>
        <pattern id="tr-grid" width="45" height="45" patternUnits="userSpaceOnUse">
          <path d="M45 0H0V45" stroke="rgba(255,255,255,.05)" strokeWidth="1" fill="none" />
        </pattern>
        <filter id="tr-glow" x="-25%" y="-40%" width="150%" height="180%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="tr-wash" cx="0.55" cy="0.5" r="0.62">
          <stop offset="0%" stopColor="#1d4c62" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a1d28" stopOpacity="0" />
        </radialGradient>
        <mask id="tr-fade">
          <rect width="720" height="560" fill="url(#tr-fademask)" />
        </mask>
        <linearGradient id="tr-fademask" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" />
          <stop offset="14%" stopColor="#fff" />
          <stop offset="86%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>

      {!strip && <rect width="720" height="560" fill="url(#tr-wash)" />}
      <rect width="720" height="560" fill="url(#tr-grid)" mask="url(#tr-fade)" />

      {/* Threshold references the signal stays between */}
      <g stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="2 7" mask="url(#tr-fade)">
        <path d="M0 210H720" />
        <path d="M0 354H720" />
      </g>

      {/* Infrastructure routing */}
      <g display={strip ? "none" : undefined} stroke="rgba(255,255,255,.13)" strokeWidth="1" fill="none" mask="url(#tr-fade)">
        {ROUTES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g display={strip ? "none" : undefined} fill="rgba(255,255,255,.26)">
        {[
          [168, 392],
          [442, 412],
          [106, 180],
          [548, 124],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" />
        ))}
      </g>

      {/* A soft veil under the signal — depth, not a data area */}
      {!strip && <path d={`${TRACE}L720 400L0 400Z`} fill="url(#tr-veil)" />}

      {/* The unbroken line */}
      <path
        d={TRACE}
        stroke="url(#tr-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#tr-glow)"
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: 1500,
          animation: "trace-in 2s cubic-bezier(.22,1,.36,1) .3s forwards",
        }}
      />

      {/* Measurement nodes on the line */}
      <g>
        {NODES.map(([cx, cy], i) => (
          <g key={`${cx}-${cy}`} style={{ opacity: 0, animation: `rise .5s ease-out ${0.85 + i * 0.2}s forwards` }}>
            <circle cx={cx} cy={cy} r="7" fill="#0a1d28" />
            <circle cx={cx} cy={cy} r="3.6" fill="#d35652" />
            <circle cx={cx} cy={cy} r="7" stroke="rgba(233,138,134,.5)" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* A single pulse travelling the line */}
      <circle
        r="3.5"
        fill="#fff"
        style={{
          offsetPath: `path("${TRACE}")`,
          offsetRotate: "0deg",
          animation: "pulse-travel 7s linear 2.3s infinite",
        }}
      />

      {/* Uptime sampling, unbroken across the frame */}
      <g display={strip ? "none" : undefined} mask="url(#tr-fade)">
        {Array.from({ length: 56 }).map((_, i) => {
          const h = 9 + ((i * 29) % 17);
          return (
            <rect
              key={i}
              x={8 + i * 12.7}
              y={494 - h}
              width="3"
              height={h}
              rx="1.5"
              fill={i % 13 === 9 ? "rgba(211,86,82,.8)" : "rgba(255,255,255,.14)"}
            />
          );
        })}
      </g>
    </svg>
  );
}
