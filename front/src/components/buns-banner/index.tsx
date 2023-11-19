import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { bunsCards } from './config';
import { BunsCard } from './buns-card';
import { BunsBtn } from './buns-btn';

interface IBunsBanner {
  className?: string;
}

export const BunsBanner = ({ className }: IBunsBanner) => {
  const { t } = useTranslation();

  return (
    <div className={clsx('max-w-[1620px] mx-auto', className)}>
      <h3 className="px-3 font-bold text-center text-black font-montserrat text-title tablet:text-titleTab desktop:text-titleDesk">
        {t('buns_banner.title')}
      </h3>

      <div className="px-3">
        <Swiper
          loop={true}
          slidesPerView={1}
          grabCursor
          speed={3500}
          autoHeight={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 700,
            disableOnInteraction: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {bunsCards.map((card, idx) => (
            <SwiperSlide key={`${idx}-buns-card`} className="buns-swiper">
              <BunsCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-6 mx-auto max-w-fit">
          <BunsBtn left className="buns-left" />
          <BunsBtn className="buns-right" />
        </div>
      </div>
    </div>
  );
};
