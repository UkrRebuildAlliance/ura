import clsx from 'clsx';

import { IButtonStyles } from './types';

export const getStyles = ({
  variant,
  isActive,
  disabled,
  className,
}: IButtonStyles) => ({
  main: clsx(
    'relative group w-full group transition-all duration-300 h-[60px] flex items-center justify-center active:enable:scale-[0.95] transition duration-150 rounded-[20px]',
    {
      'border-2 border-[#225FDD]': variant === 'primary-outline',
      'grayscale cursor-not-allowed': disabled,
    },
    className,
  ),
  bg: clsx('absolute w-full h-full rounded-[18px]', {
    'bg-btnBgGradient hover:bg-btnTransparent border-2 group-hover:border-[#225FDD] duration-300 transition-all':
      variant === 'primary',
    'bg-btnBgGradient duration-[0.4s] transition-all primary-outline opacity-0 group-hover:opacity-100':
      variant === 'primary-outline' && !disabled,
  }),
  span: clsx(
    'z-[2] group font-montserrat text-[18px] tablet:text-[24px] transition duration-150',
    {
      'bg-btnGradient bg-clip-text text-transparent':
        variant === 'primary-outline' && !isActive,
      'text-white': variant === 'primary-outline' && isActive,
      'group-hover:text-white': variant === 'primary-outline' && !disabled,
      'group-hover:bg-btnGradient group-hover:bg-clip-text group-hover:text-transparent':
        variant === 'primary' && !disabled,
    },
    {
      'text-white group-hover:text-blueBlack':
        variant === 'primary' && !disabled,
    },
  ),
});
