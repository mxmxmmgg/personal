import type { NextConfig } from 'next'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'components'],
  },
}

export default withBundleAnalyzer(nextConfig)
