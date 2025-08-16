'use client';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SectionHeading = ({ title = 'Section Title' }: { title?: string }) => {
    const router = useRouter();

    const backforward = () => {
        router.back();
    };

    return (
        <>
            <section
                data-aos='zoom-out'
                className='aos-init open-up bg-background-secondary relative grid h-[100px] place-items-center p-0 md:h-[120px] lg:h-[150px] xl:h-[180px]'>
                {/* <Image
                        fill
                        priority
                        loading='eager'
                        className='absolute inset-0 z-0 object-cover'
                        src={'/images/hero2.jpg'}
                        alt='section heading'
                    /> */}
                {/* <div className='absolute inset-0 bg-black/50'></div> */}
                <div
                    data-aos='fade-down'
                    className='text-foreground aos-init relative z-10 container flex items-center justify-center gap-4'>
                    {/* <Button onClick={backforward} variant={'ghost'} size={'sm'} className='hover:bg-transparent'>
                            <i>
                                <ChevronLeft className='!size-[40px]' />
                            </i>
                        </Button> */}
                    <Link
                        href={'/'}
                        className='font-marcellus text-foreground block text-center text-2xl font-light uppercase'>
                        home
                    </Link>
                    <span className='font-marcellus text-foreground text-center text-2xl uppercase'>/</span>
                    <h1 className='font-marcellus text-foreground text-center text-2xl font-semibold uppercase'>
                        {title}
                    </h1>
                </div>
            </section>
        </>
    );
};

export default SectionHeading;
