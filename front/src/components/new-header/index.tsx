import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Logo } from '..';

import { Burger } from './burger';
import { HeaderNav } from './header-nav';
import { BurgerMenu } from './burger-menu';

export const Header = ({}) => {
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

    useEffect(() => {
        if (isBurgerActive) {
            document.body.classList.add('burger-overflow');
        }

        if (!isBurgerActive) {
            document.body.classList.remove('burger-overflow');
        }
    }, [isBurgerActive]);

    return (
        <header
            className={clsx(
                'p-[10px] pb-0 z-100 laptop:py-[20px] desktop:px-[20px] desktop:py-[30px] fixed z-50 w-full',
                { 'bg-white': isBurgerActive },
            )}
        >
            <BurgerMenu
                setIsBurgerActive={setIsBurgerActive}
                isBurgerActive={isBurgerActive}
            />

            <div className="relative z-[2] bg-white rounded-[20px] px-[10px] py-[26px] flex justify-between items-center w-full laptop:px-[90px] laptop:py-[28px] desktopLg:py-[24px] desktopLg:px-[20px] desktopLg:max-w-[1660px] mx-auto">
                <Logo />

                <HeaderNav />

                <Burger
                    isActive={isBurgerActive}
                    className="block desktop:hidden"
                    onClick={() => setIsBurgerActive(!isBurgerActive)}
                />
            </div>
        </header>
    );
};
