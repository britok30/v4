export default async function sitemap() {
  const baseUrl = "https://www.kelvinbrito.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
