'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';

interface IProps {
    href: string;
    title: string;
    cx?: string;
    customStyle?:
        | {
              active: string;
              default: string;
          }
        | undefined;
}

const NavLink = ({ href, title, cx, customStyle = { active: '', default: '' } }: IProps) => {
    const pathname = usePathname();
    // Remove locale prefix and normalize empty to "/"
    const normalizePath = (path: string) => {
        const withoutLocale = path.replace(/^\/(ar|en)(?=\/|$)/, '');
        return withoutLocale === '' ? '/' : withoutLocale;
    };

    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    const isActive =
        currentPath === targetPath || (currentPath.startsWith(`${targetPath}/`) && targetPath !== '/profile');
    const t = useTranslations('nav');

    const router = useRouter();

    const handleMouseEnter = () => {
        router.prefetch(href);
    };

    return (
        <Link
            href={href}
            title={title}
            aria-label={title}
            prefetch={false}
            onMouseEnter={handleMouseEnter}
            replace
            className={cn(
                'border-b border-transparent duration-300',
                isActive ? customStyle.active || 'border-b-foreground' : customStyle.default || 'nav-link',
                cx
            )}>
            {t(title)}
        </Link>
    );
};

export default NavLink;
