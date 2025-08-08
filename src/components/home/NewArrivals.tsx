import React from 'react';

import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import { items } from '@/constants/data';

const NewArrivals = () => {
    return (
        <>
            <section>
                <div data-aos='zoom-out' className='open-up aos-init container'>
                    <Heading
                        title='our new arrivals'
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

export default NewArrivals;
