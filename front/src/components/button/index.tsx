import { ReactNode } from 'react';

import { getStyles } from './styles';

interface IButton {
  text: string;
  icon?: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  variant: 'primary' | 'primary-outline';
}

export const Button = ({
  icon,
  text,
  variant,
  onClick,
  isActive,
  className,
}: IButton) => {
  const { main, bg, span } = getStyles({ variant, isActive });

  return (
    <button
      onClick={onClick}
      className={`${main} ${className ? className : ''}`}
    >
      {variant === 'primary-outline' && <div className={bg} />}

      <span className={span}>{text}</span>

      {icon && <div>{icon}</div>}
    </button>
  );
};
