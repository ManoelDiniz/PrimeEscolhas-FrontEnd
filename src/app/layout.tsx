import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "../components/Analytics";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Escolhas - Ofertas e Reviews",
  description: "Descubra as melhores ofertas e reviews antes de comprar.",
  metadataBase: new URL("http://localhost:3000"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Prime Escolhas",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/flavicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`bg-white text-black ${geistSans.variable} ${geistMono.variable}`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
