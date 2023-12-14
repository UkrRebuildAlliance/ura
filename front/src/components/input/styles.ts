import clsx from 'clsx';

export const getStyles = (error?: boolean) => {
    return clsx(
        'border-2 border-borderP w-full h-[60px] rounded-20 py-[19px] px-[32px]',
        {
            'border-red': error,
        },
    );
};
