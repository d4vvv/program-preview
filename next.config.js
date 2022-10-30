/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['new.static.tv.nu'],
  },
}

module.exports = nextConfig
