'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import * as z from 'zod';

const OrderTrackingForm = () => {
    const formSchema = z.object({
        order_id: z.string().min(1, { message: 'order id is required' }),
        email: z.string().email({ message: 'Invalid email address' })
    });

    const formObject: FieldValues = {
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            id: ''
        }
    };
    const form = useForm<FieldValues>(formObject);
    const { formState, handleSubmit } = form;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
                <FormProvider {...form}>
                    <FormInput label='order id' name='order_id' type='text' placeholder='enter your order id' />
                    <FormInput label='email' name='email' type='email' placeholder='enter your email' />

                    <Button variant={'dark'} size={'xl'} type='submit'>
                        {formState.isSubmitting ? 'loading' : 'track order'}
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default OrderTrackingForm;
