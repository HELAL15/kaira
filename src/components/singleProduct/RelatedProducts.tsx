import React from 'react';

import { items } from '@/constants/data';

import SwiperContainer from '../common/SwiperContainer';
import Heading from '../ui/Heading';

const RelatedProducts = () => {
    return (
        <>
            <section>
                <div className='open-up aos-init container' data-aos='zoom-out'>
                    <Heading
                        title='related products'
                        link={{
                            href: '/shop',
                            desc: 'view all products'
                        }}
                    />
                    <SwiperContainer items={items} />
                </div>
            </section>
        </>
    );
};

export default RelatedProducts;
