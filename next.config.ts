import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: v1 is fully static/prerendered with no server actions,
  // and Cloudflare Pages serves it directly with no runtime adapter needed.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
