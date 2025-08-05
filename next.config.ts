import { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost:3000'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
