import React from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import RelatedProducts from '@/components/singleProduct/RelatedProducts';

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const getProductDetails = async (productId: number) => {
    try {
        const response = await fetch(`https://api.jaar.cloud/api/v1/products/${productId}?include_stock=true`, {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer 2573|YlpNgvEffABDyLSxjs0oqX5F4qMQj42pAcspcELU401f3550` // move to env
            }
        });

        const data = await response.json();

        return data;
    } catch (e) {
        console.error('Error fetching product details:', e);
        notFound(); // fallback to 404
    }
};

export const metadata: Metadata = {
    title: 'Product Details',
    description: 'Explore our product details page for in-depth information and related products.'
};

const page = async ({ params }: { params?: { productId?: number } }) => {
    const productId = await Number(params?.productId);
    const productDetails = await getProductDetails(productId);
    console.log(productDetails);

    if (productDetails.status === 404) {
        notFound(); // trigger 404 page if product not found
    }

    return (
        <>
            <AnimateAOS>
                <main>
                    <section>
                        <div className='container'>
                            {/* <Tabs defaultValue='description'>
                                <TabsList className='border-background-secondary w-full justify-center border-b bg-transparent p-0'>
                                    <TabsTrigger className='nav-link p-0 uppercase shadow-none' value='description'>
                                        description
                                    </TabsTrigger>
                                    <TabsTrigger className='nav-link p-0 uppercase shadow-none' value='password'>
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger className='nav-link p-0 uppercase shadow-none' value='images'>
                                        images
                                    </TabsTrigger>
                                    <TabsTrigger className='nav-link p-0 uppercase shadow-none' value='reviews'>
                                        reviews
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value='description'>
                                    <div className='py-6'>
                                        <h2 className='text-xl font-semibold'>Product Description</h2>
                                        <p className='mt-4'>
                                            This is a detailed description of the product. It includes all the necessary
                                            information that a customer might need to make an informed decision.
                                        </p>
                                    </div>
                                </TabsContent>
                                <TabsContent value='password'>Change your password here.</TabsContent>
                            </Tabs> */}
                        </div>
                    </section>
                    <RelatedProducts />
                    <SignUpNewsletter />
                </main>
            </AnimateAOS>
        </>
    );
};

export default page;
