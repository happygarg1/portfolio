import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disable image optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
