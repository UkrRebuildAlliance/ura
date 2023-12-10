import { useTranslation } from 'react-i18next';

import { routes } from '@/constants';
import {
    news,
    PageTitle,
    LinkViewAll,
    PageContainer,
    TitleContainer,
} from '@/components';

import { GetData } from './helper';

export const NewsBlock = ({}) => {
    const { t } = useTranslation();

    return (
        <section className="bg-newsBlock">
            <PageContainer>
                <TitleContainer>
                    <PageTitle text={t('news_page.title')} />

                    <LinkViewAll
                        to={routes.client.news}
                        className="hidden tablet:flex"
                    />
                </TitleContainer>

                <GetData shortVersion news={news} to={routes.client.news} />
            </PageContainer>
        </section>
    );
};
