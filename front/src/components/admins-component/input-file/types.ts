import { FieldValues, UseFormRegister } from 'react-hook-form';

export type AspectType = '1.29/1' | '1.49/1';

export interface InputFileProps {
  src?: string;
  name: string;
  aspect?: AspectType;
  textExampleSize?: string;
  register?: UseFormRegister<FieldValues>;
}
