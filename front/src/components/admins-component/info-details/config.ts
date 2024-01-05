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
        .test('fileSize', 'Фото не повинно бути быльше 5МВ', (value) => {
            if (typeof value === 'string') {
                return true;
            }

            const fieldArray = Array.from(value as FileList);

            return fieldArray[0].size <= fileSize;
        })
        .test('fileType', 'Unsupported file type', (value) => {
            if (typeof value === 'string') {
                console.log(value);

                return true;
            }
            const fieldArray = Array.from(value as FileList);

            return acceptFile.includes(fieldArray[0].type);
        }),
    title_ua: Yup.string()
        .required("Поле об'явзкове")
        .matches(ukrainianLettersRegExp, 'Тільки українські літери'),
    title_en: Yup.string()
        .required("Поле об'явзкове")
        .matches(englishLettersRegExp, 'Тільки англійскі літери'),
    content_ua: Yup.string()
        .required("Поле об'явзкове")
        .matches(ukrainianLettersRegExp, 'Тільки українські літери'),
    content_en: Yup.string()
        .required("Поле об'явзкове")
        .matches(englishLettersRegExp, 'Тільки англійскі літери'),
    date: Yup.date().required("Поле об'явзкове"),
});

export const initial: IInitialState = {
    file: null,
    title_ua: '',
    title_en: '',
    date: null,
    content_ua: '',
    content_en: '',
};
