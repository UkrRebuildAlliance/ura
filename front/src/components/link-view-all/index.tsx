import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ArrowLong from '@/assets/svg/arrow_long.svg?react';

interface LinkViewAllProps {
  to: string;
  className?: string;
}

export const LinkViewAll = ({ to, className }: LinkViewAllProps) => {
  const { t } = useTranslation();

  return (
    <Link
      to={to}
      className={`flex items-center gap-[18px] w-fit group ${
        className ? className : ''
      }`}
    >
      <span className="text-[12px] font-semibold tablet:text-[16px] laptop:text-[24px] transition-all duration-300 group-hover:scale-105">
        {t('links.viewAll')}
      </span>

      <div className="flex items-center w-[72px] h-[40px] justify-center border border-blueBlack rounded-[40px]">
        <ArrowLong />
      </div>
    </Link>
  );
};
