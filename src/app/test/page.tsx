import { Suspense } from 'react';

import SectionHeading from '@/components/common/SectionHeading';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { axiosInstance } from '@/lib/axiosInstance';

import ProductsList from './ProductsList';

export default async function page({ searchParams }: { searchParams?: { page?: string } }) {
    const page = Number(searchParams?.page) || 1;
    const count = 12;

    const { data } = await axiosInstance.get('/products', {
        params: {
            page: page,
            page_count: count,
            ...searchParams
        }
    });

    return (
        <main>
            <SectionHeading title='Products' />
            <section>
                <div className='container'>
                    <Suspense fallback={<ProductsLoader />}>
                        <ProductsList page={page} count={count} />
                    </Suspense>

                    <div className='col-span-full py-8'>
                        <PaginationWithLinks page={page} pageSize={data.meta.per_page} totalCount={data.meta.total} />
                    </div>
                </div>
            </section>
        </main>
    );
}

const ProductsLoader = () => {
    return (
        <>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className='bg-gray aos-init h-[350px]' data-aos='zoom-in-down'></div>
                ))}
            </div>
        </>
    );
};
