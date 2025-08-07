import { Metadata } from 'next';

import AnimateAOS from '@/components/common/AnimateAOS';
import SectionHeading from '@/components/common/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { items } from '@/constants/data';

export const metadata: Metadata = {
    title: 'shop - kaira'
};

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='shop' />
                {/* <ProductsSection /> */}
                <AnimateAOS>
                    <section data-aos='zoom-out' className='open-up aos-init'>
                        <div className='container'>
                            <div className='grid grid-cols-12 gap-4'>
                                <div className='col-span-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:col-span-9'>
                                    {items.map((product) => (
                                        <ProductCard key={product?.id} product={product} />
                                    ))}
                                </div>
                                <div className='col-span-3 bg-red-500'></div>
                            </div>
                        </div>
                    </section>
                </AnimateAOS>
            </main>
        </>
    );
};

export default page;
