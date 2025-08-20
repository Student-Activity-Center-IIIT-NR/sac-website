/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  output: "export"
};

module.exports = nextConfig;
