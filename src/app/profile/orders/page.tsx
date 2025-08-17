import React from 'react';

import ProductCard from '@/components/ui/ProductCard';

const page = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
};

export default page;
