import type { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    experimental: {
        authInterrupts: true,
        scrollRestoration: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost'
            },
            {
                protocol: 'https',
                hostname: 'api.jaar.cloud'
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
