import { Button } from '@/components';
import { getDisabled } from '@/utils/helpers';
import { useFormContext } from 'react-hook-form';

interface ButtonProps {
    text: string;
    type: 'submit' | 'button' | 'reset';
}

export const ButtonForm = ({ text, type, ...rest }: ButtonProps) => {
    const {
        formState: { errors },
    } = useFormContext();

    const isDisabled = getDisabled(errors);

    return <Button text={text} type={type} {...rest} disabled={isDisabled} />;
};
