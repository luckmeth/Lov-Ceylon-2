import { ImageResponse } from "next/og";

// 96×96 (multiple of 48) so Google accepts it as a favicon.
export const size = { width: 96, height: 96 };
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
          background: "#2c2925",
          color: "#c4a574",
          fontSize: 54,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          letterSpacing: 2,
          borderRadius: 18,
        }}
      >
        LC
      </div>
    ),
    { ...size },
  );
}
