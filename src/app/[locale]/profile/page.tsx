import React from 'react';

import { Metadata } from 'next';

import ProfileForm from '@/components/profile/ProfileForm';

export const metadata: Metadata = {
    title: 'profile - kaira'
};

const page = () => {
    return (
        <>
            <ProfileForm />
        </>
    );
};

export default page;
