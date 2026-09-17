'use client';

import { navLinks } from '@/constants';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

import NavLink from '../ui/NavLink';

// import { useTranslations } from 'next-intl';

const NavLinks = () => {
    // const t = useTranslations('nav');

    return (
        <>
            {navLinks.map((link) => (
                <li key={link.id}>
                    {/* <Link
                        href={link.href}
                        title={link.title}
                        className={cn(
                            'border-b border-transparent duration-300'
                            // isActive ? customStyle.active || 'border-b-foreground' : customStyle.default || 'nav-link'
                        )}>
                        {link.title}
                    </Link> */}
                    <NavLink href={link.href} title={link.title} />
                </li>
            ))}
        </>
    );
};

export default NavLinks;
