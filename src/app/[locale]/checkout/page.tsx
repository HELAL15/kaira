import React from 'react';

import { Metadata } from 'next';

import CheckoutForm from '@/components/checkout/CheckoutForm';
import SectionHeading from '@/components/common/SectionHeading';

export const metadata: Metadata = {
    title: 'checkout - kaira'
};

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='checkout' />
                <section>
                    <div className='container py-8'>
                        <CheckoutForm />
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
