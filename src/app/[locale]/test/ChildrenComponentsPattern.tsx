'use client';

import { ReactNode, useState } from 'react';

import { Button } from '@/components/ui/Button';

const ChildrenComponentsPattern = ({ children }: { children?: ReactNode }) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>Children Components Pattern</h1>
                <p>Count: {count}</p>
                <Button variant={'dark'} onClick={() => setCount(count + 1)}>
                    Increment
                </Button>
                <Button variant={'dark'} onClick={() => setCount(count - 1)}>
                    Decrement
                </Button>
            </div>
            {children}
            {/* <Heavy /> */}
        </>
    );
};

export default ChildrenComponentsPattern;
