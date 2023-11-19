import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { bunsCards } from './config';
import { BunsBtn } from './buns-btn';
import { BunsCard } from './buns-card';

interface IBunsBanner {
  className?: string;
}

export const BunsBanner = ({ className }: IBunsBanner) => {
  const { t } = useTranslation();

  return (
    <section
      className={clsx(
        'max-w-[1620px] mx-auto buns-banner py-[50px] tablet:py-[60px] desktop:pt-[140px] desktop:pb-[85px]',
        className,
      )}
    >
      <h3 className="px-3 font-bold text-center text-black font-montserrat text-title tablet:text-titleTab desktop:text-titleDesk mb-[30px] tablet:mb-[50px] desktop:mb-[100px]">
        {t('buns_banner.title')}
      </h3>

      <div className="px-3">
        <Swiper
          grabCursor
          loop={true}
          speed={300}
          slidesPerView={1}
          autoHeight={true}
          spaceBetween={30}
          allowTouchMove={true}
          className="mb-[40px]"
          pagination={{
            el: '.swiper-pagination-buns',
            clickable: true,
          }}
          navigation={{
            prevEl: '.buns-prev',
            nextEl: '.buns-next',
          }}
          modules={[Autoplay, Pagination, Navigation]}
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

        <div className="tablet:flex mx-auto gap-[120px] max-w-fit hidden">
          <BunsBtn left className="buns-prev" />

          <BunsBtn className="buns-next" />
        </div>
      </div>

      <div className="relative swiper-pagination-buns max-w-[500px] gap-4 mx-auto flex justify-center tablet:hidden"></div>
    </section>
  );
};
