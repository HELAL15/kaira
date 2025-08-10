'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { type Control, useFormContext } from 'react-hook-form';

interface IProps {
    control?: Control;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    type?: string;
    cx?: string;
    description?: ReactNode;
}

const FormSelect = ({ name, placeholder = 'default Sorting', label, cx, description }: IProps) => {
    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <SelectTrigger className={cn('cursor-pointer border-0 shadow-none outline-0', cx)}>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='defaultSorting'>Default Sorting</SelectItem>
                                <SelectItem value='color'>Color</SelectItem>
                                <SelectItem value='size'>Size</SelectItem>
                                <SelectItem value='price'>Price</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                    {description && <FormDescription>{description}</FormDescription>}
                </FormItem>
            )}
        />
    );
};

export default FormSelect;
