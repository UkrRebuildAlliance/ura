import { ReactNode } from 'react';

import './style.css';
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
    const { main, span } = getStyles({ variant, isActive });

    return (
        <button
            onClick={onClick}
            className={`${main} ${
                variant === 'primary-outline' ? 'primary-outline' : ''
            } ${className ? className : ''}`}
        >
            <span className={span}>{text}</span>

            {icon && <div>{icon}</div>}
        </button>
    );
};
