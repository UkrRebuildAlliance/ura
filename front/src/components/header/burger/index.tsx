import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import BurgerIcon from '@/assets/svg/social/burger.svg?react';

export const Burger = ({
  isActive,
  className,
  ...props
}: {
  className?: string;
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx('menu', { active: isActive }, className)}
    >
      <BurgerIcon />
    </button>
  );
};
