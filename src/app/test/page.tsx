import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { getProducts } from '@/lib/products';

export default async function page({ searchParams }: { searchParams?: { page?: string } }) {
    const page = Number(searchParams?.page) || 1;
    const count = 12;

    const products = await getProducts(page, count);

    return (
        <main>
            <SectionHeading title='Products' />
            <section>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {products.data.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>

                    <div className='col-span-full py-8'>
                        <PaginationWithLinks
                            page={page}
                            pageSize={products.meta.per_page}
                            totalCount={products.meta.total}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
