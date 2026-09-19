import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0e17 0%, #1a2332 100%)",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 92,
            fontWeight: 700,
            color: "#3b82f6",
            letterSpacing: -4,
          }}
        >
          BN
        </span>
      </div>
    ),
    size
  );
}
