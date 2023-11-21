import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Arrow from '@/assets/svg/arrowDown.svg?react';

import { IBurgerBtn } from './types';

export const BurgerBtn = ({
  text,
  href,
  btnId,
  links,
  onClick,
  activeBtn,
  className,
  ...props
}: IBurgerBtn) => {
  const isActive = activeBtn === btnId;

  const handelClick = () => {
    if (isActive && onClick) {
      onClick(-1);
    }

    if (!isActive && onClick) {
      onClick(btnId);
    }
  };

  return (
    <>
      {!href && (
        <div className={clsx('w-full', className)}>
          <button
            className="px-4 py-[10px] flex justify-between items-center min-w-[176px] w-full border border-borderP rounded-3xl outline-borderP"
            onClick={handelClick}
            {...props}
          >
            <span className="font-bold capitalize text-transparent bg-mainGradient bg-clip-text font-montserrat text-[18px]">
              {text}
            </span>

            <Arrow
              className={clsx('w-[28px] transition duration-150', {
                'rotate-180': isActive,
              })}
            />
          </button>

          {isActive && links && (
            <div
              className={clsx('flex flex-col w-full gap-6', {
                hidden: !isActive,
                'block pt-5 pl-5': isActive,
              })}
            >
              {links &&
                links.map(({ name, href }, idx) => (
                  <Link
                    key={`${idx}-mobile-burger-${name}`}
                    to={`${href}-${idx}`}
                    className="font-medium capitalize transition duration-200 font-montserrat text-borderP text-4 hover:scale-110"
                  >
                    {name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      )}

      {href && (
        <Link
          className={clsx(
            'relative px-4 capitalize  py-[10px] flex justify-between items-center max-w-max font-bold text-transparent bg-mainGradient bg-clip-text font-montserrat text-[18px] outline-borderP  hover:scale-110 transition duration-200',
            'after:absolute after:block after:bottom-[8px] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-mainGradient after:w-[calc(100%-28px)]',
          )}
          to={href}
        >
          {text}
        </Link>
      )}
    </>
  );
};
