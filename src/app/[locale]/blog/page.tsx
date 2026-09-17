import { Metadata } from 'next';
import Image from 'next/image';

import BlogCard from '@/components/blog/BlogCard';
import SearchBlogForm from '@/components/blog/SearchBlogForm';
import FormInput from '@/components/common/FormInput';
import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import Heading from '@/components/ui/Heading';
import { blogs } from '@/constants/data';

import { FormProvider } from 'react-hook-form';

export const metadata: Metadata = {
    title: 'Blog - KAIRA'
};

const page = () => {
    return (
        <>
            <main className='overflow-hidden'>
                <SectionHeading title='blog' />
                <section>
                    <div className='container'>
                        <Heading title='all blogs' />
                        <div className='grid grid-cols-12 gap-6'>
                            <ul className='order-1 col-span-full space-y-8 max-lg:order-2 lg:col-span-9'>
                                {blogs.map((blog) => (
                                    <li key={blog.id}>
                                        <BlogCard blog={blog} />
                                    </li>
                                ))}
                            </ul>
                            <SearchBlogForm />
                        </div>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
