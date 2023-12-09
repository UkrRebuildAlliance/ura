import { routes } from '@/constants';
import { quantityCard } from '@/utils/helpers';

import { InfoBlock, LinkViewAll } from '..';

interface GetDataProps {
  news: {
    id: string;
    src: string;
    content: string;
    date: string;
    title: string;
  }[];
  shortVersion?: boolean;
}

export const GetData = ({ news, shortVersion }: GetDataProps) => {
  return (
    <>
      <div className="flex flex-col gap-10 tablet:gap-10 laptop:flex-row laptop:flex-wrap laptop:justify-between desktop:gap-[100px_10px] desktopLg:gap-[100px_60px]">
        {news.map(({ id, src, content, date, title }, idx) => {
          if (shortVersion && idx >= quantityCard()) {
            return;
          }

          return (
            <InfoBlock
              img={src}
              date={date}
              title={title}
              text={content}
              key={`main-news-block-${idx}`}
              to={`${routes.client.news}/${id}`}
            />
          );
        })}
      </div>

      {shortVersion && (
        <LinkViewAll to={routes.client.news} className="pt-8 tablet:hidden" />
      )}
    </>
  );
};
