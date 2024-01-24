import clsx from 'clsx';

export const getStyles = (isFooter?: boolean) => ({
  svg: clsx('w-[20px]', {
    'text-white fill-white': isFooter,
  }),
});
