'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useLocale } from 'next-intl';
import type { FieldValues } from 'react-hook-form';

const ProductCarousel = ({ data }: FieldValues) => {
    const [current, setCurrent] = useState(0);
    const [api, setApi] = useState<CarouselApi | null>(null);

    const slides = data?.data?.color_images || [];

    const locale = useLocale();

    return (
        <>
            <div className='space-y-4'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-full mt-4 flex flex-col gap-2 max-md:hidden md:col-span-3'>
                        {slides?.slice(0, 4)?.map((slide: string, index: number) => (
                            <button
                                key={index}
                                onClick={() => {
                                    api?.scrollTo(index);
                                    setCurrent(index);
                                }}
                                className={`hover:border-gray h-[120px] w-full border transition-colors duration-300 ${
                                    current === index ? 'border-foreground' : 'border-grey'
                                }`}>
                                <Image
                                    priority
                                    width={800}
                                    height={600}
                                    draggable={false}
                                    sizes='(max-width: 768px) 100vw, 50vw'
                                    src={slide}
                                    alt={data?.data?.title}
                                    className='col-span-10 aspect-square h-full max-h-[500px] w-full flex-grow object-contain'
                                />
                            </button>
                        ))}
                    </div>
                    <div className='col-span-full md:col-span-9'>
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                                direction: locale === 'ar' ? 'rtl' : 'ltr'
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3500
                                })
                            ]}
                            setApi={(carouselApi: CarouselApi) => {
                                if (!carouselApi) return;
                                setApi(carouselApi);
                                carouselApi.on('select', () => {
                                    setCurrent(carouselApi.selectedScrollSnap());
                                });
                            }}>
                            <CarouselContent>
                                {slides?.slice(0, 4)?.map((slide: string, index: number) => (
                                    <CarouselItem key={index}>
                                        <Image
                                            priority
                                            width={800}
                                            height={600}
                                            draggable={false}
                                            sizes='(max-width: 768px) 100vw, 50vw'
                                            src={slide}
                                            alt={data?.data?.title}
                                            className='col-span-10 aspect-square h-full max-h-[550px] w-full flex-grow object-contain'
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
                {/* Dots */}
                <div className='mt-4 flex items-center justify-center gap-2'>
                    {slides?.slice(0, 4)?.map((_: FieldValues, index: number) => (
                        <button
                            key={index}
                            onClick={() => {
                                api?.scrollTo(index);
                                setCurrent(index);
                            }}
                            className={`h-3 w-3 rounded-full transition-colors ${
                                current === index ? 'bg-foreground' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductCarousel;
