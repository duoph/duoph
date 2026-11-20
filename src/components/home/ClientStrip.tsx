/* eslint-disable @next/next/no-img-element */
// One 2119×211 strip of client logos, positioned exactly as in Figma node 87:594.
// Rendered twice by the marquee for a seamless loop.

type Logo = {
  src: string;
  alt: string;
  left: number;
  top: number;
  w: number;
  h: number;
  fit?: "cover" | "fill";
  position?: string;
  /** For logos that Figma crops by over-sizing the image inside a clipped box. */
  inner?: React.CSSProperties;
};

const p = (f: string) => `/images/figma/clients/${f}`;

const logos: Logo[] = [
  { src: p("operx.png"), alt: "Oper-X", left: 0, top: 64, w: 121, h: 66, inner: { height: "122.04%", top: "-0.13%", width: "100%", left: 0 } },
  { src: p("productshare.svg"), alt: "ProductShare", left: 189, top: 70, w: 122.894, h: 57, fit: "fill" },
  { src: p("finsl.png"), alt: "Finsl", left: 367, top: 50, w: 75.585, h: 104 },
  { src: p("stjoseph.png"), alt: "St. Joseph School", left: 498, top: 51, w: 93, h: 91 },
  { src: p("rheinland.png"), alt: "Rheinland Consultancy", left: 650, top: 58, w: 165, h: 78 },
  { src: p("marhaba.png"), alt: "Marhaba", left: 877, top: 67, w: 189, h: 59 },
  { src: p("gadbuy.png"), alt: "Gadbuy", left: 1115, top: 0, w: 211, h: 211 },
  { src: p("mgarage.png"), alt: "M Garage", left: 1386, top: 54, w: 128, h: 85 },
  { src: p("travancore1.png"), alt: "Travancore Restaurant", left: 1512, top: 52, w: 276, h: 89.424 },
  { src: p("travancore2.png"), alt: "", left: 1512, top: 105.37, w: 275.484, h: 36.058, fit: "fill", position: "bottom" },
  { src: p("image2.png"), alt: "DealerStaq", left: 1776, top: 68, w: 203, h: 62.169 },
  { src: p("image2.png"), alt: "", left: 1776, top: 68, w: 203, h: 62.169 },
  { src: p("image3.png"), alt: "", left: 1797.57, top: 68, w: 96.425, h: 62.169, fit: "fill", position: "bottom" },
  { src: p("nadil.png"), alt: "Nadil", left: 2032, top: 76, w: 87, h: 52 },
];

export default function ClientStrip({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="dh-strip" aria-hidden={hidden || undefined} role={hidden ? undefined : "list"}>
      {logos.map((logo, i) => (
        <div
          key={i}
          className="dh-strip__logo"
          role={hidden || !logo.alt ? undefined : "listitem"}
          style={{ left: logo.left, top: logo.top, width: logo.w, height: logo.h }}
        >
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            loading="lazy"
            style={
              logo.inner
                ? { position: "absolute", maxWidth: "none", ...logo.inner }
                : { objectFit: logo.fit ?? "cover", objectPosition: logo.position }
            }
          />
        </div>
      ))}
    </div>
  );
}
