import { FieldValues } from 'react-hook-form';

import { ButtonAdminForm, Form } from '@/components';

import { InputAdmin, InputFile } from '..';
import { initial, schema } from './config';
import { IInfoDetailsProps } from './types';

export const InfoDetails = ({
    onSubmit,
    initialState = initial,
}: IInfoDetailsProps) => {
    const onHandleSubmit = (data: FieldValues) => {
        onSubmit(data);
    };

    return (
        <Form
            mode="onChange"
            onSubmit={onHandleSubmit}
            validationSchema={schema}
            defaultValues={initialState}
        >
            <div className="px-5 py-5 rounded-md bg-crumbsText">
                <div className="flex flex-wrap items-start gap-4 tablet:flex-nowrap laptop:mb-5">
                    <div className="max-w-full laptop:max-w-[40%] w-full mb-4">
                        <InputFile name="file" aspect="1.49/1" />
                    </div>

                    <div className="flex flex-wrap w-full gap-5 mb-5">
                        <InputAdmin
                            isWhiteText
                            name="title_ua"
                            label="Заголовок на укр."
                        />

                        <InputAdmin
                            isWhiteText
                            name="title_en"
                            label="Заголовок на анг."
                        />

                        <InputAdmin
                            name="date"
                            type="date"
                            isWhiteText
                            label="Дата випуску новини"
                        />
                    </div>
                </div>

                <InputAdmin
                    isWhiteText
                    type="textarea"
                    className="mb-5"
                    name="content_ua"
                    label="Новина на укр."
                />

                <InputAdmin
                    isWhiteText
                    type="textarea"
                    className="mb-5"
                    name="content_en"
                    label="Новина на анг."
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
