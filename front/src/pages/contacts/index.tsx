import { useTranslation } from 'react-i18next';
import { FieldValues, useForm } from 'react-hook-form';

import { constants } from '@/constants';
import { formatPhone } from '@/utils/helpers';
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

                <div className="flex flex-col w-full">
                    <h3 className="text-center laptop:text-left text-[24px] laptop:text-[26px] desktop:text-[40px] font-semibold text-borderP mb-5 desktop:mb-12">
                        {t('stillQuestions')}
                    </h3>

                    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                        <div className="flex flex-col w-full desktop:flex-row gap-[30px] laptop:gap-5 desktop:gap-12">
                            <div className="flex flex-col gap-5 desktop:gap-[30px] w-full">
                                <Input
                                    name="firstName"
                                    control={control}
                                    placeholder={t('inputs.name_contacts')}
                                />
                                <Input
                                    name="phone"
                                    control={control}
                                    placeholder="+380501232233"
                                />
                                <Input
                                    name="email"
                                    control={control}
                                    placeholder="Dmitriy.Latvinenko@gmail.com"
                                />
                            </div>

                            <Input
                                type="textarea"
                                name="message"
                                control={control}
                                placeholder={t('inputs.message_contacts')}
                            />

                            {/* <textarea
                                name="message"
                                placeholder={t('inputs.message_contacts')}
                                className="min-h-[146px] w-full border-2 border-borderP py-[19px] px-[32px] rounded-20 resize-none"
                            /> */}
                        </div>

                        <Button
                            type="submit"
                            text={t('buttons.send')}
                            variant="primary-outline"
                            disabled={Object.keys(errors)?.length > 0}
                            className="mt-[50px] laptop:mt-10 desktop:mt-20 tablet:max-w-[250px] ml-auto"
                        />
                    </form>
                </div>
            </div>

            <Maps />
        </PageContainer>
    );
};
