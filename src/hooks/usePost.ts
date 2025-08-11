import axiosClient from '@/lib/axiosClient';
import { axiosInstance } from '@/lib/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface IProps {
    endpoint: string;
    revalid?: Array<string | number>;
    onSuccess?: (data?: FieldValues) => void;
    onError?: (error: FieldValues) => void;
    method?: string;
}

const usePost = ({ endpoint = '', revalid = [], onSuccess, onError, method = 'post' }: IProps) => {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError } = useMutation({
        mutationFn: (data: FormData | FieldValues) => {
            switch (method.toLowerCase()) {
                case 'post':
                    return axiosInstance.post(endpoint, data);
                case 'put':
                    return axiosInstance.put(endpoint, data);
                case 'delete':
                    return axiosInstance.delete(endpoint, { data });
                default:
                    throw new Error(`Unsupported method: ${method}`);
            }
        },
        onSuccess: ({ data }) => {
            if (revalid.length > 0) {
                queryClient.invalidateQueries({
                    queryKey: [...revalid]
                });
            }
            toast.success(data.message);
            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (error) => {
            const axiosError = error as { response?: { data?: { message?: string } } };
            const errMessage = axiosError?.response?.data?.message || 'An error occurred';
            toast.error(errMessage);
            if (onError) {
                onError(error as FieldValues);
            }
        }
    });

    return { mutate, isPending, isError };
};

export default usePost;
