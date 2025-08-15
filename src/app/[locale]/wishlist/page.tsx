import ProductCart from '@/components/cart/ProductCart';
import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import ProductWishlist from '@/components/wishlist/ProductWishlist';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='wishlist' />
                <section>
                    <div className='container py-8'>
                        {/* Header */}
                        <div className='mb-6 grid grid-cols-12 gap-4 border-b border-gray-200 pb-4 text-center max-lg:hidden'>
                            <div className='text-secondary col-span-5 text-start font-medium tracking-wide uppercase'>
                                PRODUCT
                            </div>
                            <div className='text-secondary col-span-2 text-center font-medium tracking-wide uppercase'>
                                UNIT PRICE
                            </div>
                            <div className='text-secondary text-centlg col-span-2 font-medium tracking-wide uppercase'>
                                STOCK STATUS
                            </div>

                            <div className='col-span-3' />
                        </div>

                        {/* Cart Items */}
                        <ul className='divide-background-secondary w-full divide-y'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li key={index}>
                                    <ProductWishlist />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
