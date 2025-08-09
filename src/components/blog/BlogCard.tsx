import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Blog {
    id?: number;
    title?: string;
    img?: string;
    date?: string;
    category?: string;
    description?: string;
}

interface BlogCardProps {
    blog?: Blog;
    variant?: string;
}

const BlogCard = ({ blog = {}, variant = 'lg' }: BlogCardProps) => {
    const {
        title = 'How to look outstanding in pastel',
        img = '/images/hero4.jpg',
        date = ' 12 jan, 2022',
        category = 'Fashion',
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    } = blog || {};

    const variants: {
        [key: string]: {
            title: string;
            img: string;
            date: string;
        };
    } = {
        lg: {
            title: ' text-2xl md:text-4xl lg:text-5xl xl:text-6xl',
            img: ' h-[250px] md:h-[550px]',
            date: 'text-xl'
        },
        sm: {
            title: 'text-2xl',
            img: ' h-[220px] md:h-[300px]',
            date: 'text-base'
        }
    };

    return (
        <>
            <Link href={`/blog/${blog.id}`} className='card aos init space-y-4' data-aos='fade-in'>
                <Image
                    src={img as string}
                    alt='Blog Image'
                    width={0}
                    height={550}
                    loading='lazy'
                    draggable='false'
                    sizes='100vw'
                    className={cn('w-full object-cover', variants[variant]?.img)}
                />
                <div className='space-y-2'>
                    <div className={cn('flex items-center gap-2 uppercase', variants[variant]?.date)}>
                        <span>{category}</span>
                        <span>/</span>
                        <span>{date}</span>
                    </div>
                    <h2 className={cn('text-foreground uppercase', variants[variant]?.title)}>{title}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;
