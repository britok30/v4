import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.kelvinbrito.io",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
