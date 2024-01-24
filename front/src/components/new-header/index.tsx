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
  const [windowLocation, setWindowLocation] = useState(0);

  const { scroll } = useScrollPosition();
  const [lastScroll, setLastScroll] = useState(scroll);
  const isHeaderHidden = scroll > 60 && scrollDirection === 'down';

  const burgerClick = () => {
    if (isBurgerActive) {
      document.documentElement.style.scrollBehavior = 'inherit';

      setTimeout(() => {
        window.scrollTo({ top: windowLocation });
      }, 2);
    }

    if (!isBurgerActive) {
      setWindowLocation(scroll);

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 2);
    }

    setIsBurgerActive(!isBurgerActive);
  };

  useEffect(() => {
    if (isBurgerActive) {
      setTimeout(() => {
        document.body.classList.add('burger-overflow');
      }, 150);
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
        'p-[10px] pb-0 z-100 laptop:py-[20px] desktop:px-[20px] desktop:py-[30px] fixed z-50 w-full transition-all duration-700 ease-in-out',
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
          'relative z-[2] bg-white rounded-[20px] px-[10px] py-[26px] flex justify-between items-center w-full laptop:px-[90px] laptop:py-[28px] desktopLg:py-[24px] desktopLg:px-[20px] desktopLg:max-w-[1660px] mx-auto transition-all duration-300',
          {
            'shadow-xl': scroll > 20 && !isBurgerActive,
          },
        )}
      >
        <Logo onClick={() => setIsBurgerActive(false)} />

        <HeaderNav isHeaderHidden={isHeaderHidden} />

        <Burger
          isActive={isBurgerActive}
          onClick={() => burgerClick()}
          className="block desktop:hidden"
        />
      </div>
    </header>
  );
};
