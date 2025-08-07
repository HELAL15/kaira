'use client';

import { useRef, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { Play } from 'lucide-react';

export default function Story() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPaused, setIsPaused] = useState(true);

    const handlePlay = () => {
        setIsPaused(false);
        videoRef.current?.play();
    };

    const handlePause = () => {
        setIsPaused(true);
        videoRef.current?.pause();
    };

    const toggleControl = () => {
        if (isPaused) {
            handlePlay();
        } else {
            handlePause();
        }
    };

    return (
        <>
            <section className='open-up aos-init overflow-hidden p-0' data-aos='zoom-out'>
                <div className='relative h-[250px] md:h-[400px] lg:h-[80dvh]'>
                    <Dialog>
                        <DialogTrigger className='group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                            <div className='relative flex size-[120px] items-center justify-center md:size-[200px] lg:size-[250px]'>
                                {/* Animated circular text */}
                                <div className='animate-spin-slow absolute inset-0 overflow-visible'>
                                    <svg
                                        className='h-full w-full overflow-visible'
                                        viewBox='0 0 120 120'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <defs>
                                            <path
                                                id='circle-path'
                                                d='M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0'
                                            />
                                        </defs>
                                        <text className='fill-white text-sm tracking-wider'>
                                            <textPath href='#circle-path' startOffset='0%'>
                                                CLASSIC COLLECTION 2025 • CLASSIC COLLECTION 2025 •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>

                                {/* Play icon in center */}
                                <div className='relative z-10 p-4 shadow-none transition-all duration-300 group-hover:scale-110'>
                                    <Play className='ml-1 size-8 text-white md:size-10 lg:size-12' />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className='rounded-none shadow-none md:min-w-[600px] lg:min-w-[800px]'>
                            <DialogHeader className='hidden'>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account and remove
                                    your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                            <iframe
                                width='0'
                                className='w-full object-cover'
                                height='315'
                                src='https://www.youtube.com/embed/3knHALzEC7M?si=Khrr_wqAe8OBo36t'
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'></iframe>
                        </DialogContent>
                    </Dialog>
                    <img
                        src='/images/video-image.jpg'
                        alt='Poster'
                        className={cn('h-full w-full object-cover', !isPaused && 'hidden')}
                    />
                </div>
            </section>
        </>
    );
}
