'use client';

import React from 'react';

import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/Button';
import FormInput from './FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const SignUpNewsletter = () => {
    // Define the schema for the form validation

    const schema = z.object({
        email: z.string().email('Invalid email address')
    });

    const form = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            email: ''
        }
    });

    const { handleSubmit } = form;
    const onSubmit = (data: FieldValues) => {
        console.log('Form submitted:', data);
        // Handle form submission logic here
        toast.success('Thank you for subscribing to our newsletter!', {
            duration: 3000,
            position: 'top-right'
        });
    };

    return (
        <>
            <section
                style={{
                    backgroundImage: 'url(/images/video-image.webp)'
                }}
                className='open-up aos-init relative flex w-full items-center overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat p-0 py-32'
                // data-aos='zoom-out'
            >
                <div className='absolute inset-0 z-0 bg-black/30' />

                <div className='relative z-20 container grid w-full place-items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4 md:w-3/4 lg:w-1/2'>
                        <h4 className='mb-8 text-center text-4xl text-white uppercase'>Sign Up for Our Newsletter</h4>
                        <FormProvider {...form}>
                            <FormInput name='email' type='email' placeholder='your email address' />
                            <Button type='submit' variant={'dark'} className='w-full py-6'>
                                subscribe
                            </Button>
                        </FormProvider>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SignUpNewsletter;
