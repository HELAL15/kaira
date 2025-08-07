import Link from 'next/link';

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const SocialLinks = () => {
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
            <div className='flex items-center gap-4'>
                {social.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href as string}
                        aria-label={item.href as string}
                        className='text-gray hover:text-foreground transition-colors'>
                        <i>{item.icon}</i>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;
