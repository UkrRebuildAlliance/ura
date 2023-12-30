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
    className?: string;
    isActive?: boolean;
    variant?: VariantType;
}

export interface IButtonStyles {
    disabled?: boolean;
    isActive?: boolean;
    className?: string;
    variant: VariantType;
}
