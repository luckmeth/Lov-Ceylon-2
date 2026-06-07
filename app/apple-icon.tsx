import { ImageResponse } from "next/og";

// Apple touch icon (home-screen shortcut on iOS).
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#2c2925",
          color: "#c4a574",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: 4 }}>
          LC
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 15,
            letterSpacing: 6,
            marginTop: 6,
            color: "#b3a78f",
          }}
        >
          LOV&apos;CEYLON
        </div>
      </div>
    ),
    { ...size },
  );
}
