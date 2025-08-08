import React from 'react';

import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import { items } from '@/constants/data';

const BestSelling = () => {
    return (
        <>
            <section className='bg-background-secondary'>
                <div className='open-up aos-init container' data-aos='zoom-out'>
                    <Heading
                        title='best selling items'
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

export default BestSelling;
