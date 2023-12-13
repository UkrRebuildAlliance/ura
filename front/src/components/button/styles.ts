import clsx from 'clsx';

interface IButtonStyles {
    isActive?: boolean;
    className?: string;
    variant: 'primary' | 'primary-outline';
}

export const getStyles = ({ variant, isActive, className }: IButtonStyles) => ({
    main: clsx(
        'relative group w-full group transition-all duration-300 h-[60px] flex items-center justify-center active:scale-[0.95] transition duration-150 rounded-[20px]',
        {
            'bg-btnBgGradient hover:bg-btnTransparent border hover:border-[#225FDD] duration-300 transition-all':
                variant === 'primary',
            'group-hover:text-white hover:bg-btnBgGradient duration-200 transition-all primary-outline':
                variant === 'primary-outline',
        },
        className,
    ),
    span: clsx(
        'relative z-[2] font-montserrat text-[18px] tablet:text-[24px] transition duration-150',
        {
            'bg-btnGradient bg-clip-text text-transparent':
                variant === 'primary-outline' && !isActive,
            'text-white': variant === 'primary-outline' && isActive,
            'group-hover:text-white': variant === 'primary-outline',
            'group-hover:bg-btnGradient group-hover:bg-clip-text group-hover:text-transparent':
                variant === 'primary',
        },
        {
            'text-white group-hover:text-blueBlack': variant === 'primary',
        },
    ),
});
