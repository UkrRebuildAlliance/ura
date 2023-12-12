import { Breadcrumbs, ContentText, PageContainer } from '@/components';

import { teamsById } from '@/components/mock';

export const TeamsById = ({}) => {
    const { about, img, job_title, name } = teamsById;

    return (
        <PageContainer>
            <Breadcrumbs />
            <div className="flex flex-col gap-[24px] items-center sm:items-start sm:block">
                <img
                    src={img}
                    alt={name}
                    className="aspect-[0.8/1] w-[calc(100vw*0.5)] max-w-[384px] hidden float-left sm:block sm:mr-[20px] mb-[20px] laptop:mb-[34px] laptop:mr-[52px]"
                />

                <h4 className="font-bold text-[24px] sm:mb-[32px] laptop:text-[40px] desktop:text-[60px] desktop:mb-[4px]">
                    {name}
                </h4>

                <div className="max-w-[42%] aspect-[0.8/1] sm:hidden">
                    <img src={img} alt={name} className="flex w-full" />
                </div>

                <p className="font-normal text-[18px] text-center sm:text-left sm:mb-[32px] laptop:text-[30px] desktop:text-[50px] desktop:mb-[60px] desktopLg:max-w-[90%]">
                    {job_title}
                </p>

                <ContentText content={about} isTeamId />
            </div>
        </PageContainer>
    );
};
