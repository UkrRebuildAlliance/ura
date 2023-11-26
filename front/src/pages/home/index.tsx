import {
  partners,
  NewsBlock,
  BunsBanner,
  MainBanner,
  TeamsBlock,
  PartnersSlider,
} from '@/components';

export const HomePage = () => {
  return (
    <>
      <MainBanner />
      <BunsBanner />
      <NewsBlock />
      <TeamsBlock />
      <PartnersSlider partners={partners} />
    </>
  );
};
