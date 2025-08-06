'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
    const url = '/images/hero.jpg';

    return (
        <>
            <Carousel
                className='relative w-full'
                plugins={[
                    Autoplay({
                        delay: 4000
                    })
                ]}
                opts={{
                    align: 'start',
                    loop: true
                }}>
                <CarouselContent className='lg:h-[calc(100vh_-77px)]'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index} className='size-full'>
                            <div
                                style={{ backgroundImage: `url(${url})` }}
                                className={`container flex size-full w-full items-center bg-cover bg-[0%_28%] bg-no-repeat max-lg:py-12`}>
                                <div className='w-full text-white'>
                                    <h1 className='flex flex-wrap items-center gap-4 text-[45px] md:text-[60px] lg:text-[90px] xl:text-[130px]'>
                                        cripcrop{' '}
                                        <span
                                            style={{
                                                WebkitTextStroke: '2px white'
                                            }}
                                            className='font-bold text-transparent'>
                                            style
                                        </span>
                                    </h1>
                                    <div className='space-y-6'>
                                        <p className='text-background-secondary max-w-[700px] md:text-lg lg:text-xl'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta
                                            veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!
                                        </p>
                                        <Link
                                            href={'/shop'}
                                            className='bg-background text-foreground hover:bg-foreground hover:text-background block w-fit px-10 py-4 font-bold duration-300'>
                                            shop now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className='border-foreground hover:bg-foreground text-foreground absolute inset-y-1/2 left-4 z-10 size-14 bg-transparent hover:text-white max-lg:hidden' /> */}
                {/* <CarouselNext className='border-foreground hover:bg-foreground text-foreground absolute inset-y-1/2 right-4 z-10 size-14 bg-transparent hover:text-white max-lg:hidden' /> */}
            </Carousel>
        </>
    );
};

export default Hero;
