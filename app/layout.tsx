import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Italiana,
  Julius_Sans_One,
  Raleway,
} from "next/font/google";
import { AppProviders } from "@/components/AppProviders";
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
  title: "Lov'Ceylon | Photography",
  description:
    "Timeless wedding and portrait photography in Colombo, Sri Lanka — Lov'Ceylon.",
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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
