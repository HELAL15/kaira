'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { FormMessage } from './form';
import { format, parse } from 'date-fns';
import { Calendar as CalIcon } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

interface IProps {
    label?: string;
    placeholder?: string;
    name: string;
}

export function DateBicker({ name, label, placeholder }: IProps) {
    const [open, setOpen] = React.useState(false);

    const {
        control,
        formState: { errors }
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const selectedDate = field.value ? parse(field.value, 'dd/MM/yyyy', new Date()) : undefined;

                return (
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor='date' className='px-1'>
                            {label}
                        </Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <button
                                    id='date'
                                    type='button'
                                    className={cn(
                                        '!bg-background !text-foreground field-sizing-fixed w-full items-center justify-between !rounded-none !py-6',
                                        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                                        error
                                            ? 'border-destructive focus-visible:ring-destructive/50'
                                            : 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                                    )}>
                                    {field.value || placeholder}
                                    <CalIcon />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                                <Calendar
                                    mode='single'
                                    selected={selectedDate}
                                    captionLayout='dropdown'
                                    onSelect={(date) => {
                                        if (date) {
                                            const formatted = format(date, 'dd/MM/yyyy');
                                            field.onChange(formatted);
                                        }
                                        setOpen(false);
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                        {error && <FormMessage>{error}</FormMessage>}
                    </div>
                );
            }}
        />
    );
}
