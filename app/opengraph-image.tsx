import { ImageResponse } from "next/og";

export const alt = "InspireX — IT consulting, cybersecurity and technology staffing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Satori needs an explicit display on every multi-child element. */
const col = { display: "flex", flexDirection: "column" } as const;
const row = { display: "flex", flexDirection: "row", alignItems: "center" } as const;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          ...col,
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          background: "#0a1d28",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ ...row, gap: 14 }}>
          <svg viewBox="0 0 28 28" width="36" height="36">
            <path d="M4 4 24 24M24 4 4 24" stroke="rgba(255,255,255,.35)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M4 4 14 14" stroke="#d35652" strokeWidth="3" strokeLinecap="round" />
            <circle cx="14" cy="14" r="3.6" fill="#ffffff" />
          </svg>
          <div style={{ ...row }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>Inspire</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: "#d35652", letterSpacing: -1 }}>X</span>
          </div>
        </div>

        <div style={col}>
          <div style={{ ...col, fontSize: 76, fontWeight: 700, color: "#ffffff", letterSpacing: -3, lineHeight: 1.06 }}>
            <span>Technology that never</span>
            <span>interrupts the business.</span>
          </div>
          <span style={{ marginTop: 30, fontSize: 27, color: "#8ba4b1", letterSpacing: -0.3 }}>
            IT consulting, cybersecurity and technology staffing. Toronto, Ontario.
          </span>
        </div>

        <div style={{ display: "flex", height: 5, width: 240, background: "#d35652" }} />
      </div>
    ),
    size,
  );
}
