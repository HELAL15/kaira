'use client';

import { ReactNode, useEffect } from 'react';

import AOS from 'aos';

const AnimateAOS = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    return <>{children}</>;
};

export default AnimateAOS;
