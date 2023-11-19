import clsx from 'clsx';

export const getStyles = () => ({
  after: clsx(
    'transition duration-300 delay-100 absolute block w-[98%] h-[98%] rounded-[50%] border-bunsBorder1 border-[4.5px]  border-b-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  ),
  before: clsx(
    'transition duration-300 absolute block w-[75%] h-[75%] rounded-[50%] border-bunsBorder border-[4px]  border-b-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  ),
});
