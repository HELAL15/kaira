'use client';

import { Link, usePathname } from '@/i18n/navigation';
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
    const isActive = href === pathname;
    const t = useTranslations('nav');

    return (
        <Link
            href={href}
            title={title}
            aria-label={title}
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
