import { useState, useEffect } from 'react';

import { Logo, Search, LanguageSwitcher } from '@/components';

import { Nav } from './nav';
import { Burger } from './burger';
import { IHandelId } from './types';
import { NavMenu } from './nav-menu';
import { BurgerMenu } from './burger-menu';
import { SocialMedia } from '../social-media';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<IHandelId>(false);
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  const handleClick = (id: IHandelId) => {
    if (id === activeLink) {
      setActiveLink(false);
    }

    if (id !== activeLink) {
      setActiveLink(id);
    }
  };

  useEffect(() => {
    if (isBurgerActive) {
      document.body.classList.add('burger-overflow');
    }

    if (!isBurgerActive) {
      document.body.classList.remove('burger-overflow');
    }
  }, [isBurgerActive]);

  return (
    <>
      <header className="fixed top-0 w-full pt-[38px] pb-6 z-50">
        <div className="absolute top-0 left-0 w-full h-full bg-mainGradient z-[1]"></div>

        <div className="relative max-w-[1620px] mx-auto px-7 tablet:px-10 desktop:px-4 z-[2]">
          <div className="flex items-center justify-between desktop:pb-[26px] desktop:border-b border-[#ffffff65]">
            <LanguageSwitcher className="desktop:hidden" />

            <SocialMedia className="hidden desktop:flex desktop:gap-[65px]" />

            <Logo />

            <Search className="hidden desktop:flex" />

            <Burger
              isActive={isBurgerActive}
              className="block desktop:hidden"
              onClick={() => setIsBurgerActive(!isBurgerActive)}
            />
          </div>

          <Nav activeLink={activeLink} handleClick={handleClick} />
        </div>

        <NavMenu activeLink={activeLink} handleClick={handleClick} />
      </header>

      <BurgerMenu isBurgerActive={isBurgerActive} />
    </>
  );
};
