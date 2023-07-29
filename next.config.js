/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents: true
  },
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: "randomuser.me"
      }
    ]
  }
}

module.exports = nextConfig
