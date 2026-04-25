import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Inter — body text. Clean, geometric sans-serif.
 * JetBrains Mono — code/terminal elements across the site.
 */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Adil Jaffer Mohamed — Cybersecurity Engineer",
  description:
    "Portfolio of Adil Jaffer Mohamed. Cybersecurity engineer specializing in web exploitation, reverse engineering, and offensive security research.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "web exploitation",
    "reverse engineering",
    "CTF",
    "security research",
  ],
  openGraph: {
    title: "Adil Jaffer Mohamed — Cybersecurity Engineer",
    description:
      "Breaking systems to make them stronger. Web exploitation, reverse engineering, offensive security.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
