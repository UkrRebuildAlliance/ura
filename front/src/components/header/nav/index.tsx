import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/components';

import { INav } from '../types';
import { menuLinks } from '../links';

export const Nav = ({ handleClick, activeLink }: INav) => {
  const { t } = useTranslation();
  const btns = [t('navbar.activities'), t('navbar.about_us')];

  return (
    <div className="relative items-center justify-center hidden pt-5 desktop:px-4 desktop:flex gap-[140px] z-2">
      <LanguageSwitcher className="absolute bottom-0 right-0" />

      {btns.map((name, idx) => {
        const comparing = idx === 0 ? 'activities' : 'about';
        return (
          <button
            key={`${idx}-nav-desktop-${name}`}
            onClick={() => handleClick(comparing)}
            className={clsx(
              'outline-none font-montserrat capitalize text-[20px] font-normal text-white transition duration-300',
              { 'scale-125': activeLink === comparing },
            )}
          >
            {name}
          </button>
        );
      })}

      <Link
        to={menuLinks.contact}
        className="outline-none capitalize text-[20px] font-normal text-white hover:scale-125 transition duration-150"
      >
        {t('navbar.contacts')}
      </Link>
    </div>
  );
};
