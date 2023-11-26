import { useTranslation } from 'react-i18next';

import { routes } from '@/constants';
import { quantityCard } from '@/utils/helpers';
import { InfoBlock, LinkViewAll, teams } from '@/components';

export const TeamsBlock = ({}) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="px-[30px] py-[34px] tablet:px-[100px] tablet:pt-[100px] desktop:pt-[64px] desktop:pb-[115px] desktopLg:px-0 max-w-[1620px] mx-auto">
        <div className=" flex justify-between items-center mb-[30px] tablet:mb-[50px] desktop:mb-[100px]">
          <h3 className="w-full mx-auto tablet:mx-0 tablet:w-max font-bold px-[10px] desktop:pl-8 min-[1770px]:pl-0 tablet:px-0 text-center tablet:text-left text-black font-montserrat text-title tablet:text-titleTab desktop:text-titleDesk ">
            {t('teams_page.title')}
          </h3>

          <LinkViewAll to={routes.client.team} className="hidden tablet:flex" />
        </div>

        <div className="flex flex-col gap-[100px_60px] desktop:flex-wrap desktopLg:flex-row desktop:justify-between">
          {teams.map(({ id, src, content, name }, idx) => {
            if (idx >= quantityCard()) return;

            return (
              <InfoBlock
                team
                img={src}
                title={name}
                text={content}
                className="desktopLg:max-w-[48%]"
                to={`${routes.client.news}/${id}`}
                key={`main-news-block-${idx}`}
              />
            );
          })}
        </div>

        <LinkViewAll
          to={routes.client.news}
          className="pl-[13px] pt-[30px] tablet:hidden"
        />
      </div>
    </section>
  );
};
