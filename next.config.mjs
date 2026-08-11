/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vener2626.github.io",
      },
    ],
  },
};

export default nextConfig;
