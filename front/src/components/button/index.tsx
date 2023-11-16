import { ReactNode } from 'react';

import { getStyles } from './styles';

interface IButton {
  text: string;
  icon?: ReactNode;
  className?: string;
}

export const Button = ({ icon, text, className }: IButton) => {
  const { main } = getStyles();
  return (
    <button className={`${main} ${className ? className : ''}`}>
      <span>{text}</span>

      {icon && <div>{icon}</div>}
    </button>
  );
};
