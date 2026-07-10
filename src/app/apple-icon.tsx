import { ImageResponse } from "next/og";

export const runtime = "nodejs";
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
          background: "#050f0b",
          borderRadius: "36px",
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
              width: "22px",
              height: "22px",
              background: "#E8A598",
              borderRadius: "4px",
              marginRight: "4px",
              marginTop: "4px",
            }}
          />
          <div
            style={{
              width: "72px",
              height: "80px",
              border: "14px solid #18704E",
              borderTop: "none",
              borderRadius: "0 0 18px 18px",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
