import clsx from 'clsx';

import { Search, SocialMedia } from '@/components';

import { BurgerNav } from './burger-nav';

interface IBurgerMenu {
  className?: string;
  isBurgerActive: boolean;
}

export const BurgerMenu = ({ className, isBurgerActive }: IBurgerMenu) => {
  return (
    <div
      className={clsx(
        className,
        ' fixed lef-0 top-[111px]  tablet:top-[112px] w-full h-[calc(100vh-112px)] desktop:hidden bg-white transition duration-300 p-[30px] laptop:pt-[90px]',
        {
          'translate-x-0': isBurgerActive,
          '-translate-x-full': !isBurgerActive,
        },
      )}
    >
      <div className="flex flex-col items-center gap-10 max-w-[400px] laptop:max-w-[864px] mx-auto laptop:gap-[60px]">
        <Search isPurple className="w-full max-w-full laptop:max-w-[400px]" />

        <SocialMedia withBg />

        <BurgerNav />
      </div>
    </div>
  );
};
