import { useMediaQuery } from 'react-responsive';

import { responsive } from '@/constants';

const { tabletMinWidth, laptopMinWidth, desktopMinWidth } = responsive;

export const isMobile = () => useMediaQuery({ maxWidth: tabletMinWidth - 1 });

export const isNotMobile = () => useMediaQuery({ minWidth: tabletMinWidth });

export const isTablet = () =>
  useMediaQuery({
    minWidth: tabletMinWidth,
    maxWidth: laptopMinWidth - 1,
  });

export const isTabletUp = () =>
  useMediaQuery({
    minWidth: tabletMinWidth,
  });

export const isLaptop = () =>
  useMediaQuery({
    minWidth: laptopMinWidth,
    maxWidth: desktopMinWidth - 1,
  });

export const isDesktop = () => useMediaQuery({ minWidth: desktopMinWidth });
