import clsx from 'clsx';

export const getStyles = (matt?: boolean) => {
  const wrapper = clsx(
    'relative flex items-center justify-center w-full h-full min-w-[200px] tablet:max-w-[264px] tablet:h-[280px] desktop:max-w-[500px] desktop:h-[334px] rounded-[20px]',
    {
      'box-matt backdrop-blur-[10px] before:p-0.5 p-[55px] tablet:py-[75px] tablet:px-[35px] desktop:py-[74px] desktop:px-[114px]':
        matt,
    },
    {
      'box-matt before:p-1 overflow-hidden': !matt,
    },
  );

  const imgWrapper = clsx(
    'flex items-center justify-center w-full rounded-[20px] overflow-hidden',
  );

  const img = clsx('flex object-cover w-full h-full desktop:aspect-[1.497/1]', {
    'tablet:aspect-[1/1.1]': !matt,
  });

  return {
    img,
    wrapper,
    imgWrapper,
  };
};
