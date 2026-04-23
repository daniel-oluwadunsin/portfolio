import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { profile } from "./data/portfolio";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const siteUrl = resolvedSiteUrl.startsWith("http")
  ? resolvedSiteUrl
  : `https://${resolvedSiteUrl}`;

const canonicalSiteUrl = siteUrl.replace(/\/+$/, "");
const ogImage = "/android-chrome-512x512.png";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalSiteUrl),
  title: {
    default: "Adejare Daniel | Software Engineer",
    template: "%s | Adejare Daniel",
  },
  description:
    "Senior software engineer portfolio of Adejare Daniel, shipping reliable frontend, backend, and mobile products across fintech, edtech, logistics, and creator platforms.",
  applicationName: "Adejare Daniel Portfolio",
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  keywords: [
    "Adejare Daniel",
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Flutter",
    "Lagos Nigeria",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalSiteUrl,
    title: "Adejare Daniel | Software Engineer",
    description:
      "I build software you can rely on. 4+ years delivering production systems across frontend, backend, and mobile.",
    siteName: "Adejare Daniel Portfolio",
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: "Adejare Daniel portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@DannyWrld12",
    title: "Adejare Daniel | Software Engineer",
    description:
      "Senior software engineer building reliable products across web, backend, and mobile.",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
