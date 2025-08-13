import { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';



const nextConfig: NextConfig = {
  images: {
    domains: ['localhost','api.jaar.cloud'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript checks during builds
  },

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
// export default nextConfig;