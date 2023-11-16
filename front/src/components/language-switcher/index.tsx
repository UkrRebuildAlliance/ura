import clsx from 'clsx';
import Cookies from 'js-cookie';

import i18n from '@/i18n';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const activeLanguage = Cookies.get('i18next');
  const changedLng = activeLanguage === 'ua' ? 'ua' : 'en';

  const changing = () => {
    i18n.changeLanguage(activeLanguage === 'ua' ? 'en' : 'ua');
    location.reload();
  };

  return (
    <span
      onClick={changing}
      className={clsx(
        'text-white desktop:text-[20px] desktop:font-normal tablet:text-[32px] tablet:font-semibold select-none -tracking-[2px] uppercase cursor-pointer font-montserrat text-[27px] font-normal',
        className,
      )}
    >
      {changedLng}
    </span>
  );
};
