import { ChildrenProps } from '@/types';
import clsx from 'clsx';

interface IPageContainer {
  className?: string;
}

export const PageContainer = ({
  children,
  className,
}: ChildrenProps<IPageContainer>) => {
  return (
    <div
      className={clsx(
        'py-[34px] px-[20px] laptop:px-[100px] laptop:py-[64px] desktopLg:px-0 desktopLg:max-w-[1620px] desktopLg:mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};
