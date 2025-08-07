import SectionHeading from '@/components/common/SectionHeading';
import SignUpNewsletter from '@/components/common/SignUpNewsletter';

const page = () => {
    return (
        <>
            <main>
                <SectionHeading title='wishlist' />
                <section>
                    <div className='container'></div>
                </section>
                <SignUpNewsletter />
            </main>
        </>
    );
};

export default page;
