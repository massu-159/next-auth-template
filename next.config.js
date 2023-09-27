/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['1h3.googleusercontent.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
