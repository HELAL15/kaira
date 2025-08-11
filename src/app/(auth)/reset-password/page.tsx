import React from 'react';

import Link from 'next/link';

import SectionHeading from '@/components/common/SectionHeading';

import ResetPasswordContainer from './ResetPasswordContainer';
import ResetPasswordForm from './ResetPasswordForm';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='Reset Password' />
                <section>
                    <div className='container grid place-items-center py-8'>
                        <ResetPasswordContainer />
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
