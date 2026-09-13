import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/litter", destination: "/cat-litter", permanent: true },
      { source: "/toys", destination: "/cat-toys", permanent: true },
    ];
  },
};

export default nextConfig;
