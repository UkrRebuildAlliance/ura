import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainBannerCard } from './main-banner-card';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { banners } from './config';

export const MainBanner = ({ className }: { className?: string }) => {
  return (
    <div tabIndex={-1} className={clsx('laptop:pt-8 laptop:px-5 ', className)}>
      <Swiper
        effect="fade"
        speed={3300}
        allowTouchMove={false}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay]}
        className="MainBannerSlider"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={`${idx}-banner-slide`}>
            <MainBannerCard {...banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
