import { useTranslation } from 'react-i18next';

import { routes } from '@/constants';
import { LinkViewAll, news } from '@/components';

import { GetData } from './helper';

export const NewsBlock = ({}) => {
  const { t } = useTranslation();

  return (
    <section className="bg-newsBlock">
      <div className="px-5 tablet:px-[100px] desktop:px-5 desktopLg:px-0 py-[34px] tablet:py-[64px] desktop:py-[70px] max-w-[1620px] mx-auto">
        <div className="flex justify-between items-center mb-[30px] tablet:mb-[40px] desktop:mb-[100px]">
          <h3 className="w-full font-bold tablet:mx-0 tablet:w-max text-title tablet:text-titleTab desktop:text-titleDesk ">
            {t('news_page.title')}
          </h3>

          <LinkViewAll to={routes.client.news} className="hidden tablet:flex" />
        </div>

        <GetData news={news} />
      </div>
    </section>
  );
};
