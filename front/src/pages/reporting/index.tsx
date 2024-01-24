import { useTranslation } from 'react-i18next';

import logo_reporting from '@/assets/img/logo_reporting.png';
import { Breadcrumbs, Button, PageContainer } from '@/components';

export const ReportingPage = ({}) => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Breadcrumbs />

      <div className="flex w-full flex-col justify-center items-center gap-[50px] pb-[66px] sm:pt-[50px] laptop:flex-row laptop:items-start laptop:gap-[132px] laptop:py-[60px] desktop:pt-[112px] desktop:pb-[172px]">
        <img
          src={logo_reporting}
          alt="logo_reporting"
          className="block min-w-[130px] max-w-[40%] aspect-square laptop:min-w-[260px] laptop:max-w-[26%] desktop:min-h-[290px]"
        />

        <div className="w-full flex flex-col justify-start items-center gap-[64px] laptop:max-w-[452px] ">
          <h3 className="text-[18px] font-medium sm:text-[22px] laptop:font-semibold laptop:text-[30px] desktop:text-[36px]">
            {t('reporting_page.title')}
          </h3>

          <Button
            variant="primary-outline"
            text={t('reporting_page.btn')}
            className="max-w-[250px] w-full tablet:max-w-[350px] laptop:max-w-[300px]"
          />
        </div>
      </div>
    </PageContainer>
  );
};
