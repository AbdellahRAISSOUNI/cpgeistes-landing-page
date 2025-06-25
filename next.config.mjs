/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.mongodb.net',
      },
    ],
  },
  // Configure dynamic routes
  experimental: {
    // Enable this if there are issues with MongoDB connections
    serverComponentsExternalPackages: ['mongoose']
  },
  // Set routes that use dynamic data to be dynamic
  output: 'standalone',
};

export default nextConfig; 