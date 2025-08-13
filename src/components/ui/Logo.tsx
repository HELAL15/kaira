import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

const Logo = ({ title = 'kaira', cx = '' }: { title?: string; cx?: string }) => {
    return (
        <>
            <Link
                aria-label={` ${title} website logo`}
                href={'/'}
                className={cn('font-marcellus block w-fit text-2xl font-medium uppercase md:text-3xl xl:text-4xl', cx)}>
                {title}
            </Link>
        </>
    );
};

export default Logo;
