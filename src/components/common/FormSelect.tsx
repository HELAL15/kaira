'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { type Control, useFormContext } from 'react-hook-form';

type Option = {
    id: string;
    title: string;
};

interface IProps {
    control?: Control;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    type?: string;
    cx?: string;
    description?: ReactNode;
    options?: Option[] | undefined;
}

const FormSelect = ({ name, placeholder = 'default Sorting', label, cx, description, options }: IProps) => {
    const {
        control,
        formState: { errors }
    } = useFormContext();

    const fieldError = errors?.[name]?.message as string | undefined;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <SelectTrigger
                                className={cn(
                                    'bg-background text-foreground field-sizing-fixed w-full cursor-pointer rounded-none !py-6',
                                    fieldError && 'border-red-500',
                                    cx
                                )}>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <button className='px-4 py-1' onClick={() => field.onChange('')}>
                                    -- Clear Selection --
                                </button>
                                {(options ?? []).length > 0 ? (
                                    (options ?? []).map((option) => (
                                        <SelectItem key={option.id} value={option.id}>
                                            {option.title}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <SelectItem value={'empty'}>select is empty</SelectItem>
                                )}
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
