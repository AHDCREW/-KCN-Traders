/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;
