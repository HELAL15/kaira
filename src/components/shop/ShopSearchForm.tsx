'use client';

import type { ReactNode } from 'react';
import React, { Suspense } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';

import { Button } from '../ui/Button';
import ProductCard from '../ui/ProductCard';
import ProductsPagination from './ProductsPagination';
import ShopFilters from './ShopFilters';
import type { FieldValues } from 'react-hook-form';

interface IProps {
    products: FieldValues;
    children?: ReactNode;
}

const ShopSearchForm = ({ products, children }: IProps) => {
    const meta = products?.meta || {};
    const items = products?.data || [];

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
                                            <ShopFilters />
                                        </div>

                                        <SheetFooter>
                                            <SheetClose asChild>
                                                <Button variant='outline'>Close</Button>
                                            </SheetClose>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                        <ul className='col-span-full grid grid-cols-2 items-start gap-4 md:grid-cols-3 lg:col-span-9'>
                            {items.length > 0 ? (
                                items.map((product: { [key: string]: FieldValues }) => (
                                    <li key={product?.id as unknown as number}>
                                        <ProductCard product={product} />
                                    </li>
                                ))
                            ) : (
                                <li className='col-span-full grid h-[400px] place-items-center'>
                                    <p className='text-center text-gray-500'>No products found.</p>
                                </li>
                            )}
                            {items.length !== 0 && (
                                <li className='col-span-full flex items-center justify-center gap-4'>
                                    <ProductsPagination meta={meta} />
                                </li>
                            )}
                        </ul>
                        <div className='sticky top-28 col-span-3 px-6 py-1 max-lg:hidden'>
                            <ShopFilters />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopSearchForm;
