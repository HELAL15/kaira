'use client';

import React from 'react';

import formSchema from '@/validations/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

const ContactForm = () => {
    const formObject: FieldValues = {
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            phone: '',
            subject: '',
            message: ''
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
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <FormInput label='name' name='name' type='text' placeholder='enter your name' />
                        <FormInput label='email' name='email' type='email' placeholder='enter your email' />
                    </div>
                    <FormInput label='phone' name='phone' type='phone' placeholder='enter your phone' />
                    <FormInput label='subject' name='subject' type='subject' placeholder='enter your subject' />
                    <FormInput label='message' name='message' type='textarea' placeholder='enter your message' />

                    <Button variant={'dark'} size={'xl'} type='submit'>
                        {formState.isSubmitting ? 'loading' : 'send message'}
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default ContactForm;
