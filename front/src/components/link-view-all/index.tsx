import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ArrowLong from '@/assets/svg/arrow_long.svg?react';

interface LinkViewAllProps {
  to: string;
}

export const LinkViewAll = ({ to }: LinkViewAllProps) => {
  const { t } = useTranslation();

  return (
    <Link to={to} className="flex items-center gap-4 w-fit group">
      <span className="text-[12px] font-semibold tablet:text-[16px] laptop:text-[24px] transition-all duration-300 group-hover:scale-105">
        {t('links.viewAll')}
      </span>

      <ArrowLong />
    </Link>
  );
};
