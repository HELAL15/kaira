'use client';

import { Link, usePathname } from '@/i18n/navigation';

import { Button } from '../ui/Button';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

const LangSwitcher = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const nextLocale = locale === 'en' ? 'ar' : 'en';

    return (
        <Link href={`${pathname}`} locale={nextLocale}>
            <Button size={'sm'} variant={'ghost'} className='bg-transparent! px-0!'>
                <Globe />
                {locale === 'en' ? 'AR' : 'En'}
            </Button>
        </Link>
    );
};

export default LangSwitcher;
