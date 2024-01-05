import * as Yup from 'yup';

import {
    fileSize,
    acceptFile,
    englishLettersRegExp,
    ukrainianLettersRegExp,
} from '@/constants/others';

import { IInitialState } from './types';

export const schema = Yup.object().shape({
    file: Yup.mixed()
        .required("Фото об'явзкове")
        .test('fileSize', 'Фото не повинно бути більше 5МВ', (value) => {
            if (typeof value === 'string') {
                return true;
            }
            const fieldArray = Array.from(value as FileList);

            return fieldArray[0].size <= fileSize;
        })
        .test('fileType', 'Unsupported file type', (value) => {
            if (typeof value === 'string') {
                return true;
            }
            const fieldArray = Array.from(value as FileList);

            return acceptFile.includes(fieldArray[0].type);
        }),
    name_ua: Yup.string()
        .required("Поле об'явзкове")
        .matches(ukrainianLettersRegExp, 'Тільки українські літери'),
    name_en: Yup.string()
        .required("Поле об'явзкове")
        .matches(englishLettersRegExp, 'Тільки англійскі літери'),
});

export const initial: IInitialState = {
    file: null,
    name_ua: '',
    name_en: '',
};
