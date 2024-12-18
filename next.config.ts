import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.env.NEXT_PRIVATE_LOCAL_WEBPACK ? undefined : process.cwd(),
  },
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
}

export default nextConfig
