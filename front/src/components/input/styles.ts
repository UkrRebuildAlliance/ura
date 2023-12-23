import clsx from 'clsx';

export const getStyles = (error?: boolean) => {
    return {
        input: clsx(
            'border-2 border-borderP w-full h-[60px] rounded-20 py-[19px] px-[32px]',
            {
                'border-red-500': error,
            },
        ),
        textarea: clsx(
            'min-h-[146px] grow w-full border-2 border-borderP py-[19px] px-[32px] rounded-20 resize-none',
            {
                'border-red-500': error,
            },
        ),
    };
};
