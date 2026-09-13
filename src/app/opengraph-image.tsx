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
          background: "#FFFDF8",
          color: "#181818",
          padding: "72px",
          border: "16px solid #181818",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            background: "#BFE3F2",
            border: "3px solid #181818",
            padding: "8px 14px",
            width: "auto",
            fontWeight: 700,
          }}
        >
          A cat magazine, basically
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
          <div style={{ fontSize: 34, color: "#181818", maxWidth: 820 }}>
            Good stuff for cats. No nonsense for humans.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
