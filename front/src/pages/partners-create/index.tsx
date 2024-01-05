import { PageHead, PartnersDetails } from '@/components';

export const PartnersCreatePage = ({}) => {
    return (
        <>
            <PageHead title="Додати партнера" />

            <PartnersDetails onSubmit={(ee) => console.log(ee)} />
        </>
    );
};
