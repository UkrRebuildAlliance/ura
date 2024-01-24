import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ITitleContainer {
  className?: string;
}

export const TitleContainer = ({
  children,
  className,
}: PropsWithChildren<ITitleContainer>) => (
  <div
    className={clsx(
      'flex justify-between w-full mb-[30px] laptop:mb-[40px] desktop:mb-[100px]',
      className,
    )}
  >
    {children}
  </div>
);
