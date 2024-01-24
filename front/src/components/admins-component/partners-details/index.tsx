import { FieldValues } from 'react-hook-form';

import { ButtonAdminForm, Form } from '@/components';

import { initial, schema } from './config';
import { InputAdmin, InputFile } from '..';
import { IPartnersDetailsProps } from './types';

export const PartnersDetails = ({
  onSubmit,
  initialState = initial,
}: IPartnersDetailsProps) => {
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
      <div className="flex flex-wrap w-full gap-10 p-4 py-6 rounded-md tablet:gap-6 tablet:justify-between bg-crumbsText">
        <div className="flex flex-col w-full gap-3 tablet:max-w-[45%]">
          <InputAdmin
            isWhiteText
            name="name_ua"
            label="Укажіть ім'я вашого партнера на укр."
          />
          <InputAdmin
            isWhiteText
            name="name_en"
            label="Укажіть ім'я вашого партнера на анг."
          />
        </div>

        <div className="flex items-center w-full max-w-full tablet:max-w-[45%] tablet:-order-1">
          <InputFile
            name="file"
            aspect="1.49/1"
            textExampleSize="Розмір зображення 486 на 326 пікселів"
          />
        </div>

        <ButtonAdminForm
          type="submit"
          text="Додати"
          variant="primary"
          className="ml-auto"
        />
      </div>
    </Form>
  );
};
