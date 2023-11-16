import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Close from '@/assets/svg/close.svg?react';

import { menuLinks } from '../links';
import { INav, INavLink } from '../types';

export const NavMenu = ({ activeLink, handleClick }: INav) => {
  const navLinks: INavLink = {
    activities: [...menuLinks.activities],
    about: [...menuLinks.about],
  };

  return (
    <div
      className={clsx(
        'absolute bottom-0 z-0 flex items-center w-full  transition duration-300 bg-mainGradient ',
        { 'translate-y-full': !!activeLink },
      )}
    >
      <div className="relative max-w-[1620px]  px-4 w-full mx-auto desktop:block hidden">
        <div className="w-full border-t border-[#ffffff65] flex justify-center h-16 items-center gap-[140px] ">
          {typeof activeLink !== 'boolean' &&
            navLinks[activeLink].map((el, idx) => (
              <Link
                to={el.href}
                key={`${el.name}-${idx}-desktop`}
                onClick={() => handleClick(false)}
                className="font-normal capitalize text-white border-b border-transparent text-[20px] font-montserrat hover:border-white"
              >
                {el.name}
              </Link>
            ))}

          <button
            onClick={() => handleClick(false)}
            className="absolute flex items-center justify-center text-white transition duration-200 outline-none w-7 h-7 right-3 hover:scale-110"
          >
            <Close />
          </button>
        </div>
      </div>
    </div>
  );
};
