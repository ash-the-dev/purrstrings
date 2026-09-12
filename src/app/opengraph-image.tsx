import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Purrstrings — The Good Stuff for Cats";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e8",
          color: "#2a2420",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c45c26",
            fontWeight: 600,
          }}
        >
          A cat product publication
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.95,
              fontFamily: "Georgia, serif",
            }}
          >
            Purrstrings
          </div>
          <div style={{ fontSize: 34, color: "#6b6258", maxWidth: 760 }}>
            Good stuff for cats. No nonsense for humans.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
