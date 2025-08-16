import React from 'react';

import { Metadata } from 'next';
import Image from 'next/image';

import BlogCard from '@/components/blog/BlogCard';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import CommentForm from '@/components/singleBlog/CommentForm';
import { Button } from '@/components/ui/Button';
import { blogs } from '@/constants/data';

export const metadata: Metadata = {
    title: 'Blog - KAIRA',
    description: 'Read our latest blog posts on fashion, lifestyle, and more.'
};

const page = () => {
    return (
        <>
            <main>
                <section>
                    <div className='divide-background-secondary container space-y-6 divide-y'>
                        <div className='info space-y-4 pb-6'>
                            <Image
                                src='/images/post1.jpg'
                                alt='Blog Image'
                                width={0}
                                height={600}
                                priority
                                draggable='false'
                                sizes='100vw'
                                className='h-[350px] w-full object-cover md:h-[600px]'
                            />
                            <div className='space-y-2'>
                                <div className={'flex items-center gap-2 text-xl uppercase'}>
                                    <span>{'Fashion'}</span>
                                    <span>/</span>
                                    <span>{'12 jan, 2022'}</span>
                                </div>
                                <h2
                                    className={
                                        'text-foreground text-2xl uppercase md:text-4xl lg:text-5xl xl:text-6xl'
                                    }>
                                    {'How to look outstanding in pastel colour dress'}
                                </h2>
                                <div className='space-y-6'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis
                                        vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur
                                        sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer.
                                        Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod
                                        orci sem amet, et. Turpis erat ornare nisi laoreet est euismod. Sit suscipit
                                        tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur
                                        non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim,
                                        lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis.
                                        Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                        aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                        malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit
                                        ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                        imperdiet vitae eu, eu tincidunt nunc integer sit. “Sit suscipit tortor turpis
                                        sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet
                                        orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.
                                    </p>
                                    <article className='space-y-4'>
                                        <h3 className='text-2xl uppercase'>Consectetur Facilisis Vivamus</h3>
                                        <p>
                                            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                            malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                                            sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                            imperdiet vitae eu, eu tincidunt nunc integer sit.
                                        </p>
                                    </article>
                                    <article className='space-y-4'>
                                        <Image
                                            src='/images/hero2.jpg'
                                            alt='Blog Image'
                                            width={0}
                                            height={300}
                                            priority
                                            draggable='false'
                                            sizes='100vw'
                                            className='h-[250px] w-auto object-contain md:h-[300px]'
                                        />
                                        <p>
                                            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                            malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                                            sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                            imperdiet vitae eu, eu tincidunt nunc integer sit. Urna in sollicitudin in
                                            vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis
                                            tellus nunc integer vitae neque bibendum eget. Tempus malesuada et
                                            pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare.
                                            Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet
                                            vitae eu, eu tincidunt nunc integer sit.
                                        </p>
                                        <p>
                                            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                            malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                                            sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                            imperdiet vitae eu, eu tincidunt nunc integer sit.
                                        </p>
                                        <p>
                                            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                            malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                                            sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                            imperdiet vitae eu, eu tincidunt nunc integer sit. Urna in sollicitudin in
                                            vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis
                                            tellus nunc integer vitae neque bibendum eget. Tempus malesuada et
                                            pellentesque maecenas. Sociis porttitor elit tincidunt tellus sit ornare.
                                            Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet
                                            vitae eu, eu tincidunt nunc integer sit.
                                        </p>
                                        <p>
                                            Urna in sollicitudin in vestibulum erat. Turpis faucibus augue ipsum, at
                                            aliquam. Cras sagittis tellus nunc integer vitae neque bibendum eget. Tempus
                                            malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                                            sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent
                                            imperdiet vitae eu, eu tincidunt nunc integer sit.
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className='author space-y-4 pb-6'>
                            <h3 className='text-2xl uppercase'>Author</h3>
                            <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                <Image
                                    src='/images/author.jpg'
                                    alt='Author Image'
                                    width={0}
                                    height={100}
                                    priority
                                    draggable='false'
                                    sizes='100vw'
                                    className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                />
                                <div className='flex-grow'>
                                    <h4 className='font-bold uppercase'>Anna Younes</h4>
                                    <p>Fashion designer</p>
                                    <p>
                                        Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum
                                        a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec
                                        pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo,
                                        lectus. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros
                                        purus fermentum, massa ullamcorper sit sollicitudin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='comments space-y-4'>
                            <h3 className='text-2xl uppercase'>3 Comments</h3>
                            <div className='divide-background-secondary space-y-4 divide-y'>
                                <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                    <Image
                                        src='/images/author.jpg'
                                        alt='Author Image'
                                        width={0}
                                        height={100}
                                        priority
                                        draggable='false'
                                        sizes='100vw'
                                        className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                    />
                                    <div className='space-y-6'>
                                        <div className='space-y-1'>
                                            <div className='flex items-center gap-4'>
                                                <h4 className='font-bold uppercase'>Anna Younes</h4>
                                                <span className='text-sm'>12 jan, 2022</span>
                                            </div>
                                            <p className=''>
                                                Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam
                                                nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
                                                viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut
                                                diam lobortis eget leo, lectus. Tortor diam dignissim amet, in interdum
                                                aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit
                                                sollicitudin.
                                            </p>
                                            <Button
                                                size={'sm'}
                                                variant={'ghost'}
                                                className='nav-link hover:bg-transparent'>
                                                reply
                                            </Button>
                                        </div>
                                        <div className='flex gap-4 pb-4 max-md:flex-wrap max-md:px-6'>
                                            <Image
                                                src='/images/author.jpg'
                                                alt='Author Image'
                                                width={0}
                                                height={100}
                                                priority
                                                draggable='false'
                                                sizes='100vw'
                                                className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                            />
                                            <div className='space-y-1'>
                                                <div className='flex items-center gap-4'>
                                                    <h4 className='font-bold uppercase'>Anna Younes</h4>
                                                    <span className='text-sm'>12 jan, 2022</span>
                                                </div>
                                                <p className=''>
                                                    Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam
                                                    nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non
                                                    viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut
                                                    diam lobortis eget leo, lectus. Tortor diam dignissim amet, in
                                                    interdum aliquet. Magnis dictum et eros purus fermentum, massa
                                                    ullamcorper sit sollicitudin.
                                                </p>
                                                <Button
                                                    size={'sm'}
                                                    variant={'ghost'}
                                                    className='nav-link hover:bg-transparent'>
                                                    reply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                    <Image
                                        src='/images/author.jpg'
                                        alt='Author Image'
                                        width={0}
                                        height={100}
                                        priority
                                        draggable='false'
                                        sizes='100vw'
                                        className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                    />
                                    <div className='space-y-1'>
                                        <div className='flex items-center gap-4'>
                                            <h4 className='font-bold uppercase'>Anna Younes</h4>
                                            <span className='text-sm'>12 jan, 2022</span>
                                        </div>
                                        <p className=''>
                                            Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec,
                                            rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec
                                            pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget
                                            leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum
                                            et eros purus fermentum, massa ullamcorper sit sollicitudin.
                                        </p>
                                        <Button size={'sm'} variant={'ghost'} className='nav-link hover:bg-transparent'>
                                            reply
                                        </Button>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-4 max-md:flex-wrap'>
                                    <Image
                                        src='/images/author.jpg'
                                        alt='Author Image'
                                        width={0}
                                        height={100}
                                        priority
                                        draggable='false'
                                        sizes='100vw'
                                        className='size-[60px] object-cover md:size-[80px] lg:size-[100px]'
                                    />
                                    <div className='space-y-1'>
                                        <div className='flex items-center gap-4'>
                                            <h4 className='font-bold uppercase'>Anna Younes</h4>
                                            <span className='text-sm'>12 jan, 2022</span>
                                        </div>
                                        <p className=''>
                                            Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec,
                                            rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec
                                            pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget
                                            leo, lectus. Tortor diam dignissim amet, in interdum aliquet. Magnis dictum
                                            et eros purus fermentum, massa ullamcorper sit sollicitudin.
                                        </p>
                                        <Button size={'sm'} variant={'ghost'} className='nav-link hover:bg-transparent'>
                                            reply
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-xl uppercase'>Leave a comment</h4>
                                <CommentForm />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <h5 className='text-2xl uppercase'>related posts</h5>
                        <ul className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                            {blogs.slice(0, 3).map((blog) => (
                                <li key={blog.id}>
                                    <BlogCard variant='sm' blog={blog} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
