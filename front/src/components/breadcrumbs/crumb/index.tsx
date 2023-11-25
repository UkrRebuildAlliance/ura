import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Right from '@/assets/svg/right.svg?react';

import { getStyles } from './styles';

interface ICrumbs {
  idx: number;
  path: string;
  name: string;
  crumbsLng: number;
}

export const Crumb = ({ path, name, idx, crumbsLng }: ICrumbs) => {
  const { t } = useTranslation();
  const { link, p } = getStyles();

  return (
    <>
      {idx !== crumbsLng - 1 && (
        <Link to={path} className={link}>
          {t(`crumbs.${name}`)}
        </Link>
      )}

      {idx === crumbsLng - 1 && <p className={p}>{t(`crumbs.${name}`)}</p>}

      {idx < crumbsLng - 1 && <Right className="w-4 text-blue-800" />}
    </>
  );
};
