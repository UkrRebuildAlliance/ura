import clsx from 'clsx';

import { getStyles } from './styles';
import { InputProps } from './types';
import { SwitchPassword } from './switch';

export const InputAdmin = ({
    id,
    name,
    error,
    label,
    value,
    disabled,
    className,
    isWhiteText,
    placeholder,
    type = 'text',
    ...props
}: InputProps) => {
    const isTypePassword = type === 'password';
    const { currentType, switcher } = SwitchPassword(isTypePassword);
    const changingType = isTypePassword ? currentType : type;

    const { textarea, mainInput } = getStyles(
        error,
        isTypePassword,
        isWhiteText,
    );

    return (
        <>
            {type === 'textarea' && (
                <label
                    className={clsx('flex flex-col w-full gap-3', className)}
                >
                    {label && (
                        <span
                            className={clsx('pl-1 mb-1 text-sm ', {
                                'text-white': isWhiteText,
                            })}
                        >
                            {label}
                        </span>
                    )}

                    <div className="flex flex-col w-full gap-2">
                        <textarea
                            {...props}
                            name={name}
                            value={value}
                            className={textarea}
                        />
                        {error && <span className="text-warning">{error}</span>}
                    </div>
                </label>
            )}

            {type !== 'textarea' && (
                <label className={clsx('flex flex-col w-full', className)}>
                    {label && (
                        <span
                            className={clsx('pl-1 mb-1 text-sm text-text', {
                                'text-white': isWhiteText,
                            })}
                        >
                            {label}
                        </span>
                    )}

                    <div className="relative">
                        <input
                            name={name}
                            value={value}
                            id={id ?? name}
                            type={changingType}
                            disabled={disabled}
                            placeholder={placeholder}
                            {...props}
                            onChange={(e) => {
                                if (props.onChange) {
                                    props.onChange(e);
                                }
                            }}
                            className={mainInput}
                        />

                        {isTypePassword && switcher}
                    </div>

                    {error && (
                        <span className="mt-1 text-xs text-warning">
                            {error}
                        </span>
                    )}
                </label>
            )}
        </>
    );
};
