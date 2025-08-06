import React from 'react';

import Link from 'next/link';

const Heading = ({
    title = 'dummy title',
    link = { href: '/products', desc: 'view all products' }
}: {
    title?: string;
    link?: { href?: string; desc?: string };
}) => {
    return (
        <>
            <div className='flex items-center justify-between gap-4 py-6'>
                <h2 className='text-lg uppercase md:text-xl lg:text-2xl'>{title}</h2>
                <Link href={link.href as string} className='text-foreground hovered-underlined md:text-lg lg:text-xl'>
                    {link.desc}
                </Link>
            </div>
        </>
    );
};

export default Heading;
