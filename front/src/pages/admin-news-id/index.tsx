import { InfoDetails, PageHead } from '@/components';

import l1 from '../../components/mock/img/1.png';

import { IInitialState } from '@/components/admins-component/info-details/types';

const initial: IInitialState = {
  file: l1,
  title_ua: 'qwerqwerqw',
  title_en: 'qwerqwerqwer',
  date: '2024-01-15',
  content_ua: 'qwerqwerqwe',
  content_en: 'qwerqwerqwer',
};

export const AdminNewsId = ({}) => {
  return (
    <>
      <PageHead title="Новини" withOutBtn />

      <InfoDetails initialState={initial} onSubmit={(e) => console.log(e)} />
    </>
  );
};
