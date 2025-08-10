import { NextConfig } from 'next';


const nextConfig: NextConfig = {
  images: {
    domains: ['localhost:3000','api.jaar.cloud'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },

};

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);
export default nextConfig;