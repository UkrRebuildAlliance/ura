import { banners } from './config';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper/modules';
import { MainBannerCard } from './main-banner-card';

export const MainBanner = () => {
  return (
    <div className="laptop:pt-8 laptop:px-5">
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
