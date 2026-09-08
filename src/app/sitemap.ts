import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.duoph.in/careers",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.duoph.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
