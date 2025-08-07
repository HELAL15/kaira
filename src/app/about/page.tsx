import React, { lazy } from 'react';

import { Metadata } from 'next';
import Image from 'next/image';

import AboutSection from '@/components/about/AboutSection';
import AnimateAOS from '@/components/common/AnimateAOS';
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
                <AnimateAOS>
                    <Proccess />
                    {/* <section>
                        <div className='container'>
                            <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
                                <Image
                                    src='/images/hero3.jpg'
                                    alt='About Us'
                                    width={500}
                                    height={500}
                                    className='h-[200px] w-full object-cover md:h-[350px] lg:h-[400px] xl:h-[500px]'
                                />
                                <div className='space-y-4 lg:px-6 xl:px-8'>
                                    <h3 className='font-marcellus text-foreground text-2xl uppercase md:text-4xl lg:text-5xl xl:text-6xl'>
                                        The beginning of our journey
                                    </h3>
                                    <p>
                                        The beginning of our journey vel tellus Turpis purus, gravida orci, fringilla a.
                                        Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac
                                        faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam
                                        ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis
                                        at magna imperdiet cursus ac faucibus sit libero.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='container'>
                            <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
                                <div className='space-y-4 lg:px-6 xl:px-8'>
                                    <h3 className='font-marcellus text-foreground text-2xl uppercase md:text-4xl lg:text-5xl xl:text-6xl'>
                                        Who are we?
                                    </h3>
                                    <p>
                                        We are nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor
                                        id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac
                                        faucibus sit libero. Dignissim lacus, turpis ut suspendisse vel tellus. Turpis
                                        purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
                                        pharetra at magna imperdiet cursus ac faucibus sit libero.
                                    </p>
                                </div>
                                <Image
                                    src='/images/hero4.jpg'
                                    alt='About Us'
                                    width={500}
                                    height={500}
                                    className='h-[200px] w-full object-cover md:h-[350px] lg:h-[400px] xl:h-[500px]'
                                />
                            </div>
                        </div>
                    </section> */}
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
                </AnimateAOS>
            </main>
        </>
    );
};

export default page;
