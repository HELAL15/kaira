// ProductsList.tsx (server component)
import ProductCard from '@/components/ui/ProductCard';
import { axiosInstance } from '@/lib/axiosInstance';

import type { FieldValues } from 'react-hook-form';

export default async function ProductsList({ page, count }: { page: number; count: number }) {
    const { data } = await axiosInstance.get('/products', {
        params: { page, page_count: count }
    });

    return (
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.data?.map((item: FieldValues) => (
                <li key={item.id}>
                    <ProductCard product={item} />
                </li>
            ))}
        </ul>
    );
}
