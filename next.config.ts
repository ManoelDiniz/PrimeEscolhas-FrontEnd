/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
  productionBrowserSourceMaps: false,
  turbopack: {},

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },

  compress: true,
  poweredByHeader: false,
};

export default withPWA(nextConfig as any) as NextConfig;
