import { Metadata } from 'next';

import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import BestSelling from '@/components/home/BestSelling';
import Cats from '@/components/home/Cats';
import Hero from '@/components/home/Hero';
import NewArrivals from '@/components/home/NewArrivals';
import Proccess from '@/components/home/Proccess';
import ProductsSection from '@/components/home/ProductsSection';
import Story from '@/components/home/Story';
import YouMayLike from '@/components/home/YouMayLike';

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
        <main className='overflow-hidden'>
            <Hero />

            <Proccess />
            <Cats />
            <NewArrivals />

            <BestSelling />

            <Story />

            <ProductsSection />
            <SignUpNewsletter />
            <YouMayLike />
        </main>
    );
};

export default Page;
