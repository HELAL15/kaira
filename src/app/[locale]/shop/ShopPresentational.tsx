import React, { Suspense } from 'react';

import SectionHeading from '@/components/common/SectionHeading';
import ProductsPagination from '@/components/shop/ProductsPagination';
import ShopSearchForm from '@/components/shop/ShopSearchForm';
import ProductCard from '@/components/ui/ProductCard';

import { type FieldValues } from 'react-hook-form';

const ShopPresentational = ({ data }: FieldValues) => {
    const meta = data?.data?.meta || {};
    const items = data?.data?.data || [];

    return (
        <>
            <SectionHeading title='shop' />
            <Suspense fallback={<p>loading...</p>}>
                <ShopSearchForm>
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
                </ShopSearchForm>
            </Suspense>
        </>
    );
};

export default ShopPresentational;
