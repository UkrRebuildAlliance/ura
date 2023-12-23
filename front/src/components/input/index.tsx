import {
    FieldValues,
    useController,
    UseControllerProps,
} from 'react-hook-form';

import { getStyles } from './styles';

interface InputProps extends UseControllerProps<FieldValues> {
    type?: string;
    placeholder?: string;
}

export const Input = ({
    name,
    rules,
    control,
    placeholder,
    type = 'text',
    ...rest
}: InputProps) => {
    const {
        field,
        fieldState: { error },
    } = useController({ control, name, rules });

    const styles = getStyles(!!error);

    if (type === 'textarea') {
        return (
            <div className="flex flex-col w-full">
                <textarea
                    {...rest}
                    {...field}
                    placeholder={placeholder}
                    className={styles.textarea}
                />

                {error && (
                    <p className="mt-2 ml-5 text-orange-500">{error.message}</p>
                )}
            </div>
        );
    }

    return (
        <div>
            <input
                {...rest}
                {...field}
                type={type}
                className={styles.input}
                placeholder={placeholder}
            />

            {error && (
                <p className="mt-2 ml-5 text-orange-500">{error.message}</p>
            )}
        </div>
    );
};
