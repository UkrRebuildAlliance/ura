import { BunsBanner, MainBanner, PartnersSlider } from '@/components';

import { partners } from './moksPrtners';

export const HomePage = () => {
  return (
    <>
      <MainBanner />
      <BunsBanner />
      <PartnersSlider partners={partners} />
    </>
  );
};
