/** @type {import('next').NextConfig} */
import { resolve } from 'path'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'StephHoelSite' // <- nome exato do seu repositório

const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  output: 'export',
  
  // Caminhos para Project Pages (user.github.io/<repo>)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
  
  // Evita redirects no GH Pages
  trailingSlash: true,
  
  // Imagens estáticas (obrigatório p/ export)
  images: { unoptimized: true },
  
  reactStrictMode: true,

  turbopack: {},
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': resolve(__dirname, 'src'),
    }
    return config
  },
  // Expose base path at build time to client/server code
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
}

export default nextConfig