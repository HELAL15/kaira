import React from 'react';

import ProductCard from '../ui/ProductCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useLocale } from 'next-intl';
import type { FieldValues } from 'react-hook-form';

const SwiperContainer = ({ items = Array.from({ length: 10 }) }: { items?: FieldValues[] }) => {
    const locale = useLocale();

    return (
        <>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    direction: locale === 'ar' ? 'rtl' : 'ltr'
                }}
                className='md:mx-auto md:max-w-[85vw]'>
                <CarouselContent className='-ml-1 flex-shrink-0 flex-grow-0'>
                    {items.map((product) => (
                        <CarouselItem key={product?.id} className='basis-1/2 pl-1 lg:basis-1/3 xl:basis-1/4'>
                            <div className='p-1'>
                                <ProductCard product={product} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='max-md:hidden' />
                <CarouselNext className='max-md:hidden' />
            </Carousel>
        </>
    );
};

export default SwiperContainer;
