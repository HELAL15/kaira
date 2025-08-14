'use client';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '../ui/Button';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useTopLoader } from 'nextjs-toploader';

const LangSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const loader = useTopLoader();
    const locale = useLocale();
    const newLocale = locale === 'ar' ? 'en' : 'ar';

    const switchLocale = () => {
        loader.start();

        // تقسيم المسار واستبدال أول جزء (اللغة)
        const segments = pathname.split('/');
        segments[1] = newLocale; // أول جزء بعد "/" هو اللغة
        const newPath = segments.join('/');

        router.push(newPath);
    };

    return (
        <Button className='h-6 !bg-transparent !px-0' variant='ghost' onClick={switchLocale}>
            <i>
                <Globe />
            </i>
            <span className='uppercase'>{newLocale}</span>
        </Button>
    );
};

export default LangSwitcher;
