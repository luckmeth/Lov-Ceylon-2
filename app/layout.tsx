import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Italiana,
  Julius_Sans_One,
  Raleway,
} from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
import { SITE } from "@/lib/site";
import {
  jsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const label = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-label",
});

const display = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const body = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Lov'Ceylon Photography | Wedding & Portrait Photography Sri Lanka",
    template: "%s | Lov'Ceylon Photography",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.legalName,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Photography",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE.url,
    siteName: SITE.legalName,
    title:
      "Lov'Ceylon Photography | Wedding & Portrait Photography Sri Lanka",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lov'Ceylon Photography | Wedding & Portrait Photography Sri Lanka",
    description: SITE.description,
  },
  icons: {
    icon: [{ url: "/icon", sizes: "48x48", type: "image/png" }],
    shortcut: "/icon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "MHU5um-ktE5lzvURNX1op_56jG9SBIi8trOTT-S9N9M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${label.variable} ${display.variable} ${serif.variable} ${body.variable}`}
    >
      <body>
        <script {...jsonLdScript(organizationJsonLd)} />
        <script {...jsonLdScript(websiteJsonLd)} />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
