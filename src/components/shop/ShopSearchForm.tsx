'use client';

import type { ReactNode } from 'react';
import React, { memo, useMemo } from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { Button } from '../ui/Button';
import ProductCard from '../ui/ProductCard';
import ProductsPagination from './ProductsPagination';
import ShopFilters from './ShopFilters';
import type { FieldValues } from 'react-hook-form';

interface IProps {
    products?: FieldValues;
    children?: ReactNode;
}

const ShopSearchForm = ({ products, children }: IProps) => {
    const meta = products?.meta || {};
    const items = products?.data || [];

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
        ],
        categories: [
            { id: '', label: 'All' },
            { id: '109', label: 'Clothing' },
            { id: '110', label: 'Accessories' },
            { id: '111', label: 'Shoes' },
            { id: '180', label: 'Bags' },
            { id: 'electronics', label: 'Electronics' }
        ]
    };

    const memoizedData = useMemo(() => filterData, []);

    return (
        <>
            <section>
                <div className='container py-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-full flex items-center justify-between gap-4'>
                            <p className='max-md:text-xs'>Showing 1-12 of 55 results</p>
                            <div className='lg:hidden'>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant='outline'>filter</Button>
                                    </SheetTrigger>
                                    <SheetContent className='overflow-auto'>
                                        <SheetHeader>
                                            <SheetTitle>filter</SheetTitle>
                                        </SheetHeader>

                                        <div className='px-4'>
                                            <ShopFilters filterData={memoizedData} />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                        <ul className='col-span-full grid grid-cols-2 items-start gap-4 md:grid-cols-3 lg:col-span-9'>
                            {children}
                        </ul>
                        <div className='col-span-3 px-6 py-1 max-lg:hidden'>
                            <ShopFilters filterData={memoizedData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(ShopSearchForm);
