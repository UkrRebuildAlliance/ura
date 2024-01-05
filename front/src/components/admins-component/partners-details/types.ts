import { FieldValues } from 'react-hook-form';

export interface IInitialState {
    name_ua: string;
    name_en: string;
    file: FileList | null | string;
}

export interface IPartnersDetailsProps {
    initialState?: IInitialState;
    onSubmit: (data: FieldValues) => void;
}
