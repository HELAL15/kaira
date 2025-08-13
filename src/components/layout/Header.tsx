import Link from 'next/link';

import NavLinks from '../common/NavLinks';
import Logo from '../ui/Logo';
import HeaderMobile from './header/HeaderMobile';
import { Heart, ShoppingCart, UserRound } from 'lucide-react';

const Header = () => {
    return (
        <header className='bg-background-secondary dark:bg-background text-foreground dark:border-b-gray/30 sticky top-0 z-50 border-b border-b-white py-4'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Logo />

                <nav>
                    <ul className='flex items-center gap-6 uppercase max-lg:hidden xl:gap-12'>
                        <NavLinks />
                    </ul>
                </nav>

                <div className='flex items-center gap-4 lg:gap-7'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <Link
                            href={'/wishlist'}
                            aria-label='wishlist'
                            className='flex items-center gap-1 max-md:text-sm lg:gap-2'>
                            {' '}
                            <span className='block max-lg:hidden'>wishlist</span>{' '}
                            <i className='hidden max-lg:block'>
                                <Heart size={18} />
                            </i>{' '}
                            (0)
                        </Link>
                        <Link
                            href={'/cart'}
                            aria-label='cart'
                            className='flex items-center gap-1 max-md:text-sm lg:gap-2'>
                            <span className='block max-lg:hidden'>cart</span>{' '}
                            <i className='hidden max-lg:block'>
                                <ShoppingCart size={18} />
                            </i>{' '}
                            (0)
                        </Link>
                    </div>
                    <div className='flex items-center gap-3 md:gap-5'>
                        <Link href={'/profile'} aria-label='profile'>
                            <i>
                                <UserRound className='size-[18px] md:size-[20px]' />
                            </i>
                        </Link>
                        {/* <Button title='search' variant={'ghost'} className='p-0'>
                            <i>
                                <Search className='size-[18px] md:size-[20px]' />
                            </i>
                        </Button> */}
                        <HeaderMobile />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
