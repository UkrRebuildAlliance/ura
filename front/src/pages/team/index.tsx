import { useTranslation } from 'react-i18next';

import { teams } from '@/components/mock/teams';
import { PageBanner, PageContainer, TeamsCard } from '@/components';

export const TeamPage = ({}) => {
    const { t } = useTranslation();
    return (
        <>
            <PageBanner
                title={t('main_banner.ttl')}
                mission={t('main_banner.mission')}
                className="bg-teamBanner_sm laptop:bg-teamBanner"
            />
            <PageContainer>
                <div className="flex flex-wrap justify-between w-full gap-[20px_0] mb-[32px] tablet:mb-0">
                    {teams.map(({ src, name, job_title, id }, idx) => (
                        <div
                            key={`home-teams-block-${idx}`}
                            className="max-w-[calc(48%)] w-full laptop:max-w-[24%]"
                        >
                            <TeamsCard
                                id={id}
                                img={src}
                                name={name}
                                job_title={job_title}
                            />
                        </div>
                    ))}
                </div>
            </PageContainer>
        </>
    );
};
