import clsx from 'clsx';

interface IPageTitle {
    text: string;
    news?: boolean;
    className?: string;
    align?: 'center' | 'left' | 'right';
}

export const PageTitle = ({
    news,
    text,
    className,
    align = 'left',
}: IPageTitle) => {
    const style = clsx(
        'tablet:text-[40px] font-bold leading-[140%]',
        {
            'text-left': align === 'left',
            'text-right': align === 'right',
            'text-center': align === 'center',
        },
        { 'text-[18px] desktop:text-[50px] font-extrabold': news },
        { 'text-[24px] laptop:text-[30px] desktop:text-[52px]': !news },
        className,
    );

    return <h3 className={style}>{text}</h3>;
};
