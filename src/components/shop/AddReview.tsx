'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { Rating, RatingButton } from '../ui/shadcn-io/rating';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const AddReview = () => {
    const schema = z.object({
        comment: z.string().min(1, { message: 'Comment is required' }),
        rate: z.number().min(1, { message: 'rate is required' })
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            rate: 2,
            comment: ''
        }
    });
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = form;
    const onSubmit = handleSubmit((data: FieldValues) => {
        console.log(data);
        toast.success('your review submitted successfully');
        reset();
    });

    return (
        <>
            <form onSubmit={onSubmit} className='space-y-4'>
                <FormProvider {...form}>
                    <div className='space-y-1'>
                        <Controller
                            name='rate'
                            control={control}
                            render={({ field }) => (
                                <Rating
                                    value={Number(field.value)}
                                    onValueChange={(val) => field.onChange(Number(val))}>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <RatingButton key={index} size={20} />
                                    ))}
                                </Rating>
                            )}
                        />
                        {errors?.rate && <p className='mt-1 text-sm text-red-500'>{errors?.rate.message as string}</p>}
                    </div>
                    <FormInput name='comment' type='textarea' placeholder='write your review' />

                    <Button size={'xl'} variant={'dark'}>
                        post review
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default AddReview;
