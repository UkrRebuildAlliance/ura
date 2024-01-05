import { FieldValues } from 'react-hook-form';

export interface IInitialState {
    title_ua: string;
    title_en: string;
    content_ua: string;
    content_en: string;
    date: Date | null | string;
    file: FileList | null | string;
}

export interface IInfoDetailsProps {
    initialState?: IInitialState;
    onSubmit: (data: FieldValues) => void;
}
