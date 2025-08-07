// 'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
    const url = '/images/hero4.jpg';

    const data = [
        {
            id: 1,
            title: 'cripcrop style',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!',
            img: '/images/hero.jpg'
        },
        {
            id: 2,
            title: 'modern style',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!',
            img: '/images/hero2.jpg'
        },
        {
            id: 3,
            title: 'cripcrop style',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!',
            img: '/images/hero3.jpg'
        },
        {
            id: 4,
            title: 'modern style',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!',
            img: '/images/hero4.jpg'
        }
    ];

    return (
        <>
            <Carousel
                className='relative w-full'
                // plugins={[
                //     Autoplay({
                //         delay: 4000
                //     })
                // ]}
                opts={{
                    align: 'start',
                    loop: true
                }}>
                <CarouselContent className='lg:h-[calc(100vh_-77px)]'>
                    {data.map((item) => (
                        <CarouselItem key={item.id} className='relative size-full'>
                            <Image
                                src={item.img as string}
                                alt='Hero'
                                // width={0}
                                // height={0}
                                fill
                                sizes='100vw'
                                priority
                                className='absolute inset-0 z-0 size-full object-cover object-center'
                            />
                            <div
                                // style={{ backgroundImage: `url(${url})` }}
                                className={`t relative z-10 container flex size-full w-full items-center max-lg:py-12`}>
                                <div className='w-full text-white'>
                                    <h1 className='font-marcellus flex flex-wrap items-center gap-3 text-[35px] md:text-[50px] lg:text-[80px] xl:text-[90px]'>
                                        {/* cripcrop{' '}
                                        <span
                                            style={{
                                                WebkitTextStroke: '1px white'
                                            }}
                                            className='font-bold text-transparent'>
                                            style
                                        </span> */}
                                        {item.title.split(' ').map((word, index) => (
                                            <span
                                                key={index}
                                                className={`font-marcellus uppercase ${
                                                    index === 0
                                                        ? 'text-background-secondary'
                                                        : 'font-bold text-transparent'
                                                }`}
                                                style={index === 0 ? {} : { WebkitTextStroke: '1px white' }}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h1>
                                    <div className='space-y-6'>
                                        <p className='text-background-secondary max-w-[700px] md:text-lg'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta
                                            veritatis molestias nisi, sunt earum beatae suscipit? A, accusamus quam!
                                        </p>
                                        <Link aria-label='shop now' href={'/shop'} className='block w-fit'>
                                            <Button size={'xl'}>shop now</Button>
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
