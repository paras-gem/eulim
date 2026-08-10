import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AppShell from "@/components/AppShell";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Exhibition 2025 | Eulim Science Club",
  description:
    "Science Exhibition 2025, presented by Eulim Science Club at CHRIST (Deemed to be University), Delhi NCR Campus. Where curiosity becomes impact.",
};

export const viewport: Viewport = {
  themeColor: "#0a1424",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {"try { var t = localStorage.getItem('eulim-theme'); document.documentElement.dataset.theme = (t === 'light' || t === 'dark') ? t : 'dark'; } catch (e) { document.documentElement.dataset.theme = 'dark'; }"}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
