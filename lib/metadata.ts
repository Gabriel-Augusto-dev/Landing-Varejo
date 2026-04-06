import { Metadata } from "next";
import { content } from "@/config/content";

export function generateMetadata(): Metadata {
  const title = `${content.navbar.brand} | Mercado de Bairro com Produtos Frescos`;
  const description =
    content.hero.description ||
    "Mercado alimenticio com hortifruti, padaria, acougue, mercearia especial e pedidos pelo WhatsApp.";
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://landing-page-demo.vercel.app";
  const ogImage = process.env.NEXT_PUBLIC_OG_IMAGE || `${url}/og-image.jpg`;

  return {
    title,
    description,
    keywords: [
      content.navbar.brand,
      "mercado",
      "emporio",
      "hortifruti",
      "padaria",
      "acougue",
      "delivery local",
      "varejo alimenticio",
    ],
    authors: [{ name: content.navbar.brand }],
    creator: content.navbar.brand,
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: content.navbar.brand,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${content.navbar.brand} - ${title}`,
          type: "image/jpeg",
        },
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: `${content.navbar.brand}`,
          type: "image/jpeg",
        },
      ],
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@" + content.navbar.brand.toLowerCase().replace(/\s+/g, ""),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title,
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}
