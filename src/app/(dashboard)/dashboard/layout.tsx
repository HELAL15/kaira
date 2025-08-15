import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Jost, Marcellus } from 'next/font/google';
import { cookies } from 'next/headers';

import DashboardProvider from '@/providers/DashboardProvider';
import { Analytics } from '@vercel/analytics/next';

import 'aos/dist/aos.css';

export const metadata: Metadata = {
    title: 'Kaira - home',
    description: 'Kaira Fashion-Store Ecommerce Website'
};

const jost = Jost({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-jost'
});

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-marcellus'
});

const DashboardLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
    const cookieStore = await cookies();
    const locale = (await cookieStore.get('locale')?.value) || 'en';
    const dir = (await locale) === 'ar' ? 'rtl' : 'ltr';

    return (
        <html suppressHydrationWarning lang={locale} dir={dir}>
            <body
                className={`${jost.variable} ${marcellus.variable} bg-background !text-foreground relative overflow-x-clip antialiased transition-all duration-300`}>
                <DashboardProvider>
                    {children}
                    <Analytics />
                </DashboardProvider>
            </body>
        </html>
    );
};

export default DashboardLayout;
