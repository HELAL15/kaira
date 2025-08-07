'use client';

import FormInput from '../common/FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

const SearchBlogForm = () => {
    // Initialize form methods here if needed
    const form = useForm({
        defaultValues: {
            search: ''
        }
    });
    const { handleSubmit } = form;
    const onSubmit = (data: FieldValues) => {
        console.log(data);
        // Handle search logic here
    };

    return (
        <>
            <form
                onChange={handleSubmit(onSubmit)}
                className='order-2 col-span-full w-full space-y-4 max-lg:order-1 lg:col-span-3'>
                <FormProvider {...form}>
                    <FormInput name='search' type='text' placeholder='Search blog...' className='w-full' />
                </FormProvider>
            </form>
        </>
    );
};

export default SearchBlogForm;
