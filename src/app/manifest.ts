import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Duoph Technologies",
    short_name: "Duoph",
    description:
      "Software, websites, branding, and digital growth systems that help businesses scale.",
    start_url: "/",
    display: "standalone",
    background_color: "#050f0b",
    theme_color: "#18704E",
    lang: "en",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "706x244",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
