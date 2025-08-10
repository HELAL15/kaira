'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '../ui/Button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const ShopFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Filter data arrays
    const filterData = {
        colors: [
            { id: 'red', label: 'Red', count: 50, colorClass: 'bg-red-500' },
            { id: 'blue', label: 'Blue', count: 32, colorClass: 'bg-blue-500' },
            { id: 'green', label: 'Green', count: 28, colorClass: 'bg-green-500' },
            { id: 'black', label: 'Black', count: 45, colorClass: 'bg-black' },
            { id: 'white', label: 'White', count: 38, colorClass: 'bg-white border' }
        ],
        sizes: [
            { id: 'xs', label: 'XS', count: 15 },
            { id: 's', label: 'S', count: 25 },
            { id: 'm', label: 'M', count: 35 },
            { id: 'l', label: 'L', count: 30 },
            { id: 'xl', label: 'XL', count: 20 }
        ],
        prices: [
            { id: 'under-10', label: 'Less than $10', count: 12 },
            { id: '10-20', label: '$10 - $20', count: 25 },
            { id: '20-40', label: '$20 - $40', count: 35 },
            { id: '40-50', label: '$40 - $50', count: 28 },
            { id: '50-60', label: '$50 - $60', count: 18 },
            { id: 'over-60', label: 'Over $60', count: 22 }
        ],
        brands: [
            { id: 'lc-wakiki', label: 'LC Waikiki', count: 45 },
            { id: 'balenciaga', label: 'Balenciaga', count: 12 },
            { id: 'town-team', label: 'Town Team', count: 28 },
            { id: 'Gucci', label: '"Gucci"', count: 33 },
            { id: 'nike', label: 'Nike', count: 41 }
        ],
        availability: [
            { id: 'available', label: 'Available', count: 180 },
            { id: 'out-of-stock', label: 'Out of Stock', count: 25 }
        ]
    };

    const categories = [
        { id: '', label: 'All' },
        { id: '109', label: 'Clothing' },
        { id: '110', label: 'Accessories' },
        { id: '111', label: 'Shoes' },
        { id: '180', label: 'Bags' },
        { id: 'electronics', label: 'Electronics' }
    ];

    const getActive = (name: string) => {
        return searchParams.get(name) || '';
    };
    const checkIsActive = (name: string, value: string) => {
        return (value && getActive(name) === value) || (!value && !getActive(name));
    };

    const searcher = ({ name, id }: { name: string; id: string }) => {
        const params = new URLSearchParams(searchParams);
        if (id) {
            params.set(name, id);
        } else {
            params.delete(name);
        }
        router.push(`?${params.toString()}`);
    };

    const handleResetFilters = () => {
        const params = new URLSearchParams(searchParams);
        for (const key of params.keys()) {
            params.delete(key);
        }
        router.push(`${pathname}`);
    };

    return (
        <>
            <div className='space-y-6'>
                {/* Categories Section */}
                <div className='space-y-4'>
                    <h2 className='border-background-secondary border-b pb-3 text-lg uppercase md:text-xl'>
                        browse by categories
                    </h2>

                    {categories.map((category) => {
                        const isActive = checkIsActive('main_category_id', category.id);

                        return (
                            <button
                                key={category.id || ''}
                                onClick={() =>
                                    searcher({
                                        name: 'main_category_id',
                                        id: category.id || ''
                                    })
                                }
                                className={`nav-link flex w-full cursor-pointer items-center gap-2 duration-300 ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                {/* Filters Section */}
                <div className='space-y-4'>
                    <h2 className='border-background-secondary border-b pb-3 text-lg uppercase md:text-xl'>
                        filter by :
                    </h2>
                    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                        {/* Color Filter */}
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                color
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 text-balance'>
                                {filterData.colors.map((color) => {
                                    const isActive = checkIsActive('color_id', color.id);

                                    return (
                                        <button
                                            key={color.id || ''}
                                            onClick={() =>
                                                searcher({
                                                    name: 'color_id',
                                                    id: color.id || ''
                                                })
                                            }
                                            className={`border-background-secondary flex w-full cursor-pointer items-center gap-2 border px-6 py-4 duration-300 peer-data-[state=checked]:border-black ${isActive ? 'border-black text-black' : 'text-gray-500 hover:text-black'}`}>
                                            <span className={`block size-5 rounded-full ${color.colorClass}`} />
                                            {color.label} ({color.count})
                                        </button>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>

                        {/* Size Filter */}
                        <AccordionItem value='item-2'>
                            <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                size
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 text-balance'>
                                {filterData.sizes.map((size) => {
                                    const isActive = checkIsActive('size_id', size.id);

                                    return (
                                        <button
                                            key={size.id || ''}
                                            onClick={() =>
                                                searcher({
                                                    name: 'size_id',
                                                    id: size.id || ''
                                                })
                                            }
                                            className={`border-background-secondary flex w-full cursor-pointer items-center gap-2 border px-6 py-4 duration-300 peer-data-[state=checked]:border-black ${isActive ? 'border-black text-black' : 'text-gray-500 hover:text-black'}`}>
                                            {size.label} ({size.count})
                                        </button>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>

                        {/* Price Filter */}
                        <AccordionItem value='item-3'>
                            <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                price
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 text-balance'>
                                {filterData.prices.map((price) => {
                                    const isActive = checkIsActive('price_id', price.id);

                                    return (
                                        <button
                                            key={price.id || ''}
                                            onClick={() =>
                                                searcher({
                                                    name: 'price_id',
                                                    id: price.id || ''
                                                })
                                            }
                                            className={`border-background-secondary flex w-full cursor-pointer items-center gap-2 border px-6 py-4 duration-300 peer-data-[state=checked]:border-black ${isActive ? 'border-black text-black' : 'text-gray-500 hover:text-black'}`}>
                                            {price.label} ({price.count})
                                        </button>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>

                        {/* Brand Filter */}
                        <AccordionItem value='item-4'>
                            <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                brand
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 text-balance'>
                                {filterData.brands.map((brand) => {
                                    const isActive = checkIsActive('brand_id', brand.id);

                                    return (
                                        <button
                                            key={brand.id || ''}
                                            onClick={() =>
                                                searcher({
                                                    name: 'brand_id',
                                                    id: brand.id || ''
                                                })
                                            }
                                            className={`border-background-secondary flex w-full cursor-pointer items-center gap-2 border px-6 py-4 duration-300 peer-data-[state=checked]:border-black ${isActive ? 'border-black text-black' : 'text-gray-500 hover:text-black'}`}>
                                            {brand.label} ({brand.count})
                                        </button>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>

                        {/* Availability Filter */}
                        <AccordionItem value='item-5'>
                            <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                availability
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 text-balance'>
                                {filterData.availability.map((availability) => {
                                    const isActive = checkIsActive('availability_id', availability.id);

                                    return (
                                        <button
                                            key={availability.id || ''}
                                            onClick={() =>
                                                searcher({
                                                    name: 'availability_id',
                                                    id: availability.id || ''
                                                })
                                            }
                                            className={`border-background-secondary flex w-full cursor-pointer items-center gap-2 border px-6 py-4 duration-300 peer-data-[state=checked]:border-black ${isActive ? 'border-black text-black' : 'text-gray-500 hover:text-black'}`}>
                                            {availability.label} ({availability.count})
                                        </button>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Button
                        variant={'ghost'}
                        size={'sm'}
                        className='w-full text-center'
                        type='button'
                        onClick={handleResetFilters}>
                        reset all filters
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ShopFilters;
