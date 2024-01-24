import { useState } from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import { links } from './config';

export const AdminNavigation = ({}) => {
  const { pathname } = useLocation();
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <aside
      className={clsx(
        'w-full backdrop-blur laptop:backdrop-blur-none fixed left-0 -translate-x-full laptop:translate-x-0 transition-all duration-500 top-[100px] sm:top-[160px] h-[calc(100vh-100px)] sm:h-[calc(100vh-160px)] laptop:h-[calc(100vh-150px)] desktop:h-[calc(100vh-160px)] laptop:relative laptop:max-w-[25%] desktop:max-w-[18%] desktopLg:max-w-[15%] laptop:top-0 laptop:border-r laptop:border-partnersMatt z-[100]',
        { 'translate-x-0': isAsideOpen },
      )}
    >
      <button
        className={clsx(
          'absolute px-5 py-2 z-[10] text-white top-1 right-0 transition-all underline duration-500 linear laptop:hidden ',
          {
            'translate-x-0 bg-transparent transition-all duration-500 ':
              isAsideOpen,
            'translate-x-full bg-transparent transition-all duration-500 ':
              !isAsideOpen,
          },
        )}
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        {isAsideOpen ? 'Закрити' : 'Меню'}
      </button>

      <div className="flex flex-col items-start justify-center w-full gap-10 pt-[52px] text-center laptop:text-start laptop:justify-start laptop:px-[40px] desktopLg:px-2">
        {links.map(({ name, href }, idx) => (
          <Link
            to={href}
            key={`admin-links-nav-${idx}`}
            className={clsx(
              'relative w-full transition-all duration-300 cursor-pointer hover:scale-125 laptop:hover:scale-110 text-[24px]',
              {
                'text-adminLinksActive': pathname === href,
                ' text-white': pathname !== href,
              },
            )}
          >
            {name}
          </Link>
        ))}
      </div>
    </aside>
  );
};
