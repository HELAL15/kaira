import React, { ReactNode } from 'react';

import { cookies } from 'next/headers';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';

import ReactQueryProvider from './ReactQueryProcider';
import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const DshboardProvider = async ({ children }: { children: ReactNode }) => {
    const cookieStore = await cookies();
    const locale = cookieStore.get('locale')?.value || 'en';

    // const locale = 'en'; // or detect from params
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <>
            <ThemeProvider attribute='class' defaultTheme='light'>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ReactQueryProvider>
                        <header>header</header>
                        {children}
                        <footer>footer</footer>
                    </ReactQueryProvider>
                    <NextTopLoader color='#000' height={2} />
                    <Toaster
                        position='top-center'
                        style={{
                            padding: '0 !important'
                        }}
                    />
                </NextIntlClientProvider>
            </ThemeProvider>
        </>
    );
};

export default DshboardProvider;
