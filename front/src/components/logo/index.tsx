import { useLocation, useNavigate } from 'react-router-dom';

import logo from '@/assets/img/logo.png';
import clsx from 'clsx';

export const Logo = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      style={{ backgroundImage: `url(${logo})` }}
      className={clsx(
        'w-[120.0008px] h-[49px] tablet:w-[211.9992px] tablet:h-[49.9992px] bg-contain bg-no-repeat bg-center cursor-pointer',
        className,
      )}
    />
  );
};
