import Link from 'next/link';

import LangSwitcher from '../common/LanguageSwitcher';
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

                <div className='flex items-center gap-3 lg:gap-5'>
                    <div className='flex items-center gap-2 lg:gap-4'>
                        <Link
                            href={'/wishlist'}
                            aria-label='wishlist'
                            title='wishlist'
                            className='flex items-center gap-1 max-md:text-sm lg:gap-2'>
                            <i>
                                <Heart size={18} />
                            </i>
                            (0)
                        </Link>
                        <Link
                            href={'/cart'}
                            aria-label='cart'
                            title='cart'
                            className='flex items-center gap-1 max-md:text-sm lg:gap-2'>
                            <i>
                                <ShoppingCart size={18} />
                            </i>
                            (0)
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <Link title='profile' href={'/profile'} aria-label='profile'>
                            <i>
                                <UserRound size={18} />
                            </i>
                        </Link>

                        <LangSwitcher />
                        <HeaderMobile />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
