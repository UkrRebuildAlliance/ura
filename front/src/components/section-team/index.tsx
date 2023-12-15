import { useTranslation } from 'react-i18next';

import { routes } from '@/constants';
import {
    PageTitle,
    LinkViewAll,
    PageContainer,
    TitleContainer,
    teams,
    TeamsCard,
} from '@/components';

export const SectionTeam = ({}) => {
    const { t } = useTranslation();

    return (
        <section>
            <PageContainer>
                <TitleContainer>
                    <PageTitle text={t('teams_page.title')} />

                    <LinkViewAll
                        team
                        to={routes.client.team}
                        className="hidden tablet:flex"
                    />
                </TitleContainer>

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

                <LinkViewAll
                    team
                    to={routes.client.team}
                    className="tablet:hidden"
                />
            </PageContainer>
        </section>
    );
};
