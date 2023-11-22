import clsx from 'clsx';

export const getStyles = (className?: string) => ({
  btn: clsx(
    `relative w-[60px] h-[60px] group bg-mainGradient rounded-full cursor-pointer shadow-md shadow-borderP enabled:active:scale-90 transition duration-150 disabled:grayscale-[60%])`,
    className,
  ),
  after: clsx(
    'transition duration-300 delay-100 absolute block w-[98%] h-[98%] rounded-[50%] border-bunsBorder1 border-[4.5px]  border-b-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  ),
  before: clsx(
    'transition duration-300 absolute block w-[75%] h-[75%] rounded-[50%] border-bunsBorder border-[4px]  border-b-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  ),
  icon: 'absolute w-6 h-6 text-white transition duration-200 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 top-1/2 left-1/2',
});
