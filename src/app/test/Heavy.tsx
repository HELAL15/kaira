import React from 'react';

const Heavy = () => {
    console.log('Heavy component rendered');

    const startPlay = performance.now();

    // Simulating a heavy computation
    // for (let i = 0; i < 1e7; i++) {
    //     Math.sqrt(i);
    // }

    while (performance.now() - startPlay < 1000) {
        // This loop will run for approximately 1 second
        // It simulates a heavy computation
        // You can replace this with any heavy computation logic you want
    }

    return <div>it is a heavy component</div>;
};

export default Heavy;
