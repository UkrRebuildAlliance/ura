import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface AdminContainerProps {
  className?: string;
}

export const AdminContainer = ({
  children,
  className,
}: PropsWithChildren<AdminContainerProps>) => {
  return (
    <div
      className={clsx(
        'p-5 sm:p-[50px] tablet:p-[50px_100px] laptop:px-0 laptop:max-w-[84%] desktopLg:max-w-[1620px] laptop:mx-auto w-full',
        className,
      )}
    >
      {children}
    </div>
  );
};
