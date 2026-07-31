import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "BeFreed: Personalized Audio Learning for Anything",
    description:
      "Grow daily with personalized audio lessons sourced from books, research papers, and domain experts.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "BeFreed: Personalized Audio Learning for Anything",
      description:
        "Personalized audio lessons in your language, voice, and learning depth.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1662,
          height: 946,
          alt: "BeFreed personalized audio learning",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "BeFreed: Personalized Audio Learning for Anything",
      description:
        "Personalized audio lessons in your language, voice, and learning depth.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
