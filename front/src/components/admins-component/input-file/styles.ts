import clsx from 'clsx';

interface StylePros {
    aspect: string;
    error: boolean;
}

export const getStyles = ({ aspect, error }: StylePros) => {
    const label = clsx(
        'flex flex-col items-center justify-center w-full h-full rounded-20 bg-partnersMatt border border-partnersMatt cursor-pointer transition-all duration-300 ',
        {
            'border-warning': error,
            'border-partnersMatt hover:border-white': !error,
        },
        {
            [`aspect-[${aspect}]`]: aspect,
        },
    );

    const img = clsx('object-contain w-full h-full rounded-20', {
        [`aspect-[${aspect}]`]: aspect,
    });

    return { label, img };
};
