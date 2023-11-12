import i18n from '@/i18n';
import clsx from 'clsx';
import Cookies from 'js-cookie';

export const LanguageSwitcher = ({ className }: { className: string }) => {
  const activeLanguage = Cookies.get('i18next');
  const changedLng = activeLanguage === 'ua' ? 'en' : 'ua';

  const changing = () => {
    i18n.changeLanguage(changedLng);
    location.reload();
  };

  return (
    <span
      onClick={changing}
      className={clsx(
        className,
        'text-white desktop:text-[20px] desktop:font-normal tablet:text-[32px] tablet:font-semibold select-none -tracking-[2px] uppercase cursor-pointer font-montserrat text-[27px] font-normal',
      )}
    >
      {changedLng}
    </span>
  );
};
