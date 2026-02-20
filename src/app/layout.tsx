import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "../components/Analytics";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OrganizationSchema } from "../components/OrganizationSchema";
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
  metadataBase: new URL("https://afiliado.primeescolhas.com.br"),
  title: {
    default: "Prime Escolhas - Comparação de Produtos e Ofertas",
    template: "%s | Prime Escolhas",
  },
  description:
    "Compare produtos, encontre as melhores ofertas e leia análises detalhadas antes de comprar. Decisões inteligentes com Prime Escolhas.",
  keywords: [
    "comparação de produtos",
    "ofertas",
    "reviews",
    "análise de produtos",
    "melhores preços",
    "compras online",
    "Prime Escolhas",
  ],
  authors: [{ name: "Prime Escolhas" }],
  creator: "Prime Escolhas",
  publisher: "Prime Escolhas",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Prime Escolhas",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://afiliado.primeescolhas.com.br",
    siteName: "Prime Escolhas",
    title: "Prime Escolhas - Comparação de Produtos e Ofertas",
    description:
      "Compare produtos, encontre as melhores ofertas e leia análises detalhadas antes de comprar.",
    images: [
      {
        url: "/logo/logo-og.png",
        width: 1200,
        height: 630,
        alt: "Prime Escolhas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Escolhas - Comparação de Produtos e Ofertas",
    description:
      "Compare produtos, encontre as melhores ofertas e leia análises detalhadas antes de comprar.",
    images: ["/logo/logo-og.png"],
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Novos Produtos"
          href="https://afiliado.primeescolhas.com.br/feed.xml"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`bg-white text-black ${geistSans.variable} ${geistMono.variable}`}
      >
        <OrganizationSchema />
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
