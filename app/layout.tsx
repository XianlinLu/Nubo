import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "LoreLume Pebble — Knowledge, in flow.",
    description: "Screen-free AI voice micro-learning with a tactile pebble controller and open-ear audio.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "LoreLume Pebble — Knowledge, in flow.",
      description: "Screen-free AI voice micro-learning with a tactile pebble controller and open-ear audio.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "LoreLume Pebble" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "LoreLume Pebble — Knowledge, in flow.",
      description: "Screen-free AI voice micro-learning with a tactile pebble controller and open-ear audio.",
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
