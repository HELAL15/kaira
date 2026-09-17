import { Metadata } from 'next';

import SectionHeading from '@/components/common/SectionHeading';

import LoginFormContainer from './LoginFormContainer';

export const metadata: Metadata = {
    title: 'login - KAIRA'
};

const Page = () => {
    return (
        <>
            <main>
                <SectionHeading title='login' />
                <section>
                    <div className='relative z-10 container grid place-items-center py-8'>
                        <LoginFormContainer />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;
