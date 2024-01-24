import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';

import { constants } from '@/constants';
import { formatPhone, getDisabled } from '@/utils/helpers';
import {
  Maps,
  Input,
  Button,
  Address,
  Breadcrumbs,
  SocialMedia,
  PageContainer,
} from '@/components';

export const Contacts = ({}) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      phone: '',
      message: '',
      firstName: '',
    },
  });

  const isDisabled = getDisabled(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <PageContainer>
      <Breadcrumbs />

      <div className="flex flex-col laptop:flex-row gap-[50px] laptop:gap-[90px] desktop:gap-[80px] mb-10 laptop:mb-20 desktop:mb-[100px]">
        <div className="flex flex-col gap-4 laptop:gap-[58px] desktop:gap-[58px]">
          <div>
            <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold leading-tight">
              {t('footer.addresses_title')}
            </h4>

            <span className="text-[14px] laptop:text-[16px] desktop:text-[22px] leading-[115.5%]">
              <Address />
            </span>
          </div>

          <div>
            <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold leading-tight">
              {t('footer.tel_title')}
            </h4>

            <a
              href={`tel:${constants.phone}`}
              className="text-[14px] laptop:text-[16px] desktop:text-[22px] leading-[115.5%]"
            >
              {formatPhone(constants.phone)}
            </a>
          </div>

          <div>
            <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold leading-tight">
              {t('footer.write_us_title')}
            </h4>

            <a
              href={`mailto:${constants.email}`}
              className="text-[14px] laptop:text-[16px] desktop:text-[22px] leading-[115.5%]"
            >
              {constants.email}
            </a>
          </div>

          <div>
            <h4 className="mb-3 laptop:text-[18px] desktop:text-[24px] font-semibold leading-tight">
              {t('footer.social_title')}
            </h4>

            <SocialMedia className="gap-[10px] laptop:gap-6" />
          </div>
        </div>

        <div id="contact_form" className="flex flex-col w-full">
          <h3 className="text-center laptop:text-left text-[24px] laptop:text-[26px] desktop:text-[40px] font-semibold text-borderP mb-5 desktop:mb-12">
            {t('contacts.stillQuestions')}
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full desktop:flex-row gap-[30px] laptop:gap-5 desktop:gap-12">
              <div className="flex flex-col gap-5 desktop:gap-[30px] w-full">
                <Input
                  name="firstName"
                  control={control}
                  rules={{
                    required: t('contacts.errors.name'),
                    minLength: {
                      value: 2,
                      message: t('contacts.errors.nameShort'),
                    },
                  }}
                  placeholder={t('inputs.name_contacts')}
                />
                <Input
                  name="phone"
                  control={control}
                  placeholder="+380501232233"
                  rules={{
                    required: t('contacts.errors.phone'),
                    pattern: {
                      value: /^\+\d{3}\d{3}\d{2}\d{2}\d{2}$/,
                      message: t('contacts.errors.phoneInvalid'),
                    },
                  }}
                />
                <Input
                  name="email"
                  control={control}
                  placeholder="Dmitriy.Latvinenko@gmail.com"
                  rules={{
                    required: t('contacts.errors.email'),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t('contacts.errors.emailInvalid'),
                    },
                  }}
                />
              </div>

              <Input
                name="message"
                type="textarea"
                control={control}
                placeholder={t('inputs.message_contacts')}
                rules={{
                  required: t('contacts.errors.message'),
                  minLength: {
                    value: 10,
                    message: t('contacts.errors.messageShort'),
                  },
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={isDisabled}
              text={t('buttons.send')}
              variant="primary-outline"
              className="mt-[50px] laptop:mt-10 desktop:mt-20 tablet:max-w-[250px] ml-auto"
            />
          </form>
        </div>
      </div>

      <Maps />
    </PageContainer>
  );
};
