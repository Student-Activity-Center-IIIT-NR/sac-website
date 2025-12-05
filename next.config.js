/** @type {import('next').NextConfig} */

// FOR GITHUB PAGES (Current Setup):
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  output: "export"
};

// FOR VERCEL/NETLIFY (Better Performance with Image Optimization):
// Uncomment below and comment out the config above
/*
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
};
*/

module.exports = nextConfig;
