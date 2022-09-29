/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS && "/www.start.co.jp",
  trailingSlash: true,
}

module.exports = nextConfig