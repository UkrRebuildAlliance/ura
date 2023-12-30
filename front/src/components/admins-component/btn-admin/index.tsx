import clsx from 'clsx';

import './styles.css';
import { IButton } from './type';
import { getStyles } from './styles';

export const ButtonAdmin = ({
    icon,
    text,
    disabled,
    className,
    iconRight,
    isFetching,
    variant = 'primary',
    ...rest
}: IButton) => {
    const btnStyles = getStyles(variant);
    const classIcon = clsx('group/btn', {
        'order-1': iconRight,
        'order-0': !iconRight,
    });

    return (
        <button
            {...rest}
            disabled={disabled}
            className={className ? `${btnStyles} ${className}` : btnStyles}
        >
            {!isFetching ? (
                <>
                    {icon && <div className={classIcon}>{icon}</div>}
                    {text && (
                        <span
                            className={clsx('select-none group/btn', {
                                'text-white group-hover/btn:text-loginBg':
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
