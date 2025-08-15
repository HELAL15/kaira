import { lazy } from 'react';

import { Metadata } from 'next';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';

import Hero from '../../components/home/Hero';
import Proccess from '../../components/home/Proccess';

const BestSelling = lazy(() => import('../../components/home/BestSelling'));
const Cats = lazy(() => import('../../components/home/Cats'));
const NewArrivals = lazy(() => import('../../components/home/NewArrivals'));
const ProductsSection = lazy(() => import('../../components/home/ProductsSection'));
const Story = lazy(() => import('../../components/home/Story'));
const YouMayLike = lazy(() => import('../../components/home/YouMayLike'));

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
            <main className='overflow-hidden'>
                <Hero />
                <AnimateAOS>
                    <Proccess />
                    <Cats />
                    <NewArrivals />

                    <BestSelling />

                    <Story />

                    <ProductsSection />
                    <SignUpNewsletter />
                    <YouMayLike />
                </AnimateAOS>
            </main>
        </>
    );
};

export default Page;
