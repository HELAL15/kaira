import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { LoginSchemaType } from '@/validations/loginSchema';

import { FormProvider } from 'react-hook-form';
import type { SubmitHandler, UseFormReturn } from 'react-hook-form';

type FormContainerProps = {
    form: UseFormReturn<LoginSchemaType>;
    onSubmit: SubmitHandler<LoginSchemaType>;
    isPending?: boolean;
    children: React.ReactNode;
    cx?: string;
};

const FormContainer = ({ form, onSubmit, children, cx }: FormContainerProps) => {
    const { handleSubmit } = form;

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className={cn('w-[90%] space-y-5 md:w-[600px]', cx)}>
                    {children}
                </form>
            </FormProvider>
        </>
    );
};

export default FormContainer;
