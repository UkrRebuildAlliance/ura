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

    return (
        <input
            {...rest}
            {...field}
            type={type}
            className={styles}
            placeholder={placeholder}
        />
    );
};
