/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = nextConfig
