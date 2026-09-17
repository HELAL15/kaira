'use client';

import { useResetPasswordLogic } from '@/hooks/auth/useResetPasswordLogic';

import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordContainer = () => {
    const { form, onSubmit } = useResetPasswordLogic();

    return (
        <>
            <ResetPasswordForm form={form} onSubmit={onSubmit} />
        </>
    );
};

export default ResetPasswordContainer;
