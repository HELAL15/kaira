import React from 'react';

import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import { items } from '@/constants/data';

const YouMayLike = () => {
    return (
        <>
            <section className='bg-background-secondary open-up aos-init' data-aos='zoom-out'>
                <div className='container'>
                    <Heading title='you may also like' />
                    <SwiperContainer items={items} />
                </div>
            </section>
        </>
    );
};

export default YouMayLike;
