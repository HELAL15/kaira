import React from 'react';

import AnimateAOS from '@/components/common/AnimateAOS';
import { Card, CardContent } from '@/components/ui/card';

import { Calendar } from 'lucide-react';

const Proccess = () => {
    return (
        <>
            <section className='bg-background'>
                <AnimateAOS>
                    <div className='container py-8'>
                        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Card
                                    key={index}
                                    className='aos-init border-0 bg-transparent px-0 shadow-none'
                                    data-aos='fade-in'
                                    data-aos-delay={(index + 1) * 200}>
                                    <CardContent className='flex flex-col items-center justify-center space-y-2 px-0 text-center'>
                                        <i>
                                            <Calendar size={45} opacity={0.5} />
                                        </i>
                                        <h2 className='text-xl md:text-2xl xl:text-3xl'>book an appointment</h2>
                                        <p className=''>
                                            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.{' '}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </AnimateAOS>
            </section>
        </>
    );
};

export default Proccess;
