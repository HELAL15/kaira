import Image from 'next/image';

import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';

import { Minus, Plus, X } from 'lucide-react';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='cart' />
                <section>
                    <div className='container py-8'>
                        {/* Header */}
                        <div className='mb-6 grid grid-cols-12 gap-4 border-b border-gray-200 pb-4 max-md:hidden'>
                            <div className='text-secondary col-span-5 font-medium tracking-wide uppercase'>PRODUCT</div>
                            <div className='text-secondary col-span-2 text-center font-medium tracking-wide uppercase'>
                                UNIT PRICE
                            </div>
                            <div className='text-secondary text-centlg col-span-2 font-medium tracking-wide uppercase'>
                                QUANTITY
                            </div>
                            <div className='text-secondary text-centlg col-span-2 font-medium tracking-wide uppercase'>
                                TOTAL
                            </div>
                            <div className='col-span-1' />
                        </div>

                        {/* Cart Items */}
                        <div className='divide-background-secondary w-full divide-y'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className='grid grid-cols-12 items-center gap-4 py-6'>
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
                                            <h3 className='text-foreground text-lg tracking-wide uppercase'>
                                                HANDMADE CROP SWEATER
                                            </h3>
                                        </div>
                                    </div>
                                    <div className='col-span-3 text-center md:col-span-2'>
                                        <span className='font-medium'>$54.00</span>
                                    </div>
                                    {/* Quantity Controls */}
                                    <div className='col-span-5 flex items-center justify-center md:col-span-2'>
                                        <div className='flex items-center rounded border border-gray-200'>
                                            <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
                                                <Minus className='h-3 w-3' />
                                            </Button>
                                            <Input
                                                type='number'
                                                value='1'
                                                className='h-8 w-12 border-0 text-center focus:border-0 focus:ring-0'
                                                readOnly
                                            />
                                            <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
                                                <Plus className='h-3 w-3' />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className='col-span-3 text-center md:col-span-2'>
                                        <span className='font-medium text-gray-900'>$54.00</span>
                                    </div>

                                    {/* Remove Button */}
                                    <div className='col-span-1 flex justify-center max-md:order-2'>
                                        <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
                                            <X className='h-4 w-4 text-gray-400' />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
// <div key={index} className='grid grid-cols-12 items-center gap-4 py-4'>
//     {/* Product Info */}
//     <div className='col-span-full flex items-center gap-4 lg:col-span-5'>
//         <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-gray-100'>
//             <Image
//                 src='/images/cat-item1.jpg'
//                 alt='Handmade Crop Sweater'
//                 width={80}
//                 height={80}
//                 className='h-full w-full object-cover'
//             />
//         </div>
// <div>
//     <h3 className='text-foreground text-lg tracking-wide uppercase'>
//         HANDMADE CROP SWEATER
//     </h3>
// </div>
//     </div>

//     {/* Unit Price */}
// <div className='col-span-2 text-center'>
//     <span className='font-medium'>$54.00</span>
// </div>

// {/* Quantity Controls */}
// <div className='col-span-2 flex items-center justify-center'>
//     <div className='flex items-center rounded border border-gray-200'>
//         <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
//             <Minus className='h-3 w-3' />
//         </Button>
//         <Input
//             type='number'
//             value='1'
//             className='h-8 w-12 border-0 text-center focus:border-0 focus:ring-0'
//             readOnly
//         />
//         <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
//             <Plus className='h-3 w-3' />
//         </Button>
//     </div>
// </div>

// {/* Total */}
// <div className='col-span-2 text-center'>
//     <span className='font-medium text-gray-900'>$54.00</span>
// </div>

// {/* Remove Button */}
// <div className='col-span-1 flex justify-center'>
//     <Button variant='ghost' size='sm' className='h-8 w-8 p-0 hover:bg-gray-100'>
//         <X className='h-4 w-4 text-gray-400' />
//     </Button>
// </div>
// </div>
