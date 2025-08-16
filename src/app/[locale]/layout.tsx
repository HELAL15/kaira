import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Jost, Marcellus } from 'next/font/google';

import { routing } from '@/i18n/routing';
import AppProvider from '@/providers/AppProvider';
import { Analytics } from '@vercel/analytics/next';

import 'aos/dist/aos.css';
import { setRequestLocale } from 'next-intl/server';

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

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

const Layout = async ({ children, params }: Readonly<{ children: ReactNode; params: { locale: 'ar' | 'en' } }>) => {
    // const cookieStore = await cookies();
    // const locale = (await cookieStore.get('locale')?.value) || 'en';
    // const dir = (await locale) === 'ar' ? 'rtl' : 'ltr';

    const { locale } = await params;

    // if (!hasLocale(routing.locales, locale)) {
    //     notFound();
    // }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html suppressHydrationWarning lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body
                className={`${jost.variable} ${marcellus.variable} bg-background !text-foreground relative overflow-x-clip antialiased transition-all duration-300`}>
                <AppProvider>
                    {children}
                    <Analytics />
                </AppProvider>
            </body>
        </html>
    );
};

export default Layout;
