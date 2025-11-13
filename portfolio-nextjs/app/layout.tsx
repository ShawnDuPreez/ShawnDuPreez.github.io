import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CursorEffect from "./components/CursorEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shawndupreez.github.io'),
  title: "Shawn du Preez | Full-Stack Developer",
  description: "Building ideas that move — from cloud to client.",
  keywords: ["Full-Stack Developer", "Mobile Engineer", "Cloud Architect", "React Native", "Flutter", "Azure", "Kotlin", "ASP.NET", "TailwindCSS"],
  authors: [{ name: "Shawn du Preez" }],
  openGraph: {
    title: "Shawn du Preez | Full-Stack Developer",
    description: "Building ideas that move — from cloud to client.",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Shawn du Preez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawn du Preez | Full-Stack Developer",
    description: "Building ideas that move — from cloud to client.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SmoothScroll>
          <CursorEffect />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
