import { useTranslation } from 'react-i18next';

export const MainBanner = ({}) => {
    const { t } = useTranslation();
    return (
        <section className="flex justify-center items-center md:justify-start w-full bg-cover bg-no-repeat aspect-[1/1.5] tablet:aspect-[1/1] laptop:aspect-[1.33/1] tablet:bg-center tablet:bg-homeBanner desktop:aspect-[2.45/1] bg-homeBanner_sm">
            <div className="flex flex-col gap-[42px] px-5 md:max-w-[60%] laptop:max-w-full w-full laptop:gap-[24px] laptop:pl-[100px] desktopLg:px-0 desktopLg:max-w-[1620px] desktop:mx-auto">
                <h1 className="text-[24px] text-white font-extrabold sm:text-[40px] laptop:text-[30px] laptop:max-w-[412px] desktop:text-[40px] desktopLg:text-[50px] desktop:max-w-[700px] desktopLg:max-w-[800px]">
                    {t('main_banner.ttl')}
                </h1>

                <span className="text-[18px] font-light text-white sm:text-[30px] laptop:text-[26px] laptop:max-w-[412px] desktop:text-[36px] desktopLg:text-[40px] desktop:max-w-[700px] desktopLg:max-w-[800px]">
                    {t('main_banner.mission')}
                </span>
            </div>
        </section>
    );
};
