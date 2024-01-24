import { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher, Search } from '@/components';

import { menuLinks } from '../links';

interface IBurgerMenu {
  isBurgerActive: boolean;
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu = ({
  isBurgerActive,
  setIsBurgerActive,
}: IBurgerMenu) => {
  const { t } = useTranslation();
  const [activeSubMenu, setActiveSubMenu] = useState<number>(-1);
  const btns = [t('navbar.activities'), t('navbar.about_us')];

  const toggleSubMenu = (menuNumber: number) => {
    if (activeSubMenu === menuNumber) {
      setActiveSubMenu(-1);
      return;
    }

    setActiveSubMenu(menuNumber);
  };
  return (
    <div
      className={clsx(
        'fixed font-medium text-blueBlack text-[26px]  laptop:text-[36px] capitalize top-0 left-0 w-full h-screen bg-white transition-all duration-300 after:transition-all  after:block after:w-full after:h-full after:absolute after:bg-burgerGradient after:top-0 after:left-0',
        {
          'translate-y-0 after:translate-y-full after:delay-300 after:duration-1000':
            isBurgerActive,
          '-translate-y-full after:translate-y-0': !isBurgerActive,
        },
      )}
    >
      <div className="flex flex-col items-center gap-[50px] pt-[90px] laptop:gap-[32px] px-[20px] laptop:px-[100px] overflow-y-auto max-h-[100vh]">
        <div className="flex flex-col w-full">
          {btns.map((btn, idx) => {
            const getter = idx === 0 ? 'activities' : 'about';
            const menu = menuLinks[getter];

            return (
              <div
                key={`key-burger-nav-${idx}`}
                onClick={() => toggleSubMenu(idx)}
                className="py-[24px] border-b border-blueBlack w-full text-center border-opacity-[0.24] cursor-pointer"
              >
                <span>{btn}</span>
                {idx === activeSubMenu && (
                  <div className="flex flex-col w-full pt-[16px] border-t border-blueBlack border-opacity-[0.24] gap-[28px] laptop:gap-[16px] text-[20px] font-normal text-burgerLinks laptop:text-[28px]">
                    {menu.map(({ name, href }, idx) => (
                      <Link
                        to={href}
                        key={`submenu-${idx}-header`}
                        onClick={() => setIsBurgerActive(false)}
                        className={` `}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to={menuLinks.contact}
            onClick={() => setIsBurgerActive(false)}
            className="py-[24px] border-b border-blueBlack w-full text-center border-opacity-[0.24] cursor-pointer"
          >
            {t('navbar.contacts')}
          </Link>
        </div>

        <Search setIsBurgerActive={setIsBurgerActive} />

        <LanguageSwitcher />
      </div>
    </div>
  );
};
