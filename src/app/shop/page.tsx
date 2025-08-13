import { Suspense } from 'react';

import { Metadata } from 'next';

import SectionHeading from '@/components/common/SectionHeading';
import ProductsPagination from '@/components/shop/ProductsPagination';
import ShopSearchForm from '@/components/shop/ShopSearchForm';
import ProductCard from '@/components/ui/ProductCard';
import { axiosInstance } from '@/lib/axiosInstance';

import { type FieldValues } from 'react-hook-form';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

// const getData = async (params?: Record<string, string | number>) => {
//     try {
//         const data = await axiosInstance.get(`/products`, {
//             params: params
//         });

//         return data.data;
//     } catch (e) {
//         console.error('Error fetching products:', e);
//     }
// };

export default async function Page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
    const resolvedParams = await searchParams;

    const { page = '1', page_count = '12' } = resolvedParams;
    const start = performance.now();

    console.log('%c[ShopFilters] Render start', 'color: orange');

    const products = await axiosInstance.get('/products', {
        params: {
            page: page,
            page_count: page_count,
            ...resolvedParams
        }
    });

    const end = performance.now();
    console.log(`%c[ShopFilters] Render took ${(end - start).toFixed(2)} ms`, 'color: green');

    const meta = products?.data?.meta || {};
    const items = products?.data?.data || [];

    return (
        <main>
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
        </main>
    );
}
