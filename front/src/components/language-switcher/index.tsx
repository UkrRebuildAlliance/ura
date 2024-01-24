import clsx from 'clsx';
import Cookies from 'js-cookie';

import i18n from '@/i18n';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const activeLanguage = Cookies.get('i18next');

  const changeLng = (lng: string) => {
    if (activeLanguage === lng) {
      return;
    }

    i18n.changeLanguage(lng);
    location.reload();
  };

  return (
    <div
      className={clsx(
        'flex items-center gap-[6px] uppercase text-[38px] laptop:text-[38px] desktop:text-[20px] font-light text-inactive',
        className,
      )}
    >
      <span
        onClick={() => changeLng('ua')}
        className={clsx(
          'cursor-pointer w-[58px] desktop:w-[36px] flex items-center justify-center duration-300 transition-all',
          {
            'text-blueBlack font-medium': activeLanguage === 'ua',
          },
        )}
      >
        ua
      </span>

      <span className="select-none">/</span>

      <span
        onClick={() => changeLng('en')}
        className={clsx(
          'cursor-pointer w-[58px] desktop:w-[36px] flex items-center justify-center duration-300 transition-all',
          {
            'text-blueBlack font-medium': activeLanguage === 'en',
          },
        )}
      >
        en
      </span>
    </div>
  );
};
