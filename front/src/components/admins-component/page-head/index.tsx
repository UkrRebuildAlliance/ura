import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';

import Back from '@/assets/svg/back.svg?react';

import { ButtonAdmin } from '..';

interface IPageHeadProps {
  title: string;
  className?: string;
  withOutBtn?: boolean;
}

export const PageHead = ({ title, className, withOutBtn }: IPageHeadProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const followBack = () => {
    navigate(-1);
  };

  const onClick = () => {
    navigate(`${pathname}/create`);
  };

  return (
    <div className={clsx('pt-10 bg-loginBg sticky top-0 mb-7 z-50', className)}>
      <div
        className={clsx(
          'flex items-center justify-between w-full p-4 bg-crumbsText rounded-[8px] shadow-xl flex-wrap gap-4 sm:flex-nowrap',
          className,
        )}
      >
        <ButtonAdmin
          variant="primary"
          onClick={followBack}
          icon={<Back className="fill-white w-[20px]" />}
          className="sm:order-0"
        />

        <span className=" order-[-1] text-[20px] font-bolder text-white text-center w-full sm:order-1 sm:mr-auto sm:ml-3 sm:w-max">
          {title}
        </span>

        {pathname.split('/').pop() !== 'create' && !withOutBtn && (
          <ButtonAdmin
            text="Додати"
            variant="primary"
            className="text-white sm:order-2"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};
