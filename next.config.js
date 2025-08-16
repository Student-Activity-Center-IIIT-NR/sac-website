/** @type {import('next').NextConfig} */

const repo = 'sac-website'; // ← replace with your repo name

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
};

module.exports = nextConfig;
