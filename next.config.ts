import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  instrumentationHook: true,
}

export default nextConfig
