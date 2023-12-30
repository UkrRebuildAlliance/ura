import * as Yup from 'yup';
import { FieldValues } from 'react-hook-form';

import { ButtonForm, Form, InputFile } from '@/components';

const fileSize = 20; /* 5 * 1024 * 1024 */
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

export const AdminProject = () => {
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <Form
            onSubmit={onSubmit}
            validationSchema={schema}
            defaultValues={{ file: null }}
        >
            <InputFile name="file" />
            <ButtonForm text="Завантажити" type="submit" />
        </Form>
    );
};
