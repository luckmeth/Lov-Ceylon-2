import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt =
  "Lov'Ceylon Photography — Wedding, Homecoming & Portrait Photography in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#f8f5ee",
          color: "#2c2925",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 14,
            color: "#9a8a6b",
            textTransform: "uppercase",
          }}
        >
          Wedding · Homecoming · Pre-Shoot
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            letterSpacing: 18,
            margin: "18px 0 6px",
            color: "#2c2925",
          }}
        >
          LOV&apos;CEYLON
        </div>
        <div
          style={{
            display: "flex",
            width: 360,
            height: 2,
            background: "#c4a574",
            margin: "14px 0 26px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 38,
            letterSpacing: 6,
            color: "#5a4a35",
          }}
        >
          Photography · Colombo, Sri Lanka
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 46,
            fontSize: 24,
            letterSpacing: 8,
            color: "#9a8a6b",
            textTransform: "uppercase",
          }}
        >
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
