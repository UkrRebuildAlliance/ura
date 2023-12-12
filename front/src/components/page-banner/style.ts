import clsx from 'clsx';

interface IStyleBanner {
    className?: string;
}
export const getStyles = ({ className }: IStyleBanner) => ({
    banner: clsx(
        'w-full bg-center laptop:bg-[top_center] bg-cover bg-no-repeat aspect-[1/1.5] tablet:aspect-[1/1] laptop:aspect-[1.33/1] desktop:aspect-[1.68/1] ',
        className,
    ),
    container:
        'flex flex-col gap-[40px] max-w-[800px] pt-[72px] sm:pt-[150px] tablet:pt-[120px] tablet:mx-auto laptop:relative laptop:left-1/2 laptop:m-0 laptop:max-w-[420px] desktop:pt-0 desktop:max-w-[50%] desktopLg:max-w-[800px] desktopLg:pt-[150px]',
    ttlStyle:
        'text-[24px] text-white font-extrabold sm:text-[40px] laptop:text-[30px] desktop:text-[40px] desktopLg:text-[50px] mb-[40px] ',
    missionStyle:
        'text-[18px] font-light text-white sm:text-[30px] laptop:text-[26px] desktop:text-[36px] desktopLg:text-[40px] ',
});
