/** @type {import('next').NextConfig} */

const headers = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'X-Download-Options',
    value: 'noopen',
  },
  {
    key: 'X-Content-Security-Policy',
    value:
      "default-src 'none'; connect-src 'self' https:; font-src 'self' https: data:; img-src 'self' https: data:; script-src 'self' https:; style-src 'self' https: data:;",
  },
]

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },

  reactStrictMode: true,
  locales: ['en'],
  defaultLocale: 'en',
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
