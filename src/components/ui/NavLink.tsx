'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

interface IProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: IProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const t = useTranslations('nav');

    return (
        <Link
            href={href}
            title={title}
            aria-label={title}
            className={cn('border-b border-transparent duration-300', isActive ? 'border-b-foreground' : 'nav-link')}>
            {t(title)}
        </Link>
    );
};

export default NavLink;
