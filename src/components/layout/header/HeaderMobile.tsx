'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavLinks from '@/components/common/NavLinks';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { Menu } from 'lucide-react';

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Close sheet whenever the route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className='p-0 lg:hidden'>
                    <Button title='menu' variant={'ghost'} className='p-0 lg:hidden'>
                        <i>
                            <Menu className='size-[18px] md:size-[20px]' />
                        </i>
                    </Button>
                </SheetTrigger>
                <SheetContent className='overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>
                            <Link aria-label='kaira website logo' href={'/'} className='block w-[90px]'>
                                <Image
                                    width={0}
                                    height={0}
                                    loading='eager'
                                    priority
                                    className='h-full w-full object-contain'
                                    src={'/logo.svg'}
                                    alt='kaira logo'
                                />
                            </Link>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className='px-4'>
                        <ul className='flex flex-col items-center gap-8 uppercase'>
                            <NavLinks />
                        </ul>
                    </nav>

                    {/* <SheetFooter>
                                    <SheetClose asChild>
                                        <Button variant='outline'>Close</Button>
                                    </SheetClose>
                                </SheetFooter> */}
                </SheetContent>
            </Sheet>
        </>
    );
};

export default HeaderMobile;
