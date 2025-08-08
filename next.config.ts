import { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost:3000'],
    formats: ['image/avif', 'image/webp']
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
    ];
  },
};

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);
export default nextConfig;