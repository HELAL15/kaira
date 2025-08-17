'use client';

import { useCallback, useMemo } from 'react';

import Image from 'next/image';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import { DateBicker } from '../ui/datePicker';
import { isValid, parse } from 'date-fns';
import { Upload } from 'lucide-react';
import { Controller, type FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const ProfileForm = () => {
    const schema = z.object({
        first_name: z.string().min(4, { message: 'First name must be at least 3 characters' }).optional(),
        last_name: z.string().min(4, { message: 'Last name must be at least 3 characters' }).optional(),
        email: z.string().email().optional(),
        phone: z
            .string()
            .min(10, { message: 'Must be a valid mobile number' })
            .max(14, { message: 'Must be a valid mobile number' })
            .optional(),
        date_birth: z
            .string()
            .refine(
                (val) => {
                    if (!val) return true;
                    const date = parse(val, 'dd/MM/yyyy', new Date());

                    return isValid(date);
                },
                { message: 'Invalid date' }
            )
            .optional(),
        avatar: z.instanceof(File).optional()
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            date_birth: '',
            avatar: undefined
        }
    });

    const { handleSubmit, control, watch, getValues } = form;

    const initialData = getValues();

    const avatar = watch('avatar');

    const preview = useMemo(() => {
        if (avatar) return URL.createObjectURL(avatar);

        return null;
    }, [avatar]);

    const onSubmit = useCallback(
        handleSubmit((data: FieldValues) => {
            console.log(data);
        }),
        [handleSubmit, initialData]
    );

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={onSubmit} className='space-y-6'>
                    <Controller
                        name='avatar'
                        control={control}
                        render={({ field }) => (
                            <div className='border-background-secondary group relative h-44 w-44 overflow-hidden rounded-full border'>
                                <input
                                    type='file'
                                    className='absolute inset-0 z-50 cursor-pointer opacity-0'
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        field.onChange(file);
                                    }}
                                />
                                <div className='absolute inset-0 z-30 grid place-items-center bg-black/40 opacity-0 duration-300 group-hover:opacity-100'>
                                    <i className='grid size-10 place-items-center rounded-full bg-white'>
                                        <Upload color='#000' />
                                    </i>
                                </div>
                                <Image
                                    src={preview || '/images/dummy-user.webp'}
                                    alt='avatar'
                                    className='absolute inset-0 z-20'
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    />
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
