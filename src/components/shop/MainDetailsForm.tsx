'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/Button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Heart, Minus, Plus } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Controller, type FieldValues, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface IProps {
    data: {
        color_images?: string[];
        [key: string]: string | string[] | number | number[] | undefined;
    };
}

const colors = [
    {
        id: 1,
        color: '#a5be6d'
    },
    {
        id: 2,
        color: '#d7ba8e'
    },
    {
        id: 3,
        color: '#ca7a7d'
    }
];

const sizes = [
    {
        id: 1,
        title: 'xs'
    },
    {
        id: 2,
        title: 'xl'
    },
    {
        id: 3,
        title: 's'
    },
    {
        id: 4,
        title: 'm'
    }
];

const inStock = 3;

const MainDetailsForm = ({ data }: IProps) => {
    const { id } = data || {};

    const [fav, setFav] = useState<boolean>(false);
    const [cart, setCart] = useState<boolean>(false);

    const form = useForm({
        defaultValues: {
            color: '1',
            size: '2',
            quantity: 1
        }
    });

    const { handleSubmit, control } = form;

    const onSubmit = handleSubmit((data: FieldValues) => {
        console.log(data);
        toast.success(`added to cart successfully ${id}`);
        setCart((prev) => !prev);
    });

    const locale = useLocale();

    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={onSubmit} className='divide-background-secondary space-y-4 divide-y *:pb-4'>
                    <div className='choose-color space-y-2'>
                        <p className='text-lg'>color: green</p>
                        <Controller
                            name='color'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    dir={dir}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className='flex items-center'>
                                    {colors.map((item) => (
                                        <div key={item.id}>
                                            <RadioGroupItem
                                                className='peer sr-only size-6 !accent-transparent'
                                                style={{
                                                    background: item.color
                                                }}
                                                id={`color-${item.id}`}
                                                key={item.id}
                                                value={String(item.id)}
                                            />
                                            <Label
                                                htmlFor={`color-${item.id}`}
                                                className={cn(
                                                    'block size-7 cursor-pointer rounded-full border-2 border-white outline-2 duration-300',
                                                    field.value === String(item.id)
                                                        ? 'outline-foreground'
                                                        : 'outline-grey'
                                                )}
                                                style={{
                                                    background: item.color
                                                }}
                                            />
                                        </div>
                                    ))}
                                </RadioGroup>
                            )}
                        />
                    </div>
                    <div className='choose-size space-y-2'>
                        <p className='text-lg'>size</p>
                        <Controller
                            name='size'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    dir={dir}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    className='flex items-center'>
                                    {sizes.map((item) => (
                                        <div key={item.id}>
                                            <RadioGroupItem
                                                className='sr-only !accent-transparent'
                                                id={`size-${item.id}`}
                                                key={item.id}
                                                value={String(item.id)}
                                            />
                                            <Label
                                                htmlFor={`size-${item.id}`}
                                                className={cn(
                                                    'grid size-10 cursor-pointer place-items-center border text-lg duration-300',
                                                    field.value === String(item.id)
                                                        ? 'border-foreground'
                                                        : 'border-grey'
                                                )}>
                                                {item.title}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            )}
                        />
                    </div>
                    <div className='stock space-y-2'>
                        <p className='text-lg'>3 in stock</p>
                        <div className='flex flex-wrap items-center gap-4'>
                            <Controller
                                name='quantity'
                                control={control}
                                defaultValue={1}
                                render={({ field }) => (
                                    <div className='border-background-secondary flex items-center gap-1 border'>
                                        <Button
                                            type='button'
                                            variant='outline'
                                            size='xl'
                                            className='border-0 shadow-none disabled:cursor-not-allowed'
                                            disabled={field.value == 1}
                                            onClick={() => field.onChange(Math.max(1, (field.value || 1) - 1))}>
                                            <Minus size={24} />
                                        </Button>

                                        <span className='grid w-10 place-items-center'>{field.value}</span>

                                        <Button
                                            type='button'
                                            variant='outline'
                                            size='xl'
                                            className='border-0 shadow-none'
                                            disabled={field.value >= inStock}
                                            onClick={() => field.onChange((field.value || 1) + 1)}>
                                            <Plus size={24} />
                                        </Button>
                                    </div>
                                )}
                            />

                            <div className='flex flex-grow flex-wrap items-center gap-4'>
                                <Button size={'xl'} disabled={cart} variant={'dark'} className={cn('flex-grow')}>
                                    {cart ? 'added to cart' : 'add to cart'}
                                </Button>
                                <Button
                                    onClick={() => {
                                        setFav((prev) => !prev);
                                        toast.success(
                                            `${fav ? 'removed from' : 'added to'} wishlist successfully ${id}`
                                        );
                                    }}
                                    type='button'
                                    size={'xl'}
                                    variant={'dark'}
                                    className='shrink-0'>
                                    <i>
                                        <Heart size={24} fill={fav ? '#eee' : ''} />
                                    </i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default MainDetailsForm;
