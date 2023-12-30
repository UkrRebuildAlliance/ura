import { IButton } from './types';
import { getStyles } from './styles';

export const Button = ({
    icon,
    text,
    disabled,
    isActive,
    className,
    variant = 'primary',
    ...props
}: IButton) => {
    const { main, span, bg } = getStyles({
        variant,
        isActive,
        disabled,
        className,
    });

    return (
        <button className={main} {...props}>
            <div className={bg} />
            <span className={span}>{text}</span>
            {icon && <div>{icon}</div>}
        </button>
    );
};
