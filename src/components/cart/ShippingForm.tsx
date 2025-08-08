'use client';

import React from 'react';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { FormProvider, useForm } from 'react-hook-form';

const ShippingForm = () => {
    const form = useForm({
        defaultValues: {
            note: ''
        }
    });
    // Register the form input
    const { handleSubmit } = form;
    // Handle form submission
    const onSubmit = handleSubmit((data: any) => {
        console.log('data:', data);
        // Here you would typically handle the form submission logic
    });

    return (
        <>
            <form className='col-span-full space-y-4 md:col-span-9'>
                <FormProvider {...form}>
                    <FormInput name='note' placeholder='order note' type='text' />
                    <FormInput name='note' placeholder='order note' type='text' />
                    <FormInput name='note' placeholder='order note' type='text' />
                    <FormInput name='note' placeholder='order note' type='text' />
                    <Button variant={'dark'} size={'xl'}>
                        update
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default ShippingForm;
