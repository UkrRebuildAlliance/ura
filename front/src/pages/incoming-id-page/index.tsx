import { IncomingDetails, PageHead } from '@/components';
import { message } from '@/components/mock';

export const IncomingByIdPage = ({}) => {
  const [first] = message;
  return (
    <>
      <PageHead title="Вхідне повідомлення" withOutBtn />

      <IncomingDetails {...first} />
    </>
  );
};
