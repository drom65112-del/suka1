import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.rozetka.com.ua",
      },
      {
        protocol: "https",
        hostname: "content1.rozetka.com.ua",
      },
      {
        protocol: "https",
        hostname: "content2.rozetka.com.ua",
      },
      {
        protocol: "https",
        hostname: "media.dyvys.info",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
