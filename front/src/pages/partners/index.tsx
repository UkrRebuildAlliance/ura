import { useTranslation } from 'react-i18next';

import {
    Button,
    partners,
    PageTitle,
    Breadcrumbs,
    PartnersBlock,
} from '@/components';

export const PartnersPage = ({}) => {
    const { t } = useTranslation();

    return (
        <div className="pt-[30px] tablet:pt-[60px] pb-[100px] tablet:pb-[120px] desktop:pb-[150px] px-[30px] tablet:px-[100px] desktopLg:px-0 desktopLg:max-w-[1620px] desktopLg:mx-auto">
            <Breadcrumbs />

            <PageTitle
                text={t('partners_page.title')}
                className="mb-10 tablet:mb-[70px] desktop:mb-[128px]"
            />

            <div className="flex flex-col gap-8 tablet:gap-[44px] desktop:gap-[60px] mb-[50px] tablet:mb-[70px]">
                <p className="font-medium font-montserrat text-[18px] text-black tablet:text-[24px] desktop:text-[36px] desktop:font-semibold">
                    {t('partners_page.main_content.first')}
                </p>

                <p className="font-medium font-montserrat text-[18px] text-black tablet:text-[24px] desktop:text-[36px] desktop:font-semibold">
                    {t('partners_page.main_content.second')}
                </p>
            </div>

            <Button
                className="max-w-[300px] mb-[70px] tablet:mb-[92px] desktop:mb-[150px]"
                variant="primary"
                isActive
                text={t('partners_page.connect')}
            />

            <div className="relative flex flex-wrap justify-center gap-[50px_20px] desktopLg:gap-[50px_60px]">
                {partners.map(({ src }, idx) => (
                    <PartnersBlock
                        src={src}
                        className="relative z-[2] desktop:w-[500px] "
                        key={`partners-page-[${idx}]`}
                    />
                ))}

                <div className="absolute hidden tablet:flex w-[100%] px-5 z-[1] h-[500px] translate-y-1/2 left-1/2 bg-blue_logo bg-contain bg-no-repeat bg-center -translate-x-1/2 "></div>
            </div>
        </div>
    );
};
