import { useRouter } from 'next/navigation';

import useCookie from '@/hooks/useCookies';
import { zodResolver } from '@hookform/resolvers/zod';

import usePost from '../usePost';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import * as z from 'zod';

export const ResetPasswordSchema = z
    .object({
        password: z.string().min(6, 'Password must be at least 6 characters long'),
        confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
    });

export type ResetPasswordFormValues = z.infer<typeof ResetPasswordSchema>;

export function useResetPasswordLogic() {
    const router = useRouter();
    const { setCookie } = useCookie('token', '');

    const form = useForm({
        resolver: zodResolver(ResetPasswordSchema),
        mode: 'onChange',
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });

    const successAction = (data: FieldValues | undefined) => {
        const token = data?.data?.access_token;
        setCookie(token, {
            path: '/',
            secure: false,
            sameSite: 'strict'
        });
        router.push('/');
    };

    const { mutate, isPending } = usePost({
        endpoint: 'admin/login',
        onSuccess(data) {
            successAction(data);
        }
    });

    const onSubmit = async (data: FieldValues) => {
        // mutate(data);
        console.log(data);
    };

    return { form, onSubmit, isPending };
}
