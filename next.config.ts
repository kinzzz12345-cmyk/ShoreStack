import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saffron-amber.vercel.app",
      },
      {
        protocol: "https",
        hostname: "dog-best-friend.vercel.app",
      },
    ],
  },
};

export default nextConfig;
