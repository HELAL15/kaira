import React from 'react';

import Heading from '@/components/ui/Heading';
import ProductCard from '@/components/ui/ProductCard';
import { items } from '@/constants/data';

const ProductsSection = () => {
    return (
        <>
            <section>
                <div data-aos='zoom-out' className='open-up aos-init container'>
                    <Heading
                        title='our products'
                        link={{
                            href: '/products',
                            desc: 'view all products'
                        }}
                    />
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6'>
                        {items.map((product) => (
                            <ProductCard key={product?.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsSection;
