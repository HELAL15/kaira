'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AnimateAOS from '@/components/common/AnimateAOS';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import { useLocale } from 'next-intl';

const Cats = () => {
    // const locale = useLocale();

    const data = [
        {
            id: 1,
            title: 'for men',
            img: '/images/cat-item1.jpg'
        },
        {
            id: 2,
            title: 'for women',
            img: '/images/cat-item2.jpg'
        },
        {
            id: 3,
            title: 'accessories',
            img: '/images/cat-item3.jpg'
        },
        {
            id: 4,
            title: 'for men',
            img: '/images/cat-item1.jpg'
        },
        {
            id: 5,
            title: 'for women',
            img: '/images/cat-item2.jpg'
        },
        {
            id: 6,
            title: 'accessories',
            img: '/images/cat-item3.jpg'
        }
    ];

    return (
        <>
            <AnimateAOS>
                <section className='bg-background p-0 py-8'>
                    <div className='open-up aos-init' data-aos='zoom-in'>
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true
                                // direction: locale === 'ar' ? 'rtl' : 'ltr'
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000
                                })
                            ]}
                            className='flex w-full items-center gap-4'>
                            <CarouselContent className='flex-shrink-0 flex-grow-0'>
                                {data.map((cat, index) => (
                                    <CarouselItem key={index} className='pl-4 md:basis-1/2 lg:basis-1/3'>
                                        <Card
                                            key={index}
                                            className='cursor-pointer border-0 bg-transparent p-0 shadow-none'>
                                            <CardContent className='group relative overflow-hidden p-0 duration-300 hover:scale-[.98]'>
                                                <Image
                                                    src={cat?.img || ''}
                                                    alt={cat.title}
                                                    width={0}
                                                    height={0}
                                                    sizes='100'
                                                    className='h-[400px] w-full object-cover duration-300 group-hover:scale-110 md:h-[450px] lg:h-[500px] xl:h-[550px]'
                                                />
                                                <div className='absolute bottom-0 flex h-full w-full flex-col justify-end space-y-2 bg-gradient-to-t from-black via-black/30 to-transparent px-4 py-6 text-start text-white'>
                                                    <h3 className='text-lg text-white md:text-xl xl:text-2xl'>
                                                        {cat.title}
                                                    </h3>
                                                    <Link href={'/shop'} className='block text-white underline'>
                                                        shop now
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                        {/* {data.map((cat, index) => (
                            <Card key={index} className='aos-init border-0 bg-transparent p-0 shadow-none'>
                                <CardContent className='group relative overflow-hidden p-0'>
                                    <Image
                                        src={cat?.img || ''}
                                        alt={cat.title}
                                        width={0}
                                        height={0}
                                        sizes='100'
                                        className='h-[400px] w-full object-cover duration-300 group-hover:scale-110 md:h-[450px] lg:h-[550px] xl:h-[600px]'
                                    />
                                    <div className='absolute bottom-0 flex h-full w-full flex-col justify-end space-y-2 bg-gradient-to-t from-black via-black/30 to-transparent px-4 py-6 text-start text-white'>
                                        <h3 className='text-lg md:text-xl xl:text-2xl'>{cat.title}</h3>
                                        <Link href={'/shop'} className='block text-white underline'>
                                            shop now
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))} */}
                    </div>
                </section>
            </AnimateAOS>
        </>
    );
};

export default Cats;
