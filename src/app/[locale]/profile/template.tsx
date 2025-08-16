'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';

import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/Button';
import NavLink from '@/components/ui/NavLink';

const template = ({ children }: { children: ReactNode }) => {
    const profileLinks = [
        { id: 1, href: '/profile', title: 'profile' },
        { id: 2, href: '/profile/password', title: 'password' },
        { id: 3, href: '/profile/orders', title: 'orders' },
        { id: 4, href: '/profile/addresses', title: 'addresses' }
    ];

    const customStyle = {
        active: 'border-foreground text-foreground',
        default: ' border-background-secondary'
    };

    const pathname = usePathname();
    const lastSegment = pathname.split('/').filter(Boolean).pop();

    return (
        <>
            <SectionHeading title={lastSegment} />
            <section className='min-h-[500px]'>
                <div className='container py-8'>
                    <div className='grid grid-cols-12 gap-6'>
                        <aside className='col-span-full flex flex-col gap-4 md:col-span-3'>
                            {profileLinks.map((item) => (
                                <NavLink
                                    key={item.id}
                                    href={item.href}
                                    title={item.title}
                                    customStyle={customStyle}
                                    cx='w-full border text-lg durartion-300 hover:border-gray before:hidden after:hidden p-4'
                                />
                            ))}
                            <Button size={'xl'} variant={'ghost'} className='text-red-500 hover:text-red-500'>
                                logout
                            </Button>
                        </aside>
                        <main className='col-span-full px-4 md:col-span-9'>{children}</main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default template;
