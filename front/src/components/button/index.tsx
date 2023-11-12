import { ReactNode } from 'react';
import { getStyles } from './styles';

export const Button = ({
  icon,
  text,
  className,
}: {
  text: string;
  icon?: ReactNode;
  className?: string;
}) => {
  const { main } = getStyles();
  return (
    <button className={`${main} ${className ? className : ''}`}>
      <span>{text}</span>

      {icon && <div>{icon}</div>}
    </button>
  );
};
