import clsx from 'clsx';

interface IButtonStyles {
    isActive?: boolean;
    variant: 'primary' | 'primary-outline';
}

export const getStyles = ({ variant, isActive }: IButtonStyles) => ({
    main: clsx(
        'relative group w-full group transition-all duration-300 h-[60px] flex items-center justify-center active:scale-[0.95] transition duration-150 rounded-[20px]',
        {
            'bg-btnGradient text-white': variant === 'primary',
            'group-hover:text-white hover:bg-btnGradient duration-200 transition-all':
                variant === 'primary-outline',
        },
    ),
    span: clsx(
        'relative z-[2] font-montserrat text-[18px] tablet:text-[24px] transition duration-150',
        {
            'bg-btnGradient bg-clip-text text-transparent':
                variant === 'primary-outline' && !isActive,
            'text-white': variant === 'primary-outline' && isActive,
            'group-hover:text-white': variant === 'primary-outline',
        },
    ),
});
