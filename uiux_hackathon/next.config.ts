/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    domains: ['cdn.sanity.io'], 
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, 
  },
};

export default nextConfig;
