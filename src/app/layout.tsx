import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AppShell from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Exhibition 2025 | Eulim Science Club",
  description: "Science Exhibition 2025, presented by Eulim Science Club at CHRIST (Deemed to be University), Delhi NCR Campus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
        <Script id="theme-init" strategy="beforeInteractive">
          {"try { var savedTheme = localStorage.getItem('eulim-theme'); if (savedTheme === 'dark' || savedTheme === 'light') { document.documentElement.dataset.theme = savedTheme; } else { document.documentElement.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } } catch (e) {}"}
        </Script>
      </body>
    </html>
  );
}
