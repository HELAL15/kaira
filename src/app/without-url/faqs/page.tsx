import Link from 'next/link';

import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import ContactForm from '@/components/contact/ContactForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const page = () => {
    const faqs = [
        {
            id: 1,
            title: 'How to order products?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 2,
            title: 'Should buy online compulsory?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 3,
            title: 'Can i get discounts in products?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 4,
            title: 'What informations should i need to provide when ordering?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 5,
            title: 'Can i cancel my order?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 6,
            title: "What's your return policy",
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 7,
            title: "I haven't received my order",
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 8,
            title: 'How is shipping charge determined?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        },
        {
            id: 9,
            title: 'Where is your shop located?',
            desc: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.'
        }
    ];

    return (
        <>
            <main>
                <SectionHeading title='FAQS' />
                <section>
                    <div className='container py-8'>
                        <div className='grid grid-cols-12 gap-6'>
                            <div className='col-span-full space-y-6 lg:col-span-8'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl uppercase md:text-3xl'>Frequently asked questions</h2>
                                    <p className='flex flex-wrap items-center gap-1'>
                                        Malesuada nunc vel risus commodo viverra. Viverra accumsan in nisl nisi. Pretium
                                        nibh ipsum consequat nisl vel pretium. Tortor dignissim convallis aenean et
                                        tortor at risus viverra adipiscing.
                                    </p>
                                </div>
                                <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                                    {faqs.map((faq) => (
                                        <AccordionItem key={faq.id} value={`item-${faq.id}`} className='py-3'>
                                            <AccordionTrigger className='text-xl uppercase md:text-2xl'>
                                                {faq.title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {faq.desc || 'No description available.'}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                            <div className='col-span-full space-y-6 lg:col-span-4'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl uppercase md:text-3xl'>Ask us anything</h2>
                                    <p className='flex flex-wrap items-center gap-1'>
                                        Call Us at +123 987 456
                                        {/* <Link className='nav-link' href={'tel:+123 987 456'}>
                                        </Link>{' '} */}
                                        or just drop us your message at
                                        <Link className='nav-link' href={'mailto:contact@yourcompany.com'}>
                                            contact@yourcompany.com.
                                        </Link>
                                        You can directly message us.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
