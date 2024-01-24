import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import { getStyles } from './styles';
import { InputProps } from './types';
import { SwitchPassword } from './switch';

export const InputAdmin = ({
  name,
  label,
  disabled,
  className,
  isWhiteText,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message;

  const isTypePassword = type === 'password';
  const { currentType, switcher } = SwitchPassword(isTypePassword);
  const changingType = isTypePassword ? currentType : type;

  const { textarea, mainInput } = getStyles(
    !!errorText,
    isTypePassword,
    isWhiteText,
  );

  return (
    <>
      {type === 'textarea' && (
        <label className={clsx('flex flex-col w-full gap-3', className)}>
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
            <textarea {...register(name)} {...props} className={textarea} />
            {errorText && (
              <span className="text-xs text-warning">
                {errorText as string}
              </span>
            )}
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
              {...register(name)}
              type={changingType}
              disabled={disabled}
              placeholder={placeholder}
              {...props}
              className={mainInput}
            />

            {isTypePassword && switcher}
          </div>

          {errorText && (
            <span className="mt-1 text-xs text-warning">
              {errorText as string}
            </span>
          )}
        </label>
      )}
    </>
  );
};
