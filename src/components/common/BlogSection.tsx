import React from 'react';

import BlogCard from '../blog/BlogCard';
import Heading from '../ui/Heading';

const BlogSection = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <Heading
                        title='Read Blog Posts'
                        link={{
                            href: '/blog',
                            desc: 'view all'
                        }}
                    />
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        <BlogCard variant='sm' />
                        <BlogCard variant='sm' />
                        <BlogCard variant='sm' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSection;
