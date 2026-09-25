import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { MobileNav } from "@/components/MobileNav";
import { SideNav } from "@/components/SideNav";
import { site } from "@/site.config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <SideNav />
        <MobileNav />
        <main className="px-4 pb-16 pt-2 md:pl-56 md:pr-10 md:pt-10">{children}</main>
      </body>
    </html>
  );
}
