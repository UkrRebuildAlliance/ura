import { ButtonHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

import BurgerIcon from '@/assets/svg/social/burger.svg?react';

interface IBurger {
    className?: string;
    isActive: boolean;
}

export const Burger = ({
    onClick,
    isActive,
    className,
    ...props
}: IBurger & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isButtonDisabled && onClick) {
            onClick(e);

            setButtonDisabled(true);

            setTimeout(() => {
                setButtonDisabled(false);
            }, 350);
        }
    };
    return (
        <button
            {...props}
            onClick={handelClick}
            className={clsx('menu', { active: isActive }, className)}
        >
            <BurgerIcon />
        </button>
    );
};
