import { useTranslation } from 'react-i18next';

import { ContentText, PageBanner, PageContainer } from '@/components';

import { mock } from './mock';

export const HistoryPage = ({}) => {
    const { t } = useTranslation();

    return (
        <>
            <PageBanner
                title={t('main_banner.ttl')}
                mission={t('main_banner.mission')}
                className="bg-historyBanner_sm laptop:bg-historyBanner"
            />
            <PageContainer>
                <ContentText content={mock} />
            </PageContainer>
        </>
    );
};
