import { Spinner } from '@/components/ui/spinner';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <Spinner className='h-16 w-16' />
        </div>
    );
};

export default Loading;
