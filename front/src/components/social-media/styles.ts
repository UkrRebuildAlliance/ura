import clsx from 'clsx';

export const getStyles = (isFooter?: boolean) => ({
    svg: clsx({
        'text-white fill-white w-full': isFooter,
    }),
});
