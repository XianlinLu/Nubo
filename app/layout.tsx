import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Nubo — 圆形磁吸学习支架",
    description: "Nubo 通过圆形磁吸手机支架，把硬件交互与 AI 音频微学习自然连接起来。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Nubo — 吸住手机，也吸住灵感",
      description: "圆形磁吸硬件与 AI 音频学习体验。",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1662, height: 946, alt: "Nubo magnetic AI learning stand" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nubo — 吸住手机，也吸住灵感",
      description: "圆形磁吸硬件与 AI 音频学习体验。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
