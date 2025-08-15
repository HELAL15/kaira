'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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

    const router = useRouter();

    return (
        <Link
            href={href}
            title={title}
            aria-label={title}
            prefetch={false}
            onMouseEnter={() => router.prefetch(`/${title}`)}
            className={cn('border-b border-transparent duration-300', isActive ? 'border-b-foreground' : 'nav-link')}>
            {t(title)}
        </Link>
    );
};

export default NavLink;
