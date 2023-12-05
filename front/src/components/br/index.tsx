interface BrProps {
  className?: string;
}

export const Br = ({ className }: BrProps) => {
  return (
    <div
      className={`w-full h-1 mt-7 mb-[100px] bg-brGradient rounded-full ${
        className ? className : ''
      }`}
    />
  );
};
