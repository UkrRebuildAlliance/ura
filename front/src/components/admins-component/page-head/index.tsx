import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

import { ButtonAdmin } from '..';

interface IPageHeadProps {
    title: string;
    className?: string;
}

export const PageHead = ({ title, className }: IPageHeadProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onClick = () => {
        navigate(`${pathname}/create`);
    };

    return (
        <div
            className={clsx(
                'flex items-center justify-between w-full p-4 bg-partnersMatt rounded-[8px] shadow-xl',
                className,
            )}
        >
            <span className="text-[24px] font-bolder text-white">{title}</span>

            <ButtonAdmin
                text="Додати"
                variant="primary"
                className="text-white"
                onClick={onClick}
            />
        </div>
    );
};
