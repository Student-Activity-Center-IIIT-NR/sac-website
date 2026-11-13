const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "",
  assetPrefix: "",
  output: "export",
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
