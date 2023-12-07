interface BrProps {
  className?: string;
}

export const Br = ({ className }: BrProps) => {
  return (
    <div
      className={`w-full h-1 mt-3 tablet:mt-5 desktop:mt-7 mb-[30px] desktop:mb-[60px] bg-brGradient rounded-full ${
        className ? className : ''
      }`}
    />
  );
};
