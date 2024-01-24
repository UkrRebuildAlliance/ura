import clsx from 'clsx';

interface IStylesCrumps {
  isBanner?: boolean;
}

export const getStyles = ({ isBanner }: IStylesCrumps) => {
  return {
    link: clsx(
      'capitalize font-montserrat text-[20px] font-normal text-crumbsText hover:scale-110 duration-150 transition desktop:text-[24px]',
      {
        'text-white': isBanner,
      },
    ),
    p: clsx(
      'capitalize font-montserrat text-[20px] font-bold text-crumbsText select-none desktop:text-[24px]',
      {
        'text-white': isBanner,
      },
    ),
  };
};
