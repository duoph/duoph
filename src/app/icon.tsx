import { ImageResponse } from "next/og";

export const runtime = "nodejs";
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
          background: "#050f0b",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              background: "#E8A598",
              borderRadius: "1px",
              marginRight: "1px",
              marginTop: "1px",
            }}
          />
          <div
            style={{
              width: "16px",
              height: "18px",
              border: "3px solid #18704E",
              borderTop: "none",
              borderRadius: "0 0 4px 4px",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
