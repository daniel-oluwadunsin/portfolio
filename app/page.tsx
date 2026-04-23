import type { Metadata } from "next";
import PortfolioPage from "./components/PortfolioPage";
import { profile } from "./data/portfolio";

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

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Explore Adejare Daniel's portfolio: production-grade frontend, backend, and mobile systems with real-world impact.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Adejare Daniel Portfolio",
        description:
          "Senior software engineer portfolio focused on reliable frontend, backend, and mobile products.",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        jobTitle: profile.title,
        description: profile.blurb,
        email: profile.email,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        url: `${siteUrl}/`,
        sameAs: [profile.links.linkedin, profile.links.github, profile.links.x],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile-page`,
        url: `${siteUrl}/`,
        name: "Adejare Daniel | Software Engineer",
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
