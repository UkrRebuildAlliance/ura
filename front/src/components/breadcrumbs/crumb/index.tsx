import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import Right from '@/assets/svg/right.svg?react';
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
    const shortCrumbs = crumbsLng - 1;

    return (
        <>
            {idx !== shortCrumbs && (
                <Link to={path} className={link}>
                    {t(`crumbs.${name}`)}
                </Link>
            )}

            {idx === shortCrumbs && <p className={p}>{t(`crumbs.${name}`)}</p>}

            {idx < shortCrumbs && (
                <span className="text-white">
                    <Right
                        className={clsx('w-6 text-blueBlack', {
                            'text-white': isBanner,
                        })}
                    />
                </span>
            )}
        </>
    );
};
