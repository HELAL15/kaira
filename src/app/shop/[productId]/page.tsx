import React from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import RelatedProducts from '@/components/singleProduct/RelatedProducts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { axiosInstance } from '@/lib/axiosInstance';

import { AxiosError } from 'axios';

export const metadata: Metadata = {
    title: 'Product Details',
    description: 'Explore our product details page for in-depth information and related products.'
};

const getProducts = async (productId?: string) => {
    try {
        const data = await axiosInstance.get(`/products/${productId}`);

        return data.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
            return notFound();
        }
        throw error;
    }
};

const page = async ({ params }: { params?: { productId?: number } }) => {
    const productId = await Number(params?.productId);
    const data = await getProducts(String(productId));
    console.log(data);

    return (
        <>
            <AnimateAOS>
                <main>
                    <section>
                        <div className='container'>
                            <Tabs defaultValue='description'>
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
                            </Tabs>
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
