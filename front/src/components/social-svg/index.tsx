import clsx from 'clsx';

import { ChildrenProps } from '@/types';

interface ISocialSvg {
  href: string;
  withBg?: boolean;
}

export const SocialSvg = ({
  href,
  children,
  withBg,
}: ChildrenProps<ISocialSvg>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        ' relative w-[20px] h-[20px] flex group text-white cursor-pointer hover:scale-[1.5] transition duration-200 outline-borderP',
      )}
    >
      {withBg && (
        <div className="absolute bg-svgGradient rounded-full w-[40px] h-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 group-hover:scale-0 transition duration-300"></div>
      )}

      <div
        className={clsx(
          'relative flex items-center justify-center w-full z-1',
          {
            'group-hover:text-borderP ': withBg,
            'group-hover:text-yellow-500 group-hover:scale-1.4': !withBg,
          },
        )}
      >
        {children}
      </div>
    </a>
  );
};
