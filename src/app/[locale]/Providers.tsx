import { ReactNode, lazy } from 'react';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import AOSProvider from '../../providers/AosProvider';
import ReactQueryProvider from '../../providers/ReactQueryProcider';
import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        // <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange={false}>
        <NextIntlClientProvider>
            {/* <ReactQueryProvider> */}
            <Header />
            {children}
            <Footer />
            <AOSProvider />
            {/* </ReactQueryProvider> */}
            <NextTopLoader color='#000' height={2} />
            <Toaster
                position='top-center'
                style={{
                    padding: '0 !important'
                }}
            />
        </NextIntlClientProvider>
        // </ThemeProvider>
    );
};

export default Providers;
