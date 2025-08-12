'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button } from '../ui/Button';
import RadioForm from '../ui/RadioForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Controller, FormProvider, useForm } from 'react-hook-form';

const ShopFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Filter data arrays
    const filterData = {
        colors: [
            { id: 'red', label: 'Red', count: 50, colorClass: 'bg-red-500' },
            { id: 'blue', label: 'Blue', count: 32, colorClass: 'bg-blue-500' },
            { id: 'green', label: 'Green', count: 28, colorClass: 'bg-green-500' },
            { id: 'black', label: 'Black', count: 45, colorClass: 'bg-black' },
            { id: 'white', label: 'White', count: 38, colorClass: 'bg-white border' }
        ],
        sizes: [
            { id: 'xs', label: 'XS', count: 15 },
            { id: 's', label: 'S', count: 25 },
            { id: 'm', label: 'M', count: 35 },
            { id: 'l', label: 'L', count: 30 },
            { id: 'xl', label: 'XL', count: 20 }
        ],
        prices: [
            { id: 'under-10', label: 'Less than $10', count: 12 },
            { id: '10-20', label: '$10 - $20', count: 25 },
            { id: '20-40', label: '$20 - $40', count: 35 },
            { id: '40-50', label: '$40 - $50', count: 28 },
            { id: '50-60', label: '$50 - $60', count: 18 },
            { id: 'over-60', label: 'Over $60', count: 22 }
        ],
        brands: [
            { id: 'lc-wakiki', label: 'LC Waikiki', count: 45 },
            { id: 'balenciaga', label: 'Balenciaga', count: 12 },
            { id: 'town-team', label: 'Town Team', count: 28 },
            { id: 'Gucci', label: '"Gucci"', count: 33 },
            { id: 'nike', label: 'Nike', count: 41 }
        ],
        availability: [
            { id: 'available', label: 'Available', count: 180 },
            { id: 'out-of-stock', label: 'Out of Stock', count: 25 }
        ]
    };

    const categories = [
        { id: '', label: 'All' },
        { id: '109', label: 'Clothing' },
        { id: '110', label: 'Accessories' },
        { id: '111', label: 'Shoes' },
        { id: '180', label: 'Bags' },
        { id: 'electronics', label: 'Electronics' }
    ];

    const params = new URLSearchParams(searchParams);

    const form = useForm({
        defaultValues: {
            main_category_id: searchParams.get('main_category_id') || '',
            color_id: searchParams.get('color_id') || '',
            size_id: searchParams.get('size_id') || '',
            price_id: searchParams.get('price_id') || '',
            brand_id: searchParams.get('brand_id') || '',
            availability_id: searchParams.get('availability_id') || ''
        }
    });

    const { handleSubmit, reset } = form;

    const handleChange = handleSubmit((data) => {
        console.log(data);
        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        });
        router.push(`${pathname}?${params.toString()}`);
    });

    const handleResetFilters = () => {
        for (const key of params.keys()) {
            params.delete(key);
        }
        reset();
        router.push(pathname);
    };

    return (
        <>
            <FormProvider {...form}>
                <form onChange={handleChange} className='space-y-6'>
                    {/* Categories Section */}
                    <div className='space-y-4'>
                        <h2 className='border-background-secondary border-b pb-3 text-lg uppercase md:text-xl'>
                            browse by categories
                        </h2>

                        <Controller
                            name='main_category_id'
                            control={form.control}
                            render={({ field: { onChange, value, ...rest } }) => (
                                <RadioGroup
                                    {...rest}
                                    value={value}
                                    onValueChange={onChange}
                                    className='flex flex-col gap-2 text-lg'>
                                    {categories?.map((cat) => (
                                        <Label
                                            key={cat.id}
                                            className={cn(
                                                'nav-link cursor-pointer text-xl',
                                                value === String(cat.id) ? 'text-black' : ''
                                            )}>
                                            <RadioGroupItem value={String(cat.id)} className='peer sr-only' />

                                            <span className='text-sm'>{cat.label}</span>
                                        </Label>
                                    ))}
                                </RadioGroup>
                            )}
                        />
                    </div>

                    {/* Filters Section */}
                    <div className='space-y-4'>
                        <h2 className='border-background-secondary border-b pb-3 text-lg uppercase md:text-xl'>
                            filter by :
                        </h2>
                        <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                            {/* Color Filter */}
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                    color
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3 text-balance'>
                                    <RadioForm name='color_id' data={filterData.colors} />
                                </AccordionContent>
                            </AccordionItem>

                            {/* Size Filter */}
                            <AccordionItem value='item-2'>
                                <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                    size
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3 text-balance'>
                                    <RadioForm name='size_id' data={filterData.sizes} />
                                </AccordionContent>
                            </AccordionItem>

                            {/* Price Filter */}
                            <AccordionItem value='item-3'>
                                <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                    price
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3 text-balance'>
                                    <RadioForm name='price_id' data={filterData.prices} />
                                </AccordionContent>
                            </AccordionItem>

                            {/* Brand Filter */}
                            <AccordionItem value='item-4'>
                                <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                    brand
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3 text-balance'>
                                    <RadioForm name='brand_id' data={filterData.brands} />
                                </AccordionContent>
                            </AccordionItem>

                            {/* Availability Filter */}
                            <AccordionItem value='item-5'>
                                <AccordionTrigger className='text-gray text-lg uppercase hover:no-underline'>
                                    availability
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-3 text-balance'>
                                    <RadioForm name='availability_id' data={filterData.availability} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button
                            variant={'ghost'}
                            size={'sm'}
                            className='w-full text-center'
                            type='button'
                            onClick={handleResetFilters}>
                            reset all filters
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default ShopFilters;
