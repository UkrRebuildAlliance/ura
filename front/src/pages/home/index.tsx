import { BunsBanner, MainBanner, PartnersSlider, partners } from '@/components';

export const HomePage = () => {
  return (
    <>
      <MainBanner />
      <BunsBanner />
      <PartnersSlider partners={partners} />
    </>
  );
};
