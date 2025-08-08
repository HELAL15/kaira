import React from 'react';

import Image from 'next/image';

import AnimateAOS from './AnimateAOS';

const SectionHeading = ({ title = 'Section Title' }: { title?: string }) => {
    return (
        <>
            <AnimateAOS>
                <section
                    data-aos='zoom-out'
                    className='aos-init open-up relative grid h-[180px] place-items-center p-0 md:h-[200px] lg:h-[250px] xl:h-[280px]'>
                    <Image
                        fill
                        priority
                        loading='eager'
                        className='absolute inset-0 z-0 object-cover'
                        src={'/images/hero2.jpg'}
                        alt='section heading'
                    />
                    <div className='absolute inset-0 bg-black/50'></div>
                    <div className='relative z-10 container text-white'>
                        <h1
                            className='aos-init text-center text-3xl text-white uppercase md:text-5xl lg:text-6xl'
                            data-aos='fade-down'>
                            {title}
                        </h1>
                    </div>
                </section>
            </AnimateAOS>
        </>
    );
};

export default SectionHeading;
