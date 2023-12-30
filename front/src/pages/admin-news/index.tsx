import { routes } from '@/constants';
import { InfoControl, PageHead, news } from '@/components';

export const AdminNews = ({}) => {
    return (
        <>
            <PageHead title="Новини" />

            <InfoControl baseHref={routes.admin.news} data={news} />
        </>
    );
};
