'use client';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import { DateBicker } from '../ui/datePicker';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfileForm = () => {
    const schema = z.object({
        first_name: z.string().nonempty({ message: 'must be not empty' }),
        last_name: z.string().nonempty({ message: 'must be not empty' }),
        email: z.string().email().nonempty({ message: 'must be not empty' }),
        phone: z.string().nonempty({ message: 'must be not empty' }),
        date_birth: z.string().nonempty({ message: 'must be not empty' })
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            date_birth: ''
        }
    });

    const { handleSubmit } = form;

    const onSubmit = handleSubmit((data: FieldValues) => {
        // const { date, ...rest } = data;

        // const validData = {
        //     ...rest,
        //     date_birth: new Date(date).toLocaleDateString()
        // };
        console.log(data);
    });

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={onSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                        <FormInput name='first_name' label='first name' placeholder='enter your first name' />
                        <FormInput name='last_name' label='last name' placeholder='enter your last name' />
                    </div>
                    <FormInput name='email' type='email' label='email' placeholder='enter your email' />
                    <FormInput name='phone' type='tel' label='phone number' placeholder='enter your phone number' />

                    <DateBicker name='date_birth' label='date of birth' placeholder='select date of birth' />
                    <Button variant={'dark'} size={'xl'}>
                        update profile
                    </Button>
                </form>
            </FormProvider>
        </>
    );
};

export default ProfileForm;
