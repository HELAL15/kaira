import Image from 'next/image';
import Link from 'next/link';

import NavLinks from '../common/NavLinks';
import ThemeSwitch from '../common/ThemeSwitch';
import NavLink from '../ui/NavLink';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    const helpLinks = [
        {
            id: 1,
            title: 'track your order',
            href: '/track-order'
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

    const social = [
        {
            id: 1,
            icon: <Facebook />,
            href: 'https://www.facebook.com'
        },
        {
            id: 2,
            icon: <Twitter />,
            href: 'https://www.x.com'
        },
        {
            id: 3,
            icon: <Youtube />,
            href: 'https://www.youtube.com'
        },
        {
            id: 4,
            icon: <Instagram />,
            href: 'https://www.instagram.com'
        }
    ];

    return (
        <>
            <footer className='text-foreground bg-background-secondary relative z-10 py-16'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <div className='space-y-2'>
                            <Link href={'/'} className='block w-[60px] shrink-0 md:w-[100px] xl:w-[110px]'>
                                <Image
                                    width={0}
                                    height={0}
                                    loading='eager'
                                    className='h-full w-full object-contain'
                                    src={'/logo.svg'}
                                    alt='kaira logo'
                                />
                            </Link>
                            <p className='text-foreground/60'>
                                Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam
                                in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                            </p>
                            <div className='flex items-center gap-4'>
                                {social.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href as string}
                                        className='text-foreground/60 hover:text-foreground transition-colors'>
                                        <i>{item.icon}</i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <span className='font-marcellus block text-2xl font-semibold uppercase'>quick links</span>
                            <ul className='space-y-2 uppercase'>
                                <NavLinks />
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <span className='font-marcellus block text-2xl font-semibold uppercase'>help & info</span>
                            <ul className='space-y-2 uppercase'>
                                {helpLinks.map((link) => (
                                    <NavLink key={link.id} href={link.href} title={link.title} />
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <span className='font-marcellus block text-2xl font-semibold uppercase'>contact us</span>
                            <ul className='space-y-4'>
                                <li>
                                    <address className='space-y-1 *:block'>
                                        <p className='text-gray'>Do you have any questions or suggestions?</p>
                                        <Link
                                            href={'mailto:1ahmedhelal1@gmail.com'}
                                            className='text-foreground nav-link'>
                                            contact@yourcompany.com
                                        </Link>
                                    </address>
                                </li>
                                <li>
                                    <div className='space-y-1'>
                                        <p className='text-gray'>Do you need support? Give us a call.</p>
                                        <Link href={'tel:01551610991'} className='text-foreground nav-link'>
                                            +43 720 115 278
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
