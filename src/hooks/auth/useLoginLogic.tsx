import { useRouter } from '@/i18n/navigation';

import { loginDefaultValues } from '@/constants/formDefaults';
import useCookie from '@/hooks/useCookies';
import loginSchema from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const onSubmit = async (data: FieldValues) => {};

    return { form, onSubmit };
}
