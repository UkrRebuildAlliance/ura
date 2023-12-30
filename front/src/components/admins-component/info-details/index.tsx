import * as Yup from 'yup';
import { FieldValues } from 'react-hook-form';

import { ButtonAdminForm, Form } from '@/components';

import { InputAdmin, InputFile } from '..';

const fileSize = 5 * 1024 * 1024;
const acceptFile = ['image/png', 'image/jpeg', 'image/jpg'];

const schema = Yup.object().shape({
    file: Yup.mixed()
        .required('File is required')
        .test('fileSize', 'File size cannot be larger than 5MB', (value) => {
            const fieldArray = Array.from(value as FileList);

            return fieldArray[0].size <= fileSize;
        })
        .test('fileType', 'Unsupported file type', (value) => {
            const fieldArray = Array.from(value as FileList);

            return acceptFile.includes(fieldArray[0].type);
        }),
});

export const InfoDetails = ({}) => {
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <Form
            mode="onChange"
            onSubmit={onSubmit}
            validationSchema={schema}
            defaultValues={{ file: null }}
        >
            <div className="px-5 py-5 rounded-md bg-crumbsText">
                <div className="flex flex-wrap gap-4 tablet:flex-nowrap">
                    <InputFile name="file" />

                    <div className="flex flex-wrap w-full gap-5 mb-5">
                        <InputAdmin
                            name="asd"
                            label="Заголовок на укр."
                            isWhiteText
                        />

                        <InputAdmin
                            name="asd1"
                            label="Заголовок на анг."
                            isWhiteText
                        />

                        <InputAdmin
                            name="asd1"
                            isWhiteText
                            type="date"
                            label="Дата випуску новини"
                        />
                    </div>
                </div>

                <InputAdmin
                    name="asd1"
                    isWhiteText
                    type="textarea"
                    label="Новина на укр."
                    className="mb-5"
                />

                <InputAdmin
                    name="asd1"
                    isWhiteText
                    type="textarea"
                    label="Новина на анг."
                    className="mb-5"
                />

                <ButtonAdminForm
                    type="submit"
                    text="Створити"
                    variant="primary"
                    className="ml-auto"
                />
            </div>
        </Form>
    );
};
