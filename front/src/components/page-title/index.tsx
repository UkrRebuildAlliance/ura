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
    align = 'center',
}: IPageTitle) => {
    const style = clsx(
        'tablet:text-[40px] font-bold leading-[140%]',
        {
            'text-left': align === 'left',
            'text-right': align === 'right',
            'text-center': align === 'center',
        },
        { 'text-[18px] desktop:text-[50px] font-extrabold': news },
        { 'text-[24px] desktop:text-[70px]': !news },
        className,
    );

    return <h1 className={style}>{text}</h1>;
};
