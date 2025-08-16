'use client';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const ChangePasswordForm = () => {
    const schema = z
        .object({
            password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
            new_password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
            confirm_password: z.string().min(8, { message: 'Password must be at least 8 characters' })
        })
        .refine((data) => data.new_password === data.confirm_password, {
            path: ['confirm_password'],
            message: 'Passwords do not match'
        });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: ''
        }
    });

    const { handleSubmit } = form;

    const onSubmit = handleSubmit((data: FieldValues) => {
        console.log(data);
    });

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={onSubmit} className='space-y-6'>
                    <FormInput name='password' label='password' placeholder='enter your password' />
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        <FormInput name='new_password' label='new password' placeholder='enter your new password' />
                        <FormInput
                            name='confirm_password'
                            label='confirm password'
                            placeholder='confirm your new password'
                        />
                    </div>
                    <Button variant={'dark'} size={'xl'}>
                        change password
                    </Button>
                </form>
            </FormProvider>
        </>
    );
};

export default ChangePasswordForm;
