import React from 'react';

import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import AnimateAOS from '@/components/common/AnimateAOS';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import AddReview from '@/components/shop/AddReview';
import MainDetailsForm from '@/components/shop/MainDetailsForm';
import ProductCarousel from '@/components/shop/ProductCarousel';
import RelatedProducts from '@/components/singleProduct/RelatedProducts';
import { Button } from '@/components/ui/Button';
import Rate from '@/components/ui/shadcn-io/Rate';
import { axiosInstance } from '@/lib/axiosInstance';

import { AxiosError } from 'axios';
import { Heart, Minus, Plus } from 'lucide-react';

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

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
    const productId = params.productId;
    const data = await getProducts(productId);

    return {
        title: data?.data?.title || 'Product Details',
        description:
            data?.data?.description || 'Explore our product details page for in-depth information and related products.'
    };
}

const page = async ({ params }: { params?: { productId?: number } }) => {
    const productId = await Number(params?.productId);
    const data = await getProducts(String(productId));

    const productData = await data?.data;
    console.log(productData);

    return (
        <>
            <main>
                <section>
                    <div className='container'>
                        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                            <ProductCarousel data={data} />
                            <div className='divide-background-secondary space-y-4 divide-y *:pb-4'>
                                <div className='space-y-4'>
                                    <div className='space-y-1'>
                                        <h1 className='text-xl font-medium uppercase'>{data?.data?.title}</h1>
                                        <div className='text-foreground flex items-center gap-2'>
                                            <Rate readonly size={14} val={3} />
                                            <span className='text-sm'>(45)</span>
                                        </div>
                                    </div>
                                    <div className='price flex items-center gap-2'>
                                        <span className='text-2xl'>$45.00</span>
                                        <span className='text-lg line-through opacity-80'>$55.00</span>
                                    </div>
                                    <p className='desc'>
                                        {data?.data?.description?.length > 150
                                            ? `${data?.data?.description.slice(0, 150)}...`
                                            : data?.data?.description}
                                    </p>
                                </div>
                                <MainDetailsForm data={productData} />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='divide-grey container space-y-6 divide-y *:pb-6'>
                        <div className='space-y-4'>
                            <h2 className='text-xl uppercase'>description</h2>
                            <p>{data?.data?.description}</p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-xl uppercase'>additional information</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora facere ratione,
                                aspernatur id molestias blanditiis repellendus est nobis quasi consequatur quas
                                laudantium asperiores alias eveniet sequi, soluta quibusdam. Excepturi corrupti veniam,
                                voluptates officiis dolor esse velit placeat! Eum, eligendi alias! Possimus sed fuga ab
                                numquam, tempora ipsam assumenda odio quae autem? Sit tempora beatae nam, praesentium
                                libero non ipsum alias enim et. Error rem omnis eveniet, ad voluptatem dolor nulla earum
                                alias officiis quae, harum debitis reprehenderit, libero nemo labore nostrum? Accusamus
                                quisquam ab at dignissimos id. Delectus debitis expedita autem dolore iste vero
                                laudantium recusandae optio inventore minima cupiditate labore, aliquam nisi provident
                                dignissimos? Ex numquam doloribus commodi qui quas cupiditate, ullam aut error! Facilis
                                nemo dolores in doloribus impedit nulla iure sint quod nobis, iusto sunt minima cumque
                                voluptatibus odit praesentium rerum quas sit alias quia. Veniam, voluptates facilis!
                                Soluta adipisci blanditiis nisi temporibus dolor ullam nemo omnis et veniam voluptate
                                aut tenetur voluptatibus, ipsa quibusdam reiciendis, officia possimus quos. Repudiandae
                                voluptatibus ut at quidem laudantium necessitatibus doloribus, eius odio a, cupiditate
                                earum architecto fuga, consequuntur obcaecati saepe officiis nesciunt. Expedita enim
                                aspernatur inventore beatae reprehenderit vitae nisi ratione voluptatibus
                                necessitatibus, quia repudiandae. Aut ab dignissimos laboriosam rerum labore impedit
                                perferendis. Aliquid dolorem officia soluta hic aperiam, quo dolorum voluptas quia? Ex
                                aut illum libero veniam at quidem quod placeat reiciendis, nisi nulla, odio inventore.
                                Beatae eos quisquam blanditiis assumenda fugiat sit quia ex fuga, laboriosam mollitia at
                                quos numquam ratione. Molestiae dignissimos dolores corrupti eos debitis?
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='text-xl uppercase'>reviews (4)</h2>
                            <div className='comments space-y-4'>
                                <div className='divide-background-secondary space-y-4 divide-y'>
                                    <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                        <Image
                                            src='/images/author.jpg'
                                            alt='Author Image'
                                            width={0}
                                            height={100}
                                            priority
                                            draggable='false'
                                            sizes='100vw'
                                            className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                        />
                                        <div className='space-y-6 max-md:w-full'>
                                            <div className='space-y-1'>
                                                <div className='space-y-2'>
                                                    <div className='flex items-center gap-4'>
                                                        <h4 className='font-bold uppercase'>Anna Younes</h4>
                                                        <span className='text-sm'>12 jan, 2022</span>
                                                    </div>
                                                    <Rate readonly size={14} val={3} />
                                                </div>
                                                <p className=''>
                                                    Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam
                                                    nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
                                                    viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut
                                                    diam lobortis eget leo, lectus. Tortor diam dignissim amet, in
                                                    interdum aliquet. Magnis dictum et eros purus fermentum, massa
                                                    ullamcorper sit sollicitudin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                        <Image
                                            src='/images/author.jpg'
                                            alt='Author Image'
                                            width={0}
                                            height={100}
                                            priority
                                            draggable='false'
                                            sizes='100vw'
                                            className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                        />
                                        <div className='space-y-6 max-md:w-full'>
                                            <div className='space-y-1'>
                                                <div className='space-y-2'>
                                                    <div className='flex items-center gap-4'>
                                                        <h4 className='font-bold uppercase'>Anna Younes</h4>
                                                        <span className='text-sm'>12 jan, 2022</span>
                                                    </div>
                                                    <Rate readonly size={14} val={3} />
                                                </div>
                                                <p className=''>
                                                    Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam
                                                    nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
                                                    viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut
                                                    diam lobortis eget leo, lectus. Tortor diam dignissim amet, in
                                                    interdum aliquet. Magnis dictum et eros purus fermentum, massa
                                                    ullamcorper sit sollicitudin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <h3 className='text-xl uppercase'>Leave a review</h3>
                                    <AddReview />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProducts />
                <AnimateAOS>
                    <SignUpNewsletter />
                </AnimateAOS>
            </main>
        </>
    );
};

export default page;
