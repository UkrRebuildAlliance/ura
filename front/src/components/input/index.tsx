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
            <textarea
                {...rest}
                {...field}
                placeholder={placeholder}
                className="min-h-[146px] grow w-full  border-2 border-borderP py-[19px] px-[32px] rounded-20 resize-none"
            />
        );
    }

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
