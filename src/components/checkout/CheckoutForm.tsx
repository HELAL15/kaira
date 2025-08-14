'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import { Button } from '../ui/Button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const CheckoutForm = () => {
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

    const paymentOptions = ['card', 'cash', 'paypal', 'direct-bank-transfer'] as const;

    const schema = z.object({
        first_name: z
            .string()
            .min(2, 'First name is required (minimum 2 characters)')
            .max(50, 'Maximum 50 characters allowed'),
        last_name: z
            .string()
            .min(2, 'Last name is required (minimum 2 characters)')
            .max(50, 'Maximum 50 characters allowed'),
        email: z.string().email('Invalid email address'),
        phone: z
            .string()
            .min(7, 'Phone number is too short')
            .max(20, 'Phone number is too long')
            .regex(/^[0-9+\s()-]+$/, 'Phone number must contain only digits'),
        street_address: z.string().min(3, 'Street address is too short'),
        city: z.string().min(2, 'City is required'),
        region: z.string().min(2, 'Region is required'),
        state: z.string().min(2, 'State is required'),
        zip: z
            .string()
            .min(3, 'ZIP code is too short')
            .max(10, 'ZIP code is too long')
            .regex(/^[A-Za-z0-9- ]+$/, 'ZIP code must contain only letters and numbers'),
        notes: z.string().max(500, 'Maximum 500 characters allowed').optional().or(z.literal('')),
        paymentMethod: z.enum(paymentOptions, {
            errorMap: () => ({ message: 'Please select a payment method' })
        })
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            city: '',
            email: '',
            first_name: '',
            last_name: '',
            notes: '',
            phone: '',
            region: '',
            state: '',
            street_address: '',
            zip: '',
            paymentMethod: undefined
        }
    });

    const { handleSubmit } = form;

    const onSubmit = handleSubmit((data: FieldValues) => {
        console.log(data);
        toast.success('checkout done');
    });

    return (
        <>
            <form onSubmit={onSubmit}>
                <FormProvider {...form}>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                        <div className='space-y-6'>
                            <h2 className='text-lg uppercase md:text-xl lg:text-2xl'>billing details</h2>
                            <div className='space-y-4'>
                                <FormInput name='first_name' label='first name' placeholder='enter your first name' />
                                <FormInput name='last_name' label='last name' placeholder='enter your last name' />
                                {/* <FormInput name='company' label='company name' placeholder='enter company name' /> */}
                                <FormSelect
                                    name='state'
                                    label='state'
                                    placeholder='enter your state'
                                    options={options.states}
                                />
                                <FormSelect
                                    name='region'
                                    label='region'
                                    placeholder='enter your region'
                                    options={options.regions}
                                />
                                <FormSelect
                                    name='city'
                                    label='city'
                                    placeholder='enter your city'
                                    options={options.cities}
                                />
                                <FormInput
                                    name='street_address'
                                    label='street address'
                                    placeholder='house, number and street name'
                                />

                                <FormInput name='zip' label='zip code' placeholder='zip code' />
                                <FormInput
                                    name='phone'
                                    type='tel'
                                    label='phone number'
                                    placeholder='enter your phone number'
                                />
                                <FormInput
                                    name='email'
                                    type='email'
                                    label='email address'
                                    placeholder='enter your email address'
                                />
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <h2 className='text-lg uppercase md:text-xl lg:text-2xl'>additional information</h2>
                            <FormInput
                                name='notes'
                                type='textarea'
                                label='notes'
                                placeholder='notes about your order like special notes for delivery'
                            />
                        </div>
                        <div className='col-span-full mt-8 space-y-6'>
                            <h3 className='text-lg uppercase md:text-xl lg:text-2xl'>your order</h3>
                            <div className='divide-grey space-y-4 divide-y *:pb-4'>
                                {/* Header */}
                                <div className='grid grid-cols-12 gap-4'>
                                    <h4 className='col-span-5 uppercase md:col-span-4'>Products</h4>
                                    <h4 className='col-span-7 uppercase md:col-span-8'>Subtotal</h4>
                                </div>

                                {/* Items */}
                                <div className='grid grid-cols-12 gap-4'>
                                    <span className='col-span-5 md:col-span-4'>Handmade Crop Sweater x 1</span>
                                    <span className='col-span-7 md:col-span-8'>$54.00</span>
                                </div>

                                <div className='grid grid-cols-12 gap-4'>
                                    <span className='col-span-5 md:col-span-4'>Dark Florish Onepiece x 1</span>
                                    <span className='col-span-7 md:col-span-8'>$95.00</span>
                                </div>

                                <div className='grid grid-cols-12 gap-4'>
                                    <span className='col-span-5 md:col-span-4'>Baggy Shirt x 1</span>
                                    <span className='col-span-7 md:col-span-8'>$56.00</span>
                                </div>

                                {/* Subtotal */}
                                <div className='grid grid-cols-12 gap-4 font-medium'>
                                    <span className='col-span-5 md:col-span-4'>Subtotal</span>
                                    <span className='col-span-7 md:col-span-8'>$204.00</span>
                                </div>

                                {/* Shipping */}
                                <div className='grid grid-cols-12 gap-4'>
                                    <span className='col-span-5 md:col-span-4'>Shipping</span>
                                    <span className='col-span-7 md:col-span-8'>
                                        Please enter your address to view shipping options.
                                    </span>
                                </div>

                                {/* Total */}
                                <div className='grid grid-cols-12 gap-4 py-2 font-semibold'>
                                    <span className='col-span-5 md:col-span-4'>Total</span>
                                    <span className='col-span-7 md:col-span-8'>$204.00</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-full space-y-6'>
                            <FormField
                                control={form.control}
                                name='paymentMethod'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className='divide-grey space-y-3 divide-y *:pb-3'>
                                                {/* Direct Bank Transfer */}
                                                <div className='space-y-3'>
                                                    <div className='flex items-center space-x-3'>
                                                        <RadioGroupItem
                                                            value='direct-bank-transfer'
                                                            id='direct-bank-transfer'
                                                            className='h-4 w-4'
                                                        />
                                                        <FormLabel
                                                            htmlFor='direct-bank-transfer'
                                                            className='text-foreground cursor-pointer tracking-wide'>
                                                            DIRECT BANK TRANSFER
                                                        </FormLabel>
                                                    </div>
                                                    {field.value === 'direct-bank-transfer' && (
                                                        <p className='text-grey ml-7 text-sm leading-relaxed'>
                                                            Make your payment directly into our bank account. Please use
                                                            your Order ID. Your order will shipped after funds have
                                                            cleared in our account.
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Cash on Delivery */}
                                                <div className='flex items-center space-x-3'>
                                                    <RadioGroupItem value='cash' id='cash' className='h-4 w-4' />
                                                    <FormLabel
                                                        htmlFor='cash'
                                                        className='text-foreground cursor-pointer tracking-wide'>
                                                        CASH ON DELIVERY
                                                    </FormLabel>
                                                </div>

                                                {/* PayPal */}
                                                <div className='flex items-center space-x-3'>
                                                    <RadioGroupItem value='paypal' id='paypal' className='h-4 w-4' />
                                                    <FormLabel
                                                        htmlFor='paypal'
                                                        className='text-foreground cursor-pointer tracking-wide'>
                                                        PAYPAL
                                                    </FormLabel>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button variant={'dark'} size={'xl'}>
                                place order
                            </Button>
                        </div>
                    </div>
                </FormProvider>
            </form>
        </>
    );
};

export default CheckoutForm;
