import { PageHead, PartnersControl, partners } from '@/components';
import { routes } from '@/constants';

export const AdminPartnersPage = ({}) => {
    const mock = partners;
    return (
        <>
            <PageHead title="Партнери" />

            <PartnersControl baseHref={routes.admin.partner} data={mock} />
        </>
    );
};
