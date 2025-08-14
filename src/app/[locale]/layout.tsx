import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Jost, Marcellus } from 'next/font/google';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import AppProvider from '@/providers/AppProvider';
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

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: { locale: 'ar' | 'en' };
}) {
    const { locale } = params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html suppressHydrationWarning lang={locale} dir={dir}>
            <body
                className={`${jost.variable} ${marcellus.variable} bg-background !text-foreground relative overflow-x-clip antialiased`}>
                <AppProvider locale={locale}>{children}</AppProvider>
                <Analytics />
            </body>
        </html>
    );
}
