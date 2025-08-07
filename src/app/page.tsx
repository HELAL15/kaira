import { Suspense, lazy } from 'react';

import { Metadata } from 'next';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';

// import BestSelling from './home/BestSelling';
// import Cats from './home/Cats';
import Hero from './home/Hero';
// import NewArrivals from './home/NewArrivals';
import Proccess from './home/Proccess';

// import ProductsSection from './home/ProductsSection';
// import Story from './home/Story';
// import YouMayLike from './home/YouMayLike';

const BestSelling = lazy(() => import('./home/BestSelling'));
const Cats = lazy(() => import('./home/Cats'));
// const Hero = lazy(() => import('./home/Hero'));
const NewArrivals = lazy(() => import('./home/NewArrivals'));
// const Proccess = lazy(() => import('./home/Proccess'));
const ProductsSection = lazy(() => import('./home/ProductsSection'));
const Story = lazy(() => import('./home/Story'));
const YouMayLike = lazy(() => import('./home/YouMayLike'));

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */

export const metadata: Metadata = {
    title: 'home - Kaira'
};

const Page = () => {
    return (
        <>
            <main className=''>
                <Hero />
                <Proccess />
                <Cats />
                <AnimateAOS>
                    <NewArrivals />

                    <BestSelling />

                    <section className='open-up aos-init overflow-hidden p-0' data-aos='zoom-out'>
                        <Story />
                    </section>

                    <ProductsSection />
                    <SignUpNewsletter />
                    <YouMayLike />
                </AnimateAOS>
            </main>
        </>
    );
};

export default Page;
