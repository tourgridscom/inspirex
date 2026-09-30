import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** The InspireX mark: crossing traces meeting at a node. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1d28",
          borderRadius: 12,
        }}
      >
        <svg viewBox="0 0 28 28" width="46" height="46">
          <path d="M4 4 24 24M24 4 4 24" stroke="rgba(255,255,255,.45)" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M4 4 14 14" stroke="#d35652" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="14" cy="14" r="4" fill="#ffffff" />
          <circle cx="14" cy="14" r="1.8" fill="#d35652" />
        </svg>
      </div>
    ),
    size,
  );
}
