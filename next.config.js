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
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API,
    MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
    NEXT_BACKEND_API_URL: process.env.NEXT_BACKEND_API_URL,
    API_URL: process.env.API_URL,
    MAPBOX_STYLE: process.env.MAPBOX_STYLE,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
}

module.exports = nextConfig
