import { isResponsive } from '@/hooks';
import { ChildrenProps } from '@/types';

const { isMobile, isNotMobile, isTablet, isTabletUp, isLaptop, isDesktop } =
  isResponsive;

export const Mobile = ({ children }: ChildrenProps) => {
  return isMobile() ? children : null;
};

export const NotMobile = ({ children }: ChildrenProps) => {
  return isNotMobile() ? children : null;
};

export const Tablet = ({ children }: ChildrenProps) => {
  return isTablet() ? children : null;
};

export const TabletUp = ({ children }: ChildrenProps) => {
  return isTabletUp() ? children : null;
};

export const Laptop = ({ children }: ChildrenProps) => {
  return isLaptop() ? children : null;
};

export const Desktop = ({ children }: ChildrenProps) => {
  return isDesktop() ? children : null;
};
