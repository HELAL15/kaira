'use client';

import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';

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
            <div className='aos-init open-up relative h-dvh' data-aos='zoom-out'>
                <img
                    src='/images/video-image.jpg'
                    alt='Poster'
                    className={cn('h-full w-full object-cover', !isPaused && 'hidden')}
                />
                {/* <div className='absolute inset-0 z-40 h-full w-full'>
                    <button
                        onClick={toggleControl}
                        className='absolute inset-1/2 z-50 mb-4 w-fit rounded bg-black px-4 py-2 text-white'>
                        تشغيل الفيديو
                    </button>
                </div>
                <video
                    ref={videoRef}
                    muted
                    onPlay={handlePlay}
                    onPause={handlePause}
                    className='relative z-20 h-full w-full object-cover'>
                    <source src='/images/video.mp4' type='video/mp4' />
                </video> */}
            </div>
        </>
    );
}
