import clsx from 'clsx';

import { IVariant } from './type';

export const getStyles = (variant: IVariant) => {
  const primaryColor =
    'border-primary enabled:hover:bg-primaryHover enabled:active:scale-95 enabled:transition-all enabled:duration-300';

  const secondaryColor =
    'bg-secondary border-secondary enabled:hover:bg-secondaryHover enabled:active:bg-secondaryActive ';

  const outlineVariant = 'bg-transparent enabled:hover:text-white';

  const baseVariant = 'group/btn enabled:text-white enabled:dark:text-white ';

  return clsx(
    `flex items-center justify-center gap-2 py-2 px-4 box-border max-h-10 decoration-0 rounded disabled:opacity-[0.8] disabled:select-none transition-colors duration-300 ease-in-out border`,
    {
      [`${primaryColor} ${baseVariant} bg-primary`]: variant === 'primary',

      [`${primaryColor} ${outlineVariant} text-primary`]:
        variant === 'outline-primary',

      [`${secondaryColor} ${baseVariant}`]: variant === 'secondary',

      [`${secondaryColor} ${outlineVariant} text-secondary`]:
        variant === 'outline-secondary',
    },
  );
};
