import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import AnimateAOS from '@/components/common/AnimateAOS';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import ReactQueryProvider from './ReactQueryProcider';
import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ThemeProvider attribute='class'>
                <NextIntlClientProvider>
                    <ReactQueryProvider>
                        <AnimateAOS>
                            <Header />
                            {children}
                            <Footer />
                        </AnimateAOS>
                    </ReactQueryProvider>
                    <NextTopLoader color='oklch(55.4% .046 251.412)' height={2} />
                    <Toaster position='top-center' />
                </NextIntlClientProvider>
            </ThemeProvider>
        </>
    );
};

export default AppProvider;
