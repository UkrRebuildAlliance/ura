import clsx from 'clsx';

export const getStyles = (matt?: boolean) => {
  const wrapper = clsx(
    'relative  flex items-center select-none justify-center w-[264px] h-[280px] min-w-[200px] tablet:max-w-[264px] tablet:h-[280px] desktop:max-w-[500px] desktop:h-[334px] rounded-[20px]',
    {
      'box-matt backdrop-blur-[35px] before:p-0.5 p-[55px] tablet:py-[75px] tablet:px-[35px] desktop:py-[74px] desktop:px-[114px]':
        matt,
    },
    {
      'box-matt before:p-1 overflow-hidden bg-[rgba(255, 255, 255, 0.66)]w':
        !matt,
    },
  );

  const imgWrapper = clsx(
    'flex items-center justify-center w-full overflow-hidden',
  );

  const img = clsx('flex object-cover w-full h-full', {
    'tablet:aspect-[1/1.1]': !matt,
  });

  return {
    img,
    wrapper,
    imgWrapper,
  };
};
