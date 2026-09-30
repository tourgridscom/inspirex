import { ImageResponse } from "next/og";
import { getSolution, SOLUTIONS } from "@/lib/content/solutions";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "InspireX solution";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

const col = { display: "flex", flexDirection: "column" } as const;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

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
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 14 }}>
          <svg viewBox="0 0 28 28" width="34" height="34">
            <path d="M4 4 24 24M24 4 4 24" stroke="rgba(255,255,255,.35)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M4 4 14 14" stroke="#d35652" strokeWidth="3" strokeLinecap="round" />
            <circle cx="14" cy="14" r="3.6" fill="#ffffff" />
          </svg>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>
            InspireX
          </span>
          <span style={{ fontSize: 24, color: "#8ba4b1", marginLeft: 8 }}>
            {solution?.group ?? "Solutions"}
          </span>
        </div>

        <div style={col}>
          <span style={{ fontSize: 68, fontWeight: 700, color: "#ffffff", letterSpacing: -2.5, lineHeight: 1.06 }}>
            {solution?.title ?? "Our Solutions"}
          </span>
          <span style={{ marginTop: 24, fontSize: 26, color: "#8ba4b1", letterSpacing: -0.3, lineHeight: 1.4 }}>
            {solution?.summary ?? ""}
          </span>
        </div>

        <div style={{ display: "flex", height: 5, width: 240, background: "#d35652" }} />
      </div>
    ),
    size,
  );
}
