import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Logo } from '@/components';
import { useScrollPosition } from '@/hooks';

import { Burger } from './burger';
import { HeaderNav } from './header-nav';
import { BurgerMenu } from './burger-menu';

export const Header = ({}) => {
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    const { scroll } = useScrollPosition();
    const [lastScroll, setLastScroll] = useState(scroll);
    const isHeaderHidden = scroll > 60 && scrollDirection === 'down';

    useEffect(() => {
        if (isBurgerActive) {
            document.body.classList.add('burger-overflow');
        }

        if (!isBurgerActive) {
            document.body.classList.remove('burger-overflow');
        }

        setLastScroll(scroll);
        if (scroll > lastScroll) setScrollDirection('down');
        if (scroll < lastScroll) setScrollDirection('up');
    }, [isBurgerActive, scroll]);

    return (
        <header
            className={clsx(
                'p-[10px] pb-0 z-100 laptop:py-[20px] desktop:px-[20px] desktop:py-[30px] fixed z-50 w-full transition-all duration-500',
                {
                    'bg-white': isBurgerActive,
                    '-translate-y-full ': isHeaderHidden && !isBurgerActive,
                },
            )}
        >
            <BurgerMenu
                setIsBurgerActive={setIsBurgerActive}
                isBurgerActive={isBurgerActive}
            />

            <div
                className={clsx(
                    'relative z-[2] bg-white rounded-[20px] px-[10px] py-[26px] flex justify-between items-center w-full laptop:px-[90px] laptop:py-[28px] desktopLg:py-[24px] desktopLg:px-[20px] desktopLg:max-w-[1660px] mx-auto ',
                    {
                        'shadow-xl transition-all duration-300':
                            isHeaderHidden && !isBurgerActive,
                    },
                )}
            >
                <Logo />

                <HeaderNav isHeaderHidden={isHeaderHidden} />

                <Burger
                    isActive={isBurgerActive}
                    className="block desktop:hidden"
                    onClick={() => setIsBurgerActive(!isBurgerActive)}
                />
            </div>
        </header>
    );
};
