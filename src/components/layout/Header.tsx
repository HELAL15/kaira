import Image from 'next/image';
import Link from 'next/link';

import NavLinks from '../common/NavLinks';
import { Button } from '../ui/Button';
import UserDropdown from '../user/UserDropdown';
import { Menu, Search, UserRound } from 'lucide-react';

const Header = () => {
    return (
        <header className='bg-background-secondary text-foreground sticky top-0 z-50 border-b border-b-white py-4'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Link href={'/'} className='w-[60px] shrink-0 md:w-[100px] xl:w-[110px]'>
                    <Image
                        width={0}
                        height={0}
                        loading='eager'
                        className='h-full w-full object-contain'
                        src={'/logo.svg'}
                        alt='kaira logo'
                    />
                </Link>

                <nav>
                    <ul className='flex items-center gap-6 uppercase max-lg:hidden xl:gap-12'>
                        <NavLinks />
                    </ul>
                </nav>

                <div className='flex items-center gap-7'>
                    <div className='flex items-center gap-5'>
                        <Link href={'/wishlist'} className='flex items-center gap-2'>
                            {' '}
                            <span className='block max-lg:hidden'>wishlist</span> (0)
                        </Link>
                        <Link href={'/cart'} className='flex items-center gap-2'>
                            <span className='block max-lg:hidden'>cart</span> (0)
                        </Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link href={'/profile'}>
                            <i>
                                <UserRound size={20} />
                            </i>
                        </Link>
                        <button className='cursor-pointer'>
                            <i>
                                <Search size={20} />
                            </i>
                        </button>
                        <button className='hidden cursor-pointer max-lg:block'>
                            <i>
                                <Menu size={20} />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
