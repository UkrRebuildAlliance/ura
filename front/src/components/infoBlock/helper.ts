import clsx from 'clsx';

import { isResponsive } from '@/hooks';

export const getStyles = (team?: boolean) => {
  const textBlock = clsx('flex flex-col gap-7', {
    'order-1': !!team,
  });

  const paragraph = clsx(
    'text-ellipsis text-[14px] desktop:text-[16px] text-[#1A1035]',
    {
      [`${isResponsive.isMobile() ? 'line-clamp-8' : 'line-clamp-6'}`]: !team,
    },
    {
      [`${isResponsive.isMobile() ? 'line-clamp-6' : 'line-clamp-12'}`]: team,
    },
  );

  const imgBlock = clsx(
    'flex items-center justify-center overflow-hidden rounded-20',
    {
      'min-w-[400px] h-[334px]': !team,
    },
    {
      'min-w-[400px] h-[380px]': team,
    },
  );

  return {
    imgBlock,
    paragraph,
    textBlock,
  };
};
