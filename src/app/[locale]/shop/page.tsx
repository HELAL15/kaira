import { Metadata } from 'next';

import { axiosInstance } from '@/lib/axiosInstance';

import ShopPresentational from './ShopPresentational';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

const getData = async (params?: Record<string, string | number>) => {
    const locale = await getLocale();
    try {
        const data = await axiosInstance.get(`/products`, {
            params: params,
            headers: {
                Lang: locale
            }
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
