import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            fontWeight: 700,
            color: "#3b82f6",
            letterSpacing: -1,
          }}
        >
          BN
        </span>
      </div>
    ),
    size
  );
}
