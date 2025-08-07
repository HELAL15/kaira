import Link from 'next/link';

import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';
import SocialLinks from '@/components/common/SocialLinks';
import ContactForm from '@/components/contact/ContactForm';

const page = () => {
    const sitesData = [
        {
            id: 1,
            title: 'usa',
            tels: ['+123 987 321', '+123 123 654'],
            address: '730 Glenstone Ave 65802, Springfield, US',
            email: 'kaira@templatesjungle.com'
        },
        {
            id: 2,
            title: 'France',
            tels: ['+123 987 321', '+123 123 654'],
            address: '13 Rue Montmartre 75001, Paris, France',
            email: 'kaira@templatesjungle.com'
        },
        {
            id: 3,
            title: 'Office',
            tels: ['+123 987 321', '+123 123 654'],
            address: '18 Chapel Brow PR25 3NE, Leyland, UK',
            email: 'kaira@templatesjungle.com'
        }
    ];

    const contactInfo = [
        {
            id: 1,
            title: 'head office',
            tels: ['+123 987 321', '+123 123 654'],
            address: '730 Glenstone Ave 65802, Springfield, US',
            email: 'kaira@templatesjungle.com'
        },
        {
            id: 2,
            title: 'branch office',
            tels: ['+123 987 321', '+123 123 654'],
            address: '13 Rue Montmartre 75001, Paris, France',
            email: 'kaira@templatesjungle.com'
        }
    ];

    return (
        <>
            <main>
                <SectionHeading title='contact us' />

                <section>
                    <div className='container py-8'>
                        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl uppercase md:text-3xl'>Contact information</h2>
                                    <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                                </div>
                                <ul className='space-y-4'>
                                    {contactInfo.map((info) => (
                                        <li key={info.id} className='space-y-2'>
                                            <h3 className='text-xl uppercase md:text-2xl'>{info.title}</h3>
                                            <address>{info.address}</address>
                                            <p className='flex flex-wrap items-center gap-4'>
                                                {info.tels.map((tel, index) => (
                                                    <Link className='nav-link' href={`tel:${tel}`} key={index}>
                                                        {tel}
                                                    </Link>
                                                ))}
                                            </p>
                                            <Link className='nav-link' href={`mailto:${info.email}`}>
                                                {info.email}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className='space-y-2'>
                                        <h3 className='text-xl uppercase md:text-2xl'>social info</h3>
                                        <SocialLinks />
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h2 className='text-2xl uppercase md:text-3xl'>Got any questions?</h2>
                                    <p>Use the form below to get in touch with us.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-background-secondary'>
                    <div className='container py-8'>
                        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {sitesData.map((site) => (
                                <li key={site.id} className='card space-y-3'>
                                    <h4 className='text-foreground font-marcellus text-xl uppercase'>{site.title}</h4>
                                    <div className='space-y-2'>
                                        <address>{site.address}</address>
                                        <p className='flex flex-wrap items-center gap-4'>
                                            {site.tels.map((tel, index) => (
                                                <Link className='nav-link' href={`tel:${tel}`} key={index}>
                                                    {tel}
                                                </Link>
                                            ))}
                                        </p>
                                        <Link className='nav-link' href={`mailto:${site.email}`}>
                                            {site.email}
                                        </Link>
                                    </div>
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
