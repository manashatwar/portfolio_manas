/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   ppr: true,
  // },
  transpilePackages: [
    "@reown/appkit",
    "@reown/appkit-adapter-wagmi",
    "@reown/appkit-utils",
    "@reown/appkit-scaffold-ui",
    "@coinbase/cdp-sdk",
    "@base-org/account"
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.corporatefinanceinstitute.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.transparenttextures.com",
        pathname: "/**",
      }
    ],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    
    // Suppress warnings for optional wallet connector dependencies
    config.ignoreWarnings = [
      { module: /@wagmi\/connectors/ },
      { module: /@coinbase\/wallet-sdk/ },
      { module: /@metamask\/sdk/ },
      { module: /@gemini-wallet\/core/ },
      { module: /porto/ },
      { module: /@walletconnect\/ethereum-provider/ },
    ]
    
    return config
  },
}

export default nextConfig
