'use client';

import FormInput from '../common/FormInput';
import { Button } from '../ui/Button';
import { FormProvider, useForm } from 'react-hook-form';

const ApplyCopoun = () => {
    // Initialize form methods using FormProvider
    const form = useForm({
        defaultValues: {
            copoun: ''
        }
    });

    // Register the form input
    const { handleSubmit } = form;

    // Handle form submission
    const onSubmit = handleSubmit((data: any) => {
        console.log('data:', data);
        // Here you would typically handle the coupon application logic
    });

    return (
        <>
            <form onSubmit={onSubmit} className='flex w-full flex-wrap items-center gap-4'>
                <FormProvider {...form}>
                    <FormInput name='copoun' placeholder='enter copoun' cx='!py-5' />
                    <Button variant={'dark'} size={'xl'}>
                        apply copun
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default ApplyCopoun;
