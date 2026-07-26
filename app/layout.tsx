import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const publicBasePath =
  process.env.GITHUB_PAGES === "true" ? "/science-civilization-atlas" : "";

const rootStyle = {
  "--microfilm-grain-image": `url("${publicBasePath}/microfilm-grain.webp")`,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: "科学、技术与文明",
    template: "%s | 科学、技术与文明",
  },
  description:
    "一份以时间轴为骨架，追踪知识、能力与治理关系的个人读书笔记。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#10171b" },
    { media: "(prefers-color-scheme: light)", color: "#e8e4da" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      style={rootStyle}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
