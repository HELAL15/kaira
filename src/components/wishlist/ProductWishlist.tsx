import React from 'react';

import Image from 'next/image';

import { Button } from '../ui/Button';
import { X } from 'lucide-react';

const ProductWishlist = () => {
    return (
        <>
            <div className='grid grid-cols-12 items-center gap-4 py-6'>
                <div className='col-span-full flex items-center justify-between gap-4 lg:col-span-5'>
                    <div className='flex flex-wrap items-center gap-4'>
                        <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-gray-100'>
                            <Image
                                src='/images/cat-item1.jpg'
                                alt='Handmade Crop Sweater'
                                width={80}
                                height={80}
                                className='h-full w-full object-cover'
                            />
                        </div>
                        <h3 className='text-foreground font-semibold tracking-wide uppercase max-md:text-sm'>
                            HANDMADE CROP SWEATER
                        </h3>
                    </div>
                    {/* Remove Button visible only on mobile */}
                    <div className='lg:hidden'>
                        <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                            <X className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
                <div className='text-foreground col-span-3 text-center lg:col-span-2'>
                    <span className='font-medium'>$54.00</span>
                </div>
                {/* Quantity Controls */}
                <div className='col-span-5 flex items-center justify-center lg:col-span-2'>
                    <p className='text-gray font-medium'>in stock</p>
                </div>

                {/* Total */}
                <div className='col-span-full text-center lg:col-span-2'>
                    <Button variant='dark' size='xl' className='!w-full'>
                        add to cart
                    </Button>
                </div>

                {/* Remove Button */}
                <div className='col-span-1 flex justify-center max-lg:hidden'>
                    <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                        <X className='h-4 w-4' />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductWishlist;
