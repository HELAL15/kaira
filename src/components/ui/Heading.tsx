import React from 'react';

import Link from 'next/link';

const Heading = ({
    title = 'dummy title',
    link = { href: '', desc: 'view all' }
}: {
    title?: string;
    link?: { href?: string; desc?: string };
}) => {
    return (
        <>
            <div className='flex items-center justify-between gap-4 py-6'>
                <h2 className='!text-foreground text-lg uppercase md:text-xl lg:text-2xl'>{title}</h2>
                {link.href && link.desc && (
                    <Link
                        href={link.href as string}
                        className='!text-foreground hovered-underlined md:text-lg lg:text-xl'>
                        {link.desc}
                    </Link>
                )}
            </div>
        </>
    );
};

export default Heading;
