/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Use src directory for pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Optional base path / asset prefix for GitHub Pages or subpath deployments.
  // Set NEXT_PUBLIC_BASE_PATH=/RepoName when building for a subpath.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Provide an explicit (empty) turbopack config to avoid Turbopack/webpack conflict warnings
  turbopack: {},
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
}

module.exports = nextConfig