import React, { memo } from 'react';

import { cn } from '@/lib/utils';

import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

const RadioForm = ({ name, data, cx }: FieldValues) => {
    const { control } = useFormContext();

    console.log('radio item re render');

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, ...rest } }) => (
                    <RadioGroup {...rest} value={value} onValueChange={onChange} className='flex flex-col gap-2'>
                        {data?.map((item: FieldValues) => (
                            <Label
                                key={item.id}
                                className={cn(
                                    'flex cursor-pointer items-center gap-2 border px-6 py-4 transition-all duration-300',
                                    value === String(item.id)
                                        ? 'text-foreground border-black dark:border-white'
                                        : 'border-background-secondary hover:border-gray dark:border-white/30 dark:hover:border-white/60',
                                    cx
                                )}>
                                <RadioGroupItem value={String(item.id)} className='peer sr-only' />
                                {name === 'color_id' && (
                                    <span
                                        className={cn('h-5 w-5 rounded-full border border-gray-300', item.colorClass)}
                                        style={{ backgroundColor: item.color }}
                                    />
                                )}

                                <span className='text-sm'>
                                    {item.label} {item.count ? `(${item.count})` : ''}
                                </span>
                            </Label>
                        ))}
                    </RadioGroup>
                )}
            />
        </>
    );
};

export default memo(RadioForm);
