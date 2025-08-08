import Image from 'next/image';

import { Button } from '../ui/Button';
import { Minus, Plus, X } from 'lucide-react';

interface IProduct {
    product?: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
        quantity: number;
    };
}

const ProductCart = ({ product }: IProduct) => {
    // Destructure product properties
    const { name, price, imageUrl, quantity } = product || {};

    return (
        <>
            <div className='grid grid-cols-12 items-center gap-4 py-6'>
                <div className='col-span-full flex items-center gap-4 md:col-span-5'>
                    <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-gray-100'>
                        <Image
                            src='/images/cat-item1.jpg'
                            alt='Handmade Crop Sweater'
                            width={80}
                            height={80}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div>
                        <h3 className='text-foreground font-semibold tracking-wide uppercase'>HANDMADE CROP SWEATER</h3>
                    </div>
                </div>
                <div className='text-foreground col-span-3 text-center md:col-span-2'>
                    <span className='font-medium'>$54.00</span>
                </div>
                {/* Quantity Controls */}
                <div className='col-span-5 flex items-center justify-center md:col-span-2'>
                    <div className='border-background-secondary flex items-center rounded border'>
                        <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                            <Minus className='h-3 w-3' />
                        </Button>
                        <span className='grid h-8 w-12 place-items-center text-center'>1</span>

                        <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                            <Plus className='h-3 w-3' />
                        </Button>
                    </div>
                </div>

                {/* Total */}
                <div className='col-span-3 text-center md:col-span-2'>
                    <span className='text-foreground font-medium'>$54.00</span>
                </div>

                {/* Remove Button */}
                <div className='col-span-1 flex justify-center max-md:order-2'>
                    <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                        <X className='h-4 w-4' />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductCart;
