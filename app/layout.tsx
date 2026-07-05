import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tochuan.cn"),

  title: {
    default: "Tochuan.",
    template: "%s | Tochuan.",
  },

  description:
    "Creative Designer & AI Explorer. Portfolio showcasing branding, visual design, motion graphics, UI/UX and AI-generated creativity.",

  keywords: [
    "Tochuan",
    "Portfolio",
    "Creative Designer",
    "Visual Design",
    "Brand Design",
    "Motion Design",
    "UI Design",
    "AI Designer",
  ],

  authors: [
    {
      name: "Tochuan",
      url: "https://tochuan.cn",
    },
  ],

  creator: "Tochuan",

  openGraph: {
    title: "Tochuan.",
    description:
      "Creative Designer & AI Explorer. Portfolio showcasing branding, visual design, motion graphics, UI/UX and AI-generated creativity.",
    url: "https://tochuan.cn",
    siteName: "Tochuan.",
    locale: "zh_CN",
    type: "website",

    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Tochuan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tochuan.",
    description:
      "Creative Designer & AI Explorer.",
    images: ["/images/og.png"],
    creator: "@Tochuan",
  },
};