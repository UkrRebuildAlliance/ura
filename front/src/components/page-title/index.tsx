import clsx from 'clsx';

interface IPageTitle {
  text: string;
  className?: string;
}

export const PageTitle = ({ className, text }: IPageTitle) => {
  return (
    <h1
      className={clsx(
        'text-center font-montserrat text-[24px] font-bold leading-[140%] tablet:text-[40px] text-black desktop:text-[70px]',
        className,
      )}
    >
      {text}
    </h1>
  );
};
