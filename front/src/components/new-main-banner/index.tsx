import clsx from 'clsx';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export const MainBanner = ({}) => {
  const { t } = useTranslation();
  const activeLanguage = Cookies.get('i18next');

  return (
    <section
      className={`bg-homeBanner_sm tablet:bg-homeBanner flex justify-center items-center md:justify-start w-full bg-[top_center] bg-cover bg-no-repeat aspect-[1/1.5] tablet:aspect-[1/1] laptop:aspect-[1.33/1] desktop:aspect-[2.35/1] `}
    >
      <div className="flex flex-col gap-[42px] px-5 max-w-[100%] md:max-w-[65%] laptop:max-w-full w-full laptop:gap-[24px] laptop:pl-[100px] desktopLg:px-0 desktopLg:max-w-[1620px] desktop:mx-auto">
        <h1
          className={clsx(
            'text-[24px] text-white font-extrabold sm:text-[40px] laptop:text-[30px] laptop:max-w-[412px] desktop:text-[40px] desktopLg:text-[50px]',
            {
              'desktop:max-w-[700px] desktopLg:max-w-[850px]':
                activeLanguage !== 'en',
              'desktop:max-w-[750px] desktopLg:max-w-[950px]':
                activeLanguage === 'en',
            },
          )}
        >
          {t('main_banner.ttl')}
        </h1>

        <span className="text-[18px] font-light text-white sm:text-[30px] laptop:text-[26px] laptop:max-w-[412px] desktop:text-[36px] desktopLg:text-[40px] desktop:max-w-[700px] desktopLg:max-w-[800px]">
          {t('main_banner.mission')}
        </span>
      </div>
    </section>
  );
};
