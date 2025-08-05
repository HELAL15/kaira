import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import AppProvider from '@/providers/AppProvider';
import { Analytics } from '@vercel/analytics/next';

import 'aos/dist/aos.css';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
    title: 'Kaira - home',
    description: 'Kaira Fashion-Store Ecommerce Website'
};

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
    const locale = await getLocale();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html suppressHydrationWarning lang={locale} dir={dir}>
            <body className='bg-background !text-foreground relative overflow-x-clip antialiased'>
                <AppProvider>
                    {children}
                    <Analytics />
                </AppProvider>
            </body>
        </html>
    );
};

export default Layout;
