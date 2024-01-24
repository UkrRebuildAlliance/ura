import { quantityCard } from '@/utils/helpers';
import { InfoBlock, LinkViewAll } from '@/components';

interface GetDataProps {
  to?: string;
  news: {
    id: string;
    src: string;
    date: string;
    title: string;
    content: string[];
  }[];
  shortVersion?: boolean;
}

export const RenderInfo = ({ news, shortVersion, to }: GetDataProps) => {
  return (
    <>
      <div className="flex flex-col gap-10 tablet:gap-10 tablet:flex-row tablet:flex-wrap laptop:justify-between desktop:gap-[100px_10px] desktopLg:gap-[100px_60px]">
        {news.map(({ id, src, content, date, title }, idx) => {
          if (shortVersion && idx >= quantityCard()) {
            return;
          }

          return (
            <InfoBlock
              img={src}
              date={date}
              title={title}
              to={`${to}/${id}`}
              text={content.join(' ')}
              key={`main-news-block-${idx}`}
            />
          );
        })}
      </div>

      {shortVersion && to && (
        <LinkViewAll to={to} className="pt-8 tablet:hidden" />
      )}
    </>
  );
};
