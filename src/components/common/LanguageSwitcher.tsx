// 'use client';

// import React from 'react';

// import { usePathname, useRouter } from 'next/navigation';

// import { Button } from '../ui/Button';
// import Cookies from 'js-cookie';
// import { Globe } from 'lucide-react';
// import { useLocale } from 'next-intl';
// import { useTopLoader } from 'nextjs-toploader';

// const LangSwitcher = () => {
//     const router = useRouter();
//     const path = usePathname();
//     const loader = useTopLoader();
//     const locale = useLocale();
//     const localeSetter = locale === 'ar' ? 'en' : 'ar';
//     const setLocale = (locale: string) => {
//         Cookies.set('locale', locale, { path: '/' });
//         router.push(path);
//         loader.start();
//         router.refresh();
//     };

//     return (
//         <>
//             <Button className='h-6 !bg-transparent !px-0' variant={'ghost'} onClick={() => setLocale(localeSetter)}>
//                 <i>
//                     <Globe />
//                 </i>
//                 <span className='uppercase'>{localeSetter}</span>
//             </Button>
//         </>
//     );
// };

// export default LangSwitcher;

'use client';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '../ui/Button';
import Cookies from 'js-cookie';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useTopLoader } from 'nextjs-toploader';

// 'use client';

// import React from 'react';

// import { usePathname, useRouter } from 'next/navigation';

// import { Button } from '../ui/Button';
// import Cookies from 'js-cookie';
// import { Globe } from 'lucide-react';
// import { useLocale } from 'next-intl';
// import { useTopLoader } from 'nextjs-toploader';

// const LangSwitcher = () => {
//     const router = useRouter();
//     const path = usePathname();
//     const loader = useTopLoader();
//     const locale = useLocale();
//     const localeSetter = locale === 'ar' ? 'en' : 'ar';
//     const setLocale = (locale: string) => {
//         Cookies.set('locale', locale, { path: '/' });
//         router.push(path);
//         loader.start();
//         router.refresh();
//     };

//     return (
//         <>
//             <Button className='h-6 !bg-transparent !px-0' variant={'ghost'} onClick={() => setLocale(localeSetter)}>
//                 <i>
//                     <Globe />
//                 </i>
//                 <span className='uppercase'>{localeSetter}</span>
//             </Button>
//         </>
//     );
// };

// export default LangSwitcher;

// 'use client';

// import React from 'react';

// import { usePathname, useRouter } from 'next/navigation';

// import { Button } from '../ui/Button';
// import Cookies from 'js-cookie';
// import { Globe } from 'lucide-react';
// import { useLocale } from 'next-intl';
// import { useTopLoader } from 'nextjs-toploader';

// const LangSwitcher = () => {
//     const router = useRouter();
//     const path = usePathname();
//     const loader = useTopLoader();
//     const locale = useLocale();
//     const localeSetter = locale === 'ar' ? 'en' : 'ar';
//     const setLocale = (locale: string) => {
//         Cookies.set('locale', locale, { path: '/' });
//         router.push(path);
//         loader.start();
//         router.refresh();
//     };

//     return (
//         <>
//             <Button className='h-6 !bg-transparent !px-0' variant={'ghost'} onClick={() => setLocale(localeSetter)}>
//                 <i>
//                     <Globe />
//                 </i>
//                 <span className='uppercase'>{localeSetter}</span>
//             </Button>
//         </>
//     );
// };

// export default LangSwitcher;

// 'use client';

// import React from 'react';

// import { usePathname, useRouter } from 'next/navigation';

// import { Button } from '../ui/Button';
// import Cookies from 'js-cookie';
// import { Globe } from 'lucide-react';
// import { useLocale } from 'next-intl';
// import { useTopLoader } from 'nextjs-toploader';

// const LangSwitcher = () => {
//     const router = useRouter();
//     const path = usePathname();
//     const loader = useTopLoader();
//     const locale = useLocale();
//     const localeSetter = locale === 'ar' ? 'en' : 'ar';
//     const setLocale = (locale: string) => {
//         Cookies.set('locale', locale, { path: '/' });
//         router.push(path);
//         loader.start();
//         router.refresh();
//     };

//     return (
//         <>
//             <Button className='h-6 !bg-transparent !px-0' variant={'ghost'} onClick={() => setLocale(localeSetter)}>
//                 <i>
//                     <Globe />
//                 </i>
//                 <span className='uppercase'>{localeSetter}</span>
//             </Button>
//         </>
//     );
// };

// export default LangSwitcher;

const LangSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const loader = useTopLoader();
    const currentLocale = useLocale();
    const nextLocale = currentLocale === 'ar' ? 'en' : 'ar';

    const setLocale = (locale: string) => {
        // Save locale in cookies for middleware
        // Cookies.set('locale', locale, { path: '/' });

        // Replace current locale segment in the URL
        const segments = pathname.split('/');
        if (segments[1] === 'ar' || segments[1] === 'en') {
            segments[1] = locale;
        } else {
            // If no locale in URL, prepend it
            segments.splice(1, 0, locale);
        }

        const newPath = segments.join('/') || '/';

        loader.start();
        router.push(newPath);
        router.refresh();
    };

    return (
        <Button className='h-6 !bg-transparent !px-0' variant='ghost' onClick={() => setLocale(nextLocale)}>
            <Globe />
            <span className='uppercase'>{nextLocale}</span>
        </Button>
    );
};

export default LangSwitcher;
