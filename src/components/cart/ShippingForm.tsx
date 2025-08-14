'use client';

import React from 'react';

import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import { Button } from '../ui/Button';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';

const ShippingForm = () => {
    const form = useForm({
        defaultValues: {
            state: '',
            region: '',
            city: '',
            zip: ''
        }
    });

    const options = {
        states: [
            { id: 's1', title: 'United States' },
            { id: 's2', title: 'Canada' },
            { id: 's3', title: 'Mexico' },
            { id: 's4', title: 'Brazil' },
            { id: 's5', title: 'United Kingdom' },
            { id: 's6', title: 'Australia' },
            { id: 's7', title: 'Germany' },
            { id: 's8', title: 'France' },
            { id: 's9', title: 'India' },
            { id: 's10', title: 'China' }
        ],
        regions: [
            { id: 'r1', title: 'Florida' },
            { id: 'r2', title: 'California' },
            { id: 'r3', title: 'Ontario' },
            { id: 'r4', title: 'Quebec' },
            { id: 'r5', title: 'New South Wales' },
            { id: 'r6', title: 'Bavaria' },
            { id: 'r7', title: 'Île-de-France' },
            { id: 'r8', title: 'Maharashtra' },
            { id: 'r9', title: 'Beijing Municipality' },
            { id: 'r10', title: 'São Paulo' }
        ],
        cities: [
            { id: 'c1', title: 'Miami' },
            { id: 'c2', title: 'Los Angeles' },
            { id: 'c3', title: 'Toronto' },
            { id: 'c4', title: 'Vancouver' },
            { id: 'c5', title: 'Sydney' },
            { id: 'c6', title: 'Munich' },
            { id: 'c7', title: 'Paris' },
            { id: 'c8', title: 'Mumbai' },
            { id: 'c9', title: 'Beijing' }
        ]
    };

    const { handleSubmit } = form;

    const onSubmit = handleSubmit((data: FieldValues) => {
        console.log('data:', data);
    });

    return (
        <>
            <form onSubmit={onSubmit} className='col-span-full space-y-4 md:col-span-9'>
                <FormProvider {...form}>
                    <FormSelect name='state' placeholder='select your state' options={options.states} />
                    <FormSelect name='region' placeholder='select your region' options={options.regions} />
                    <FormSelect name='city' placeholder='select your city' options={options.cities} />
                    <FormInput name='zip' placeholder='enter your zip' type='text' />
                    <Button variant={'dark'} size={'xl'}>
                        update
                    </Button>
                </FormProvider>
            </form>
        </>
    );
};

export default ShippingForm;
