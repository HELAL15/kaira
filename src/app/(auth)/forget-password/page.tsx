import React from 'react';

import Link from 'next/link';

import SectionHeading from '@/components/common/SectionHeading';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='Forget Password' />
                <section>
                    <div className='container'>
                        <Link href='/otp' className='btn btn-primary'>
                            Go to OTP Verification
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
