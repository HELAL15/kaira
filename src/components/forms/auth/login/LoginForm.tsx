import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { LoginSchemaType } from '@/validations/loginSchema';

import { FormProvider } from 'react-hook-form';
import type { SubmitHandler, UseFormReturn } from 'react-hook-form';

type LoginFormProps = {
    form: UseFormReturn<LoginSchemaType>;
    onSubmit: SubmitHandler<LoginSchemaType>;
    isPending?: boolean;
};

const LoginForm = ({ form, onSubmit, isPending }: LoginFormProps) => {
    const { handleSubmit } = form;

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] space-y-5 md:w-[600px]'>
                    <FormInput name='email' placeholder='a**@gmail.com' label='username or email address' />
                    <div className='space-y-2'>
                        <FormInput type='password' name='password' placeholder='********' label='password' />
                        <div className='flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-2'>
                                <Checkbox id='remember' />
                                <Label htmlFor='remember'>remember me</Label>
                            </div>
                            <Link
                                className='text-muted-foreground hover:text-foreground block text-end text-sm duration-300'
                                href={'/forget-password'}>
                                forget your password?
                            </Link>
                        </div>
                    </div>

                    <Button size={'xl'} variant={'dark'} type='submit' disabled={isPending}>
                        {isPending ? 'loading' : 'login'}
                    </Button>
                </form>
            </FormProvider>
        </>
    );
};

export default LoginForm;
