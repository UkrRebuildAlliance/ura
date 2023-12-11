import { useTranslation } from 'react-i18next';

import { Button, partners, Breadcrumbs, PageContainer } from '@/components';
import { PartnersCard } from '@/components/new-partner-card';

export const PartnersPage = ({}) => {
    const { t } = useTranslation();

    return (
        <PageContainer>
            <Breadcrumbs />

            <div className="flex flex-col gap-8 tablet:gap-[44px] desktop:gap-[60px] mb-[32px]">
                <p className="font-medium font-montserrat text-[18px] tablet:text-[24px] desktop:text-[36px] desktop:font-semibold">
                    {t('partners_page.main_content.first')}
                </p>

                <p className="font-medium font-montserrat text-[18px] tablet:text-[24px] desktop:text-[36px] desktop:font-semibold">
                    {t('partners_page.main_content.second')}
                </p>
            </div>

            <Button
                variant="primary-outline"
                text={t('partners_page.connect')}
                className="max-w-[300px]"
            />

            <div className="pt-[50px] pb-[112px] laptop:pt-[100px] laptop:pb-[100px] desktopLg:pt-[150px] desktopLg:pb-[186px] flex  gap-[50px_10px] sm:flex-row flex-wrap tablet:gap-[50px_25px] laptop:gap-[50px_30px] desktopLg:tablet:gap-[60px]">
                {partners.map(({ src }, idx) => (
                    <div
                        key={`partners-page-card-${idx}`}
                        className="w-full sm:max-w-[48%] laptop:max-w-[30%] shadow-xl rounded-[20px]"
                    >
                        <PartnersCard img={src} className="w-full max-w-full" />
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};
