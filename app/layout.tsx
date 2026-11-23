import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { MobileNav } from "@/components/MobileNav";
import { SideNav } from "@/components/SideNav";
import { site } from "@/site.config";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const shareImage = {
  url: "/opengraph-image.gif",
  width: 413,
  height: 370,
  type: "image/gif",
  alt: "Spinning girl",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://photosite1.vercel.app"),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  icons: { icon: [{ url: "/icon.gif", type: "image/gif", sizes: "32x32" }] },
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: [shareImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ebGaramond.variable} h-full antialiased`}>
      <body className="min-h-full font-serif">
        <SideNav />
        <MobileNav />
        <main className="px-4 pb-16 pt-2 md:pb-10 md:pl-56 md:pr-10 md:pt-10">{children}</main>
      </body>
    </html>
  );
}
