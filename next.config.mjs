/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    scrollRestoration: false,
  },
  async headers() {
    return [
      {
        // Scroll-animation frames are immutable — cache hard at browser + CDN.
        source: "/frames/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Hero/background videos are immutable — cache hard at browser + CDN.
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
