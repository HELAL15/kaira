'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const CommentForm = () => {
    const schema = z.object({
        comment: z.string().min(1, { message: 'Comment is required' }),
        full_name: z.string().min(1, { message: 'Full name is required' }),
        email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' })
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            comment: ''
        }
    });
    const { handleSubmit } = form;
    const onSubmit = handleSubmit((data: FieldValues) => {});

    return (
        <>
            <form onSubmit={onSubmit} className='space-y-4'>
                <FormProvider {...form}>
                    <FormInput name='comment' type='textarea' placeholder='write your comment' />
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <FormInput name='full_name' type='text' placeholder='write your full name' />
                        <FormInput name='email' type='email' placeholder='write your email' />
                    </div>
                    <Button size={'xl'} variant={'dark'}>
                        post comment
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default CommentForm;
