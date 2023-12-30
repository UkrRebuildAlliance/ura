import { FieldValues, UseFormRegister } from 'react-hook-form';

export type AspectType = '1.29/1';

export interface InputFileProps {
    name: string;
    aspect?: AspectType;
    textExampleSize?: string;
    register?: UseFormRegister<FieldValues>;
}
