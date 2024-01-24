import { useParams } from 'react-router-dom';

import { Breadcrumbs, ContentText, PageContainer } from '@/components';

import { teams } from '@/components/mock';

export const TeamsById = ({}) => {
  const { teamId } = useParams();

  const person = teams.find(({ id }) => id === teamId);

  return (
    <PageContainer>
      <Breadcrumbs />
      <div className="flex flex-col gap-[24px] items-center sm:items-start sm:block">
        <img
          src={person?.src}
          alt={person?.name}
          className="aspect-[0.8/1] w-[calc(100vw*0.5)] max-w-[384px] hidden float-left sm:block sm:mr-[20px] mb-[20px] laptop:mb-[34px] laptop:mr-[52px]"
        />

        <h4 className="font-bold text-[24px] sm:mb-[32px] laptop:text-[40px] desktop:text-[60px] desktop:mb-[4px]">
          {person?.name}
        </h4>

        <div className="max-w-[60%] aspect-[0.8/1] sm:hidden">
          <img src={person?.src} alt={person?.name} className="flex w-full" />
        </div>

        <p className="font-normal text-[18px] text-center sm:text-left sm:mb-[32px] laptop:text-[30px] desktop:text-[50px] desktop:mb-[60px] desktopLg:max-w-[90%]">
          {person?.job_title}
        </p>

        {person?.about.length && (
          <ContentText content={person.about} isTeamId />
        )}

        {!!person?.about.length && (
          <div className="pb-[150px] sm:pb-[300px] tablet:pb-[350px]"></div>
        )}
      </div>
    </PageContainer>
  );
};
