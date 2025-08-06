import { Metadata } from 'next';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import SwiperContainer from '@/components/common/SwiperContainer';
import Heading from '@/components/ui/Heading';
import ProductCard from '@/components/ui/ProductCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { items } from '@/constants/data';

import BestSelling from './home/BestSelling';
import Cats from './home/Cats';
import Hero from './home/Hero';
import NewArrivals from './home/NewArrivals';
import Proccess from './home/Proccess';
import ProductsSection from './home/ProductsSection';
import Story from './home/Story';
import YouMayLike from './home/YouMayLike';

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

                    <section className='p-0'>
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
