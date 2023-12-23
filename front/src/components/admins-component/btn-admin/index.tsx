import clsx from 'clsx';

import './styles.css';
import { IButton } from './type';
import { getStyles } from './styles';

export const ButtonAdmin = ({
    icon,
    text,
    variant,
    disabled,
    className,
    iconRight,
    isFetching,
    ...rest
}: IButton) => {
    const btnStyles = getStyles(variant);
    const classIcon = clsx({ 'order-1': iconRight, 'order-0': !iconRight });

    return (
        <button
            {...rest}
            className={className ? `${btnStyles} ${className}` : btnStyles}
            disabled={disabled}
        >
            {!isFetching ? (
                <>
                    {icon && <div className={classIcon}>{icon}</div>}
                    {text && (
                        <span
                            className={clsx('select-none', {
                                'text-white group-hover:text-loginBg':
                                    variant === 'primary',
                            })}
                        >
                            {text}
                        </span>
                    )}
                </>
            ) : (
                <span className="loader-btn"></span>
            )}
        </button>
    );
};
