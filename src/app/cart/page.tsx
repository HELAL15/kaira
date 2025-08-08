import ApplyCopoun from '@/components/cart/ApplyCopoun';
import ProductCart from '@/components/cart/ProductCart';
import ShippingForm from '@/components/cart/ShippingForm';
import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import { Button } from '@/components/ui/Button';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='cart' />
                <section>
                    <div className='container py-8'>
                        {/* Header */}
                        <div className='mb-6 grid grid-cols-12 gap-4 border-b border-gray-200 pb-4 text-center max-md:hidden'>
                            <div className='text-secondary col-span-5 text-start font-medium tracking-wide uppercase'>
                                PRODUCT
                            </div>
                            <div className='text-secondary col-span-2 text-center font-medium tracking-wide uppercase'>
                                UNIT PRICE
                            </div>
                            <div className='text-secondary text-centlg col-span-2 font-medium tracking-wide uppercase'>
                                QUANTITY
                            </div>
                            <div className='text-secondary text-centlg col-span-2 font-medium tracking-wide uppercase'>
                                TOTAL
                            </div>
                            <div className='col-span-1' />
                        </div>

                        {/* Cart Items */}
                        <ul className='divide-background-secondary w-full divide-y'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li key={index}>
                                    <ProductCart />
                                </li>
                            ))}
                            <li>
                                <div className='flex flex-wrap items-center gap-4 py-4'>
                                    <ApplyCopoun />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <h2 className='text-xl uppercase md:text-2xl lg:text-3xl xl:text-4xl'>cart total</h2>
                        <div className='divide-background-secondary mt-8 space-y-5 divide-y'>
                            <div className='grid grid-cols-12 gap-4 pb-5'>
                                <div className='col-span-full md:col-span-2'>
                                    <h3 className='text-foreground font-jost font-bold uppercase'>subtotal</h3>
                                </div>
                                <div className='text-gray col-span-full flex items-center font-bold md:col-span-9'>
                                    <p>$ 204.00</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-12 items-center gap-4 pb-5'>
                                <div className='col-span-full md:col-span-2'>
                                    <h3 className='text-foreground font-jost font-bold uppercase'>shipping</h3>
                                </div>
                                <ShippingForm />
                            </div>
                            <div className='grid grid-cols-12 gap-4 pb-5'>
                                <div className='col-span-full md:col-span-2'>
                                    <h3 className='text-foreground font-jost font-bold uppercase'>total</h3>
                                </div>
                                <div className='text-gray col-span-full flex items-center font-bold md:col-span-9'>
                                    <p>$ 204.00</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center gap-4'>
                                <Button variant={'dark'} size={'xl'}>
                                    procceed to checkout
                                </Button>
                                <Button variant={'outline'} size={'xl'}>
                                    continue shopping
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
