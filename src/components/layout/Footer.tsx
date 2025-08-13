import Image from 'next/image';
import Link from 'next/link';

import NavLinks from '../common/NavLinks';
import SocialLinks from '../common/SocialLinks';
import ThemeSwitch from '../common/ThemeSwitch';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';

const Footer = () => {
    const helpLinks = [
        {
            id: 1,
            title: 'track your order',
            href: '/order-tracking'
        },
        {
            id: 2,
            title: 'return + exchanges',
            href: '/returns'
        },
        {
            id: 3,
            title: 'shipping + delivery',
            href: '/shipping'
        },
        {
            id: 4,
            title: 'contact us',
            href: '/contact'
        },
        {
            id: 5,
            title: 'find us easy',
            href: '/find-us'
        },
        {
            id: 6,
            title: 'faqs',
            href: '/faqs'
        }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className='text-foreground dark:bg-background bg-background-secondary dark:border-t-gray/30 relative z-10 min-h-[250px] border-t border-t-white'>
                <div className='divide-background dark:divide-gray container divide-y'>
                    <div className='grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <div className='space-y-2'>
                            <Logo />
                            <p className='text-gray'>
                                Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam
                                in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                            </p>
                            <SocialLinks />
                        </div>
                        <div className='space-y-4'>
                            <h6 className='font-marcellus block text-2xl font-semibold uppercase'>quick links</h6>
                            <ul className='space-y-2 uppercase'>
                                <NavLinks />
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h6 className='font-marcellus block text-2xl font-semibold uppercase'>help & info</h6>
                            <ul className='space-y-2 uppercase'>
                                {helpLinks.map((link) => (
                                    <li key={link.id}>
                                        <NavLink href={link.href} title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h6 className='font-marcellus block text-2xl font-semibold uppercase'>contact us</h6>
                            <div className='text-gray space-y-4'>
                                <address className='space-y-1 *:block'>
                                    <p className=''>Do you have any questions or suggestions?</p>
                                    <Link
                                        aria-label='email'
                                        href={'mailto:1ahmedhelal1@gmail.com'}
                                        className='text-foreground nav-link'>
                                        contact@yourcompany.com
                                    </Link>
                                </address>
                                <div className='space-y-1'>
                                    <p className=''>Do you need support? Give us a call.</p>
                                    <Link
                                        aria-label='mobile'
                                        href={'tel:01551610991'}
                                        className='text-foreground nav-link'>
                                        +43 720 115 278
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-4 py-8'>
                        <p className='text-gray'>&copy; copyright {currentYear} kaira all right reserved</p>
                        <ThemeSwitch />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
