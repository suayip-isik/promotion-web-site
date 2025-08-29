import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // SSG ve SSR için gerekli ayarlar
  trailingSlash: true, // URL'lerin sonuna slash ekler
  poweredByHeader: false, // X-Powered-By header'ını kaldırır
  images: {
    formats: ["image/webp", "image/avif"], // Modern formatlar
    domains: ["example.com"], // External resim domain'leri
  },
  // Önbellekleme headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
