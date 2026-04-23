import type { MetadataRoute } from "next";
import { cvItems } from "./data/portfolio";

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const siteUrl = (
  resolvedSiteUrl.startsWith("http")
    ? resolvedSiteUrl
    : `https://${resolvedSiteUrl}`
).replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const cvFiles: MetadataRoute.Sitemap = cvItems.map((cv) => ({
    url: `${siteUrl}${cv.file}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...cvFiles];
}
