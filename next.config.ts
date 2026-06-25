import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/docs",
      destination: "/docs/introduction",
      permanent: true,
    },
  ],
};

export default nextConfig;
