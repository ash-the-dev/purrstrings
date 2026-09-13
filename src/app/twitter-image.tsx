import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Purrstrings — The Good Stuff for Cats";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6C5D5",
          color: "#181818",
          padding: "72px",
          border: "16px solid #181818",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, color: "#E63946" }}>
          Purrstrings
        </div>
        <div style={{ fontSize: 64, lineHeight: 0.95, fontFamily: "Georgia, serif", maxWidth: 860 }}>
          Good stuff for cats. No nonsense for humans.
        </div>
      </div>
    ),
    size,
  );
}
