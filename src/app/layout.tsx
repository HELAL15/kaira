import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import AppProvider from '@/providers/AppProvider';
import { Analytics } from '@vercel/analytics/next';

import 'aos/dist/aos.css';

export const metadata: Metadata = {
    title: 'Kaira - home',
    description: 'Kaira Fashion-Store Ecommerce Website'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang={'en'} dir={'ltr'}>
            <head>
                <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-S8XQ409H2C' />
                <Script
                    id='google-analytics'
                    strategy='afterInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-S8XQ409H2C');
                        `
                    }}
                />
            </head>
            <body className={`bg-background !text-foreground relative overflow-x-clip antialiased`}>
                <AppProvider>
                    {children}
                    <Analytics />
                </AppProvider>
            </body>
        </html>
    );
};

export default Layout;
