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
    const { main, span } = getStyles({ variant, isActive, className });

    return (
        <button className={main} onClick={onClick}>
            <span className={span}>{text}</span>

            {icon && <div>{icon}</div>}
        </button>
    );
};
