import React from 'react';

import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import { items } from '@/constants/data';

const BestSelling = () => {
    return (
        <>
            <section className='bg-background-secondary'>
                <div className='container'>
                    <Heading title='best selling items' />
                    <SwiperContainer items={items} />
                </div>
            </section>
        </>
    );
};

export default BestSelling;
