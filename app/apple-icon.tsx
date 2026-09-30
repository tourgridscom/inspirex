import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <svg viewBox="0 0 28 28" width="120" height="120">
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
