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
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
