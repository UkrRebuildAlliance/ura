import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Right from '@/assets/svg/right.svg?react';
import RightWhite from '@/assets/svg/right-white.svg?react';

import { getStyles } from './styles';

interface ICrumbs {
    idx: number;
    path: string;
    name: string;
    crumbsLng: number;
    isBanner?: boolean;
}

export const Crumb = ({ path, name, idx, crumbsLng, isBanner }: ICrumbs) => {
    const { t } = useTranslation();
    const { link, p } = getStyles({ isBanner: isBanner });

    return (
        <>
            {idx !== crumbsLng - 1 && (
                <Link to={path} className={link}>
                    {t(`crumbs.${name}`)}
                </Link>
            )}

            {idx === crumbsLng - 1 && (
                <p className={p}>{t(`crumbs.${name}`)}</p>
            )}

            {idx < crumbsLng - 1 && (
                <span className="text-white">
                    {isBanner ? (
                        <RightWhite className="w-6" />
                    ) : (
                        <Right className="w-6" />
                    )}
                </span>
            )}
        </>
    );
};
