import { NotMobile } from '@/utils/responsive';
import { Breadcrumbs, PageTitle, Br, ContentText } from '@/components';

import { mock } from './config';

export const NewById = ({}) => {
  return (
    <div className="max-w-[1620px] mt-[60px] mb-[70px] mx-[30px] tablet:mx-[100px] desktop:mb-[168px] desktopLg:mx-auto">
      <NotMobile>
        <Breadcrumbs />
      </NotMobile>

      <div className="max-w-full mb-[50px] overflow-hidden rounded-20">
        <img
          alt="news"
          src={mock.img}
          className="max-w-full object-fit desktop:object-cover aspect-[2/1]"
        />
      </div>

      <PageTitle text={mock.title} />

      <Br />

      <ContentText content={mock.content} />
    </div>
  );
};
