import { Metadata } from 'next';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Cats from './home/Cats';
import Hero from './home/Hero';
import Proccess from './home/Proccess';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */

export const metadata: Metadata = {
    title: 'home - Kaira'
};

const Page = () => {
    return (
        <>
            <main className='bg-background-secondary'>
                <Hero />
                <Proccess />
                <Cats />
                <section>
                    <div className='container'>
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true
                            }}
                            className='w-full'>
                            <CarouselContent className='-ml-1'>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/3'>
                                        <div className='p-1'>
                                            <Card>
                                                <CardContent className='flex aspect-square items-center justify-center p-6'>
                                                    <span className='text-2xl font-semibold'>{index + 1}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious
                                size='icon'
                                className='shadow-0 carousel-icon cursor-pointer border-none bg-transparent shadow-none max-lg:hidden'
                            />
                            <CarouselNext
                                size='icon'
                                className='shadow-0 carousel-icon cursor-pointer border-none bg-transparent shadow-none max-lg:hidden'
                            />
                        </Carousel>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;
