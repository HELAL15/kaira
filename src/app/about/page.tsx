import React, { lazy } from 'react';

import { Metadata } from 'next';

import AboutSection from '@/components/about/AboutSection';
import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';

const Story = lazy(() => import('../../components/home/Story'));
const Proccess = lazy(() => import('../../components/home/Proccess'));
const BlogSection = lazy(() => import('../../components/common/BlogSection'));

export const metadata: Metadata = {
    title: 'about - kaira'
};

const page = () => {
    return (
        <>
            <main className='overflow-hidden'>
                <SectionHeading title='about us' />

                <Proccess />

                <AboutSection
                    order={2}
                    img='/images/hero3.jpg'
                    title='The beginning of our journey'
                    desc=' The beginning of our journey vel tellus Turpis purus, gravida orci, fringilla a.
                                        Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac
                                        faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam
                                        ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis
                                        at magna imperdiet cursus ac faucibus sit libero.'
                />
                <AboutSection
                    order={1}
                    img='/images/hero4.jpg'
                    title='Who are we?'
                    desc=' We are nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor
                                        id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac
                                        faucibus sit libero. Dignissim lacus, turpis ut suspendisse vel tellus. Turpis
                                        purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
                                        pharetra at magna imperdiet cursus ac faucibus sit libero.'
                />
                <Story />
                <BlogSection />
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
