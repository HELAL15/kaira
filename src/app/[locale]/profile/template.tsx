import React, { ReactNode } from 'react';

const template = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className='flex gap-8'>
                <aside>profile aside</aside>

                {children}
            </div>
        </>
    );
};

export default template;
