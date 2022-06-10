/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
  rules: {
    // Other rules
    '@next/next/no-img-element': 'off',
  },
}

module.exports = nextConfig
