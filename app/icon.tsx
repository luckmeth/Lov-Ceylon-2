import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a2e22",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: "#f7f5f0",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: 2,
            fontFamily: "serif",
          }}
        >
          LC
        </span>
      </div>
    ),
    { ...size }
  );
}
