import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stops Next.js treating a parent folder as the project if it finds another lockfile there.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
