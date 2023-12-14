import { ReactNode } from 'react';

import './style.css';
import { IButton } from './types';
import { getStyles } from './styles';

export const Button = ({
    icon,
    text,
    isActive,
    className,
    variant = 'primary',
    ...props
}: IButton) => {
    const { main, span } = getStyles({ variant, isActive, className });

    return (
        <button className={main} {...props}>
            <span className={span}>{text}</span>

            {icon && <div>{icon}</div>}
        </button>
    );
};
