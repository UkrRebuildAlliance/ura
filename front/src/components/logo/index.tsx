import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

import header from '@/assets/img/blue_logo.png';
import footer from '@/assets/img/logo.png';

interface ILogo {
    className?: string;
    isFooter?: boolean;
}

export const Logo = ({ className, isFooter }: ILogo) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClick = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div
            onClick={handleClick}
            style={{ backgroundImage: `url(${isFooter ? footer : header})` }}
            className={clsx(
                'bg-contain bg-no-repeat bg-center cursor-pointer',
                className,
                {
                    'w-[254px] h-[60px] laptop:w-[210px] laptop:h-[50px] desktop:w-[254px] desktop:h-[60px]':
                        isFooter,
                    'w-[102px] h-[24px] laptop:w-[170px] laptop:h-[40px]':
                        !isFooter,
                },
            )}
        />
    );
};
