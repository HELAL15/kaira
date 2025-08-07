import React, { ReactNode, lazy } from 'react';

// import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Header from '@/components/layout/Header';

import ReactQueryProvider from './ReactQueryProcider';
import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const Footer = lazy(() => import('@/components/layout/Footer'));

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* <ThemeProvider attribute='class'> */}
            <NextIntlClientProvider>
                <ReactQueryProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReactQueryProvider>
                <NextTopLoader color='oklch(55.4% .046 251.412)' height={2} />
                <Toaster position='top-center' />
            </NextIntlClientProvider>
            {/* </ThemeProvider> */}
        </>
    );
};

export default AppProvider;
