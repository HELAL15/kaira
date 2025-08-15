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
    // Remove locale prefix and normalize empty to "/"
    const normalizePath = (path: string) => {
        const withoutLocale = path.replace(/^\/(ar|en)(?=\/|$)/, '');
        return withoutLocale === '' ? '/' : withoutLocale;
    };

    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    const isActive = currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
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
