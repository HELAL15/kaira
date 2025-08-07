import React from 'react';

import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import { items } from '@/constants/data';

const NewArrivals = () => {
    return (
        <>
            <section data-aos='zoom-out' className='open-up aos-init'>
                <div className='container'>
                    <Heading title='our new arrivals' />
                    <SwiperContainer items={items} />
                </div>
            </section>
        </>
    );
};

export default NewArrivals;
