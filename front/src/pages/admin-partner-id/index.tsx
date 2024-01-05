import { PageHead, PartnersDetails } from '@/components';
import { IInitialState } from '@/components/admins-component/partners-details/types';

import l1 from '../../components/mock/img/8.png';

export const AdminPartnerId = ({}) => {
    const initial: IInitialState = {
        name_ua: 'Якийсь партнер',
        name_en: 'Some Partner',
        file: l1,
    };

    return (
        <>
            <PageHead title="Партнери" withOutBtn />

            <PartnersDetails
                initialState={initial}
                onSubmit={(data) => console.log(data)}
            />
        </>
    );
};
