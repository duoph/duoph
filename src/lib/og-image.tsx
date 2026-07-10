export function OgImageMarkup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(145deg, #050f0b 0%, #0a1f16 45%, #061410 100%)",
        padding: "64px 72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-40px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background: "rgba(24, 112, 78, 0.35)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "80px",
          width: "380px",
          height: "380px",
          borderRadius: "999px",
          background: "rgba(16, 185, 129, 0.12)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#E8A598",
              borderRadius: "2px",
              marginRight: "4px",
              marginTop: "2px",
            }}
          />
          <div
            style={{
              width: "48px",
              height: "52px",
              border: "8px solid #18704E",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "42px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#18704E",
            display: "flex",
          }}
        >
          DUOPH
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "920px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Technology That Moves</span>
          <span style={{ color: "#6EE7B7" }}>Businesses Forward.</span>
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.45,
            display: "flex",
            maxWidth: "780px",
          }}
        >
          Software, websites, branding & digital growth for SMEs and growing
          brands.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "28px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>40+ Projects</span>
          <span>·</span>
          <span>5 Countries</span>
          <span>·</span>
          <span>Free Consultation</span>
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "#6EE7B7",
            display: "flex",
          }}
        >
          www.duoph.in
        </div>
      </div>
    </div>
  );
}
