import Image from 'next/image';
import Link from 'next/link';

import { Button } from './Button';
import { Card, CardContent, CardFooter } from './card';
import { Eye, Heart } from 'lucide-react';
import type { FieldValues } from 'react-hook-form';

const ProductCard = ({ product, delay }: { product?: FieldValues; delay?: number }) => {
    const { id, title, price, image, product_banner } = product || {};
    console.log('i rerendered');

    return (
        <>
            <Card className='gap-2 border-0 bg-transparent p-0 shadow-none'>
                <CardContent className='group relative overflow-hidden p-0'>
                    <Image
                        src={image || product_banner || '/images/cat-item1.jpg'}
                        alt='product'
                        width={100}
                        height={100}
                        loading='lazy'
                        decoding='async'
                        placeholder='blur'
                        blurDataURL='/images/blur-placeholder.jpeg'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px'
                        className='h-[250px] w-full object-cover duration-300 group-hover:scale-110 md:h-[390px] lg:h-[400px]'
                    />

                    <div className='absolute -bottom-full flex w-full flex-wrap items-center justify-center gap-3 space-y-2 px-3 py-6 text-start text-white duration-300 group-hover:bottom-0'>
                        <Button title='add to cart' className='m-0 px-5 uppercase'>
                            add to cart
                        </Button>
                        <Button title='add to wishlist' className='m-0 size-10 rounded-full'>
                            <i>
                                <Heart />
                            </i>
                        </Button>
                        <Button title='watch' className='m-0 size-10 rounded-full'>
                            <i>
                                <Eye />
                            </i>
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className='m-0 flex flex-col items-start gap-2 p-0'>
                    <Link
                        aria-label={title}
                        href={`/shop/${id}`}
                        className='hovered-underlined font-marcellus text-lg uppercase'>
                        {title || 'Product Title'}
                    </Link>
                    <p className='text-gray'>$ {price || '54.00'} </p>
                </CardFooter>
            </Card>
        </>
    );
};

export default ProductCard;
