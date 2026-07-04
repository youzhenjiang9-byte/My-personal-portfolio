import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "L2B. — Creative Portfolio",
  description:
    "AI creative portfolio exploring design, motion, visual systems and storytelling.",
  openGraph: {
    title: "L2B. — Creative Portfolio",
    description:
      "AI creative portfolio exploring design, motion, visual systems and storytelling.",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "L2B Creative Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={geist.className}>{children}</body>
    </html>
  );
}