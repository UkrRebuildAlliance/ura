import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ArrowRight from '@/assets/svg/arrow-right.svg?react';

interface LinkViewAllProps {
    to: string;
    team?: boolean;
    className?: string;
}

export const LinkViewAll = ({ to, className, team }: LinkViewAllProps) => {
    const { t } = useTranslation();

    return (
        <Link
            to={to}
            className={clsx('flex items-center gap-4 w-fit group', className)}
        >
            <span className="text-[12px] font-semibold tablet:text-[16px] laptop:text-[24px] transition-all duration-300 group-hover:scale-105">
                {!team ? t('links.viewAll') : t('links.viewAllTeam')}
            </span>

            <div className="w-[72px] h-[40px] flex items-center justify-center rounded-[20px] border border-blueBlack ">
                <ArrowRight className="max-w-[35px] w-full duration-300 transition-all  group-hover:scale-90" />
            </div>
        </Link>
    );
};
