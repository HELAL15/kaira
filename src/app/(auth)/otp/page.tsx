import React from 'react';

import Link from 'next/link';

import SectionHeading from '@/components/common/SectionHeading';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='OTP Verification' />
                <section>
                    <div className='container'>
                        <Link href='/reset-password' className='btn btn-primary'>
                            Go to reset password
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
