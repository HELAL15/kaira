import { Metadata } from 'next';

import SectionHeading from '@/components/common/SectionHeading';
import ShopSearchForm from '@/components/shop/ShopSearchForm';
import { useServerFetch } from '@/lib/userServerFetch';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

const API_URL = 'https://api.jaar.cloud/api/v1/products';
const API_TOKEN = 'Bearer 2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550';

export default async function Page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
    const products = await useServerFetch({
        baseUrl: API_URL,
        token: API_TOKEN,
        defaults: { page: '1', page_count: '12' },
        params: searchParams
    });

    return (
        <main>
            <SectionHeading title='shop' />
            <ShopSearchForm products={products || {}} />
        </main>
    );
}
