import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import BurgerIcon from '@/assets/svg/social/burger.svg?react';

interface IBurger {
    className?: string;
    isActive: boolean;
}

export const Burger = ({
    isActive,
    className,
    ...props
}: IBurger & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            className={clsx('menu', { active: isActive }, className)}
        >
            <BurgerIcon />
        </button>
    );
};
