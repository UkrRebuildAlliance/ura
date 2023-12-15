import clsx from 'clsx';

export const getStyles = (isFooter?: boolean) => ({
    svg: clsx('w-full', {
        'text-white fill-white': isFooter,
    }),
});
