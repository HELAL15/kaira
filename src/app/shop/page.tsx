import { Suspense } from 'react';

import { Metadata } from 'next';

import SectionHeading from '@/components/common/SectionHeading';
import ShopSearchForm from '@/components/shop/ShopSearchForm';
import { axiosInstance } from '@/lib/axiosInstance';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

const getData = async (params?: Record<string, string | number>) => {
    try {
        const data = await axiosInstance.get(`/products`, {
            params: params
        });

        return data.data;
    } catch (e) {
        console.error('Error fetching products:', e);
    }
};
export default async function Page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
    const { page = 1, page_count = '10' } = searchParams;

    const products = await axiosInstance.get('/products', {
        params: {
            page: page,
            page_count: page_count,
            ...searchParams
        }
    });

    return (
        <main>
            <SectionHeading title='shop' />
            <Suspense fallback={<p>loading...</p>}>
                <ShopSearchForm products={products?.data || {}} />
            </Suspense>
        </main>
    );
}
