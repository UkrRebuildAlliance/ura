import { Breadcrumbs, PageContainer } from '@/components';

import { getStyles } from './style';

interface IPageBanner {
  title: string;
  mission: string;
  className?: string;
}

export const PageBanner = ({ className, title, mission }: IPageBanner) => {
  const { banner, container, ttlStyle, missionStyle } = getStyles({
    className: className,
  });

  return (
    <section className={banner}>
      <PageContainer className="w-full">
        <Breadcrumbs isBanner />

        <div className={container}>
          <h1 className={ttlStyle}>{title}</h1>

          <span className={missionStyle}>{mission}</span>
        </div>
      </PageContainer>
    </section>
  );
};
