import clsx from 'clsx';

interface IButtonStyles {
  isActive?: boolean;
  variant: 'primary' | 'primary-outline';
}

export const getStyles = ({ variant, isActive }: IButtonStyles) => ({
  main: clsx(
    'relative px-[40px] w-full h-[60px] py-[10px] flex items-center justify-center active:scale-[0.95] transition duration-150 rounded-[20px]',
    {
      'bg-mainGradient text-white': variant === 'primary',
      'bg-mainGradient': variant === 'primary-outline',
    },
  ),
  bg: clsx(
    'absolute z-[1] top-0 left-0 bg-white border-[2px] border-transparent bg-clip-padding w-full h-full rounded-[20px] transition duration-150',
    {
      'bg-mainGradient ': isActive,
    },
  ),
  span: clsx(
    'relative z-[2] font-montserrat text-[18px] tablet:text-[24px] transition duration-150',
    {
      'bg-mainGradient bg-clip-text text-transparent':
        variant === 'primary-outline' && !isActive,
      'text-white': variant === 'primary-outline' && isActive,
    },
  ),
});
