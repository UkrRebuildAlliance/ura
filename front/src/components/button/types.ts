import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type VariantType = 'primary' | 'primary-outline';

interface CustomButton
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export interface IButton extends Omit<CustomButton, 'ref'> {
    text: string;
    icon?: ReactNode;
    variant?: VariantType;
    className?: string;
    isActive?: boolean;
}

export interface IButtonStyles {
    isActive?: boolean;
    className?: string;
    variant: VariantType;
}
