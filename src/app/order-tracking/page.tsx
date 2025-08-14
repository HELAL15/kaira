import React from 'react';

import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import OrderTrackingForm from '@/components/order/OrderTrackingForm';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='order tracking' />
                <section>
                    <div className='container py-8'>
                        <div className='mx-auto max-w-[600px] space-y-6'>
                            <div className='space-y-2'>
                                <h2 className='xl:5xl text-xl uppercase md:text-2xl lg:text-4xl'>track your order</h2>
                                <p>
                                    Please enter your Order ID and press the “Track” button. This was given to you on
                                    your receipt and in the confirmation email you should have received.
                                </p>
                            </div>
                            <OrderTrackingForm />
                        </div>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
