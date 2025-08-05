import { useRouter } from 'next/navigation';

import { loginDefaultValues } from '@/constants/formDefaults';
import useCookie from '@/hooks/useCookies';
import loginSchema from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import usePost from '../usePost';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

export function useLoginLogic() {
    const router = useRouter();
    const { setCookie } = useCookie('token', '');

    const form = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
        defaultValues: loginDefaultValues
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
        mutate(data);
    };

    return { form, onSubmit, isPending };
}
