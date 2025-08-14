'use client';

import React from 'react';

import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { ResetPasswordFormValues } from '@/hooks/auth/useResetPasswordLogic';

import { FormProvider } from 'react-hook-form';
import type { SubmitHandler, UseFormReturn } from 'react-hook-form';

interface IProps {
    form: UseFormReturn<ResetPasswordFormValues>;
    onSubmit: SubmitHandler<ResetPasswordFormValues>;
    isPending?: boolean;
}

const ResetPasswordForm = ({ form, onSubmit }: IProps) => {
    const { handleSubmit } = form;

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] space-y-5 md:w-[600px]'>
                    <FormInput type='password' name='password' placeholder='********' label='password' />
                    <div className='space-y-2'>
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            placeholder='********'
                            label='confirm password'
                        />
                        <div className='flex items-center justify-between gap-4'>
                            <Link
                                className='text-muted-foreground hover:text-foreground block text-end text-sm duration-300'
                                href={'/forget-password'}>
                                forget your password?
                            </Link>
                        </div>
                    </div>

                    <Button size={'xl'} variant={'dark'} type='submit'>
                        {'reset password'}
                    </Button>
                </form>
            </FormProvider>
        </>
    );
};

export default ResetPasswordForm;
