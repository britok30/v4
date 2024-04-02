import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleScripts from "./components/GoogleScripts";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Kelvin Brito",
  description:
    "Front-end engineer. Crafting beautiful web experiences & thriving on the intersection of tech & art/design",
  metadataBase: new URL("https://www.kelvinbrito.io"),
  openGraph: {
    title: "Kelvin Brito",
    description:
      "Front-end engineer. Crafting beautiful web experiences & thriving on the intersection of tech & art/design",
    url: "https://www.kelvinbrito.io",
    siteName: "Kelvin Brito",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Brito",
    description:
      "Front-end engineer. Crafting beautiful web experiences & thriving on the intersection of tech & art/design",
    creator: "@britoszn",
    site: "@britoszn",
    images: ["/logo.png"],
  },
};

const gtWalsheim = localFont({
  src: [
    {
      path: "../app/fonts/GT-Walsheim-Light-Trial-BF651b7fc714941.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/GT-Walsheim-Regular-Trial-BF651b7fc71a47d.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/GT-Walsheim-Medium-Trial-BF651b7fc728fb3.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gtWalsheim.className} bg-[#1a1a1a] text-white`}>
        <GoogleScripts />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
