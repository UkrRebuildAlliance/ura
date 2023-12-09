import clsx from 'clsx';

import { isResponsive } from '@/hooks';

export const getStyles = () =>
  clsx('text-ellipsis text-[14px] desktop:text-[16px]', {
    'line-clamp-7': isResponsive.isMobile(),
    'line-clamp-4': !isResponsive.isMobile(),
  });
