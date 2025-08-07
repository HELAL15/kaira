import React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

const AboutSection = ({
    order = 2,
    img = '',
    title = '',
    desc = ''
}: {
    img?: string;
    title?: string;
    desc?: string;
    order?: number;
}) => {
    const orders: {
        [key: number]: {
            img: string;
            title: string;
        };
    } = {
        1: {
            img: '!order-1',
            title: '!order-2'
        },
        2: {
            img: '!order-2',
            title: '!order-1'
        }
    };

    return (
        <>
            <section>
                <div className='container'>
                    <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
                        <div
                            data-aos='fade-in'
                            className={cn('aos-init open-up w-full', order === 1 ? 'order-1' : 'order-2')}>
                            <Image
                                src={img as string}
                                alt='About Us'
                                width={500}
                                height={500}
                                className='h-[200px] w-full object-cover md:h-[350px] lg:h-[400px] xl:h-[500px]'
                            />
                        </div>

                        <div
                            data-aos='fade-in'
                            className={cn('aos-init space-y-4 lg:px-6 xl:px-8', order === 1 ? 'order-2' : 'order-1')}>
                            <h3 className='font-marcellus text-foreground text-2xl uppercase md:text-4xl lg:text-5xl xl:text-6xl'>
                                {title}
                            </h3>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
