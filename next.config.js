/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['d3ky03j1n6ly73.cloudfront.net'],
  },
}

module.exports = nextConfig
