import { message } from '@/components/mock';
import { IncomingControl, PageHead } from '@/components/admins-component';

export const IncomingPage = ({}) => {
  return (
    <>
      <PageHead title="Вхідні повідомлення" withOutBtn />

      <IncomingControl baseHref="/dashboard/incoming" data={message} />
    </>
  );
};
