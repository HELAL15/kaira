import { Metadata } from 'next';

import { axiosInstance } from '@/lib/axiosInstance';

import ShopPresentational from './ShopPresentational';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

const getData = async (params?: Record<string, string | number>) => {
    try {
        const data = await axiosInstance.get(`/products`, {
            params: params
        });

        return data;
    } catch (e) {
        console.error('Error fetching products:', e);
    }
};

export default async function Page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
    const resolvedParams = await searchParams;

    const { page = '1', page_count = '12' } = resolvedParams;
    const params = {
        page: page,
        page_count: page_count,
        ...resolvedParams
    };

    const products = await getData(params);

    return (
        <main>
            <ShopPresentational data={products} />
        </main>
    );
}
