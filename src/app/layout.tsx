import type { ReactNode } from 'react';

import type { Metadata } from 'next';

// import { Jost, Marcellus } from 'next/font/google';

import AppProvider from '@/providers/AppProvider';
import { Analytics } from '@vercel/analytics/next';

import 'aos/dist/aos.css';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
    title: 'Kaira - home',
    description: 'Kaira Fashion-Store Ecommerce Website'
};

// const jost = Jost({
//     subsets: ['latin'],
//     variable: '--font-jost',
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//     display: 'swap'
// });

// const marcellus = Marcellus({
//     weight: '400',
//     subsets: ['latin'],
//     variable: '--font-marcellus'
// });

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
    const locale = await getLocale();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html suppressHydrationWarning lang={locale} dir={dir}>
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
