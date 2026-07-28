import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext's local image optimization worker does not expose its asset
  // binding reliably on Windows. Serve these supplied project images
  // directly instead of routing them through /_vinext/image.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
