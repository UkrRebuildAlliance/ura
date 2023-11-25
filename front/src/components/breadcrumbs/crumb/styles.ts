import clsx from 'clsx';

export const getStyles = () => {
  return {
    link: clsx(
      'capitalize font-montserrat text-[20px] font-normal text-crumbsText hover:scale-110 duration-150 transition desktop:text-[24px]',
    ),
    p: clsx(
      'capitalize font-montserrat text-[20px] font-bold text-crumbsText select-none desktop:text-[24px]',
    ),
  };
};
