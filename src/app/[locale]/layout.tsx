import type { Metadata } from 'next';
import { Jost, Marcellus } from 'next/font/google';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';

import Providers from './Providers';
import 'aos/dist/aos.css';
import { hasLocale } from 'next-intl';

export const metadata: Metadata = {
    title: 'Kaira - home',
    description: 'Kaira Fashion-Store Ecommerce Website'
};

// Generate static params for each locale
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

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
}: Readonly<{
    children: React.ReactNode;
    readonly params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    // Check if the locale is valid
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html suppressHydrationWarning lang={locale} dir={dir} data-scroll-behavior='smooth'>
            <body
                className={`${jost.variable} ${marcellus.variable} bg-background text-foreground! relative overflow-x-clip antialiased transition-all duration-300`}>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}

// export default Layout;
