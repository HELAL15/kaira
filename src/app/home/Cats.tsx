import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AnimateAOS from '@/components/common/AnimateAOS';
import { Card, CardContent } from '@/components/ui/card';

const Cats = () => {
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
        }
    ];

    return (
        <>
            <AnimateAOS>
                <section className='bg-background p-0'>
                    <div className='open-up aos-init container py-8' data-aos='zoom-in'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
                            {data.map((cat, index) => (
                                <Card key={index} className='aos-init border-0 bg-transparent p-0 shadow-none'>
                                    <CardContent className='group relative overflow-hidden p-0'>
                                        <Image
                                            src={cat?.img || ''}
                                            alt={cat.title}
                                            width={0}
                                            height={0}
                                            sizes='100'
                                            className='h-[500px] w-full object-cover duration-300 group-hover:scale-110'
                                        />
                                        <div className='absolute bottom-0 flex h-full w-full flex-col justify-end space-y-2 bg-gradient-to-t from-black via-black/30 to-transparent px-4 py-6 text-start text-white'>
                                            <h3 className='text-lg md:text-xl xl:text-2xl'>{cat.title}</h3>
                                            <Link href={'/shop'} className='block text-white underline'>
                                                shop now
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimateAOS>
        </>
    );
};

export default Cats;
