import Image from 'next/image';
import Link from 'next/link';

import NavLinks from '../common/NavLinks';
import SocialLinks from '../common/SocialLinks';
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

    return (
        <>
            <footer className='text-foreground bg-background-secondary relative z-10 min-h-[250px] py-16'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <div className='space-y-2'>
                            <Link href={'/'} className='block w-[60px] shrink-0 md:w-[100px] xl:w-[110px]'>
                                <Image
                                    width={0}
                                    height={0}
                                    loading='eager'
                                    priority
                                    className='h-full w-[60px] shrink-0 object-contain md:w-[100px] xl:w-[110px]'
                                    src={'/logo.svg'}
                                    alt='kaira logo'
                                />
                            </Link>
                            <p className='text-gray-700'>
                                Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam
                                in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                            </p>
                            <SocialLinks />
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
                                    <li key={link.id}>
                                        <NavLink href={link.href} title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <span className='font-marcellus block text-2xl font-semibold uppercase'>contact us</span>
                            <ul className='space-y-4 text-gray-700'>
                                <li>
                                    <address className='space-y-1 *:block'>
                                        <p className=''>Do you have any questions or suggestions?</p>
                                        <Link
                                            aria-label='email'
                                            href={'mailto:1ahmedhelal1@gmail.com'}
                                            className='text-foreground nav-link'>
                                            contact@yourcompany.com
                                        </Link>
                                    </address>
                                </li>
                                <li>
                                    <div className='space-y-1'>
                                        <p className=''>Do you need support? Give us a call.</p>
                                        <Link
                                            aria-label='mobile'
                                            href={'tel:01551610991'}
                                            className='text-foreground nav-link'>
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
