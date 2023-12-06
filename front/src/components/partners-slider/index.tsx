import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { PartnersBlock, SliderBtn } from '@/components';

import { IPartnerSlider } from './types';
import { breakPoints, buttonsConfig } from './config';

export const PartnersSlider = ({ className, partners }: IPartnerSlider) => {
    const { t } = useTranslation();
    return (
        <section className="pt-[50px] pb-[90px] tablet:pb-[120px]">
            <div
                className={clsx(
                    'max-w-[1620px] tablet:px-[100px] desktop:p-0 mx-auto ',
                    className,
                )}
            >
                <h3 className=" font-bold desktop:pl-8 min-[1770px]:pl-0 tablet:px-0 text-center tablet:text-left text-black font-montserrat text-title tablet:text-titleTab desktop:text-titleDesk mb-[30px] tablet:mb-[50px] desktop:mb-[85px]">
                    {t('partners_slider.title')}
                </h3>
            </div>

            <div
                className={`py-9 bg-contain bg-top tablet:pt-[55px] laptop:py-[66px] desktop:mb-[62px] bg-partners-sm tablet:bg-partners-md desktop:bg-partners-lg`}
            >
                <Swiper
                    grabCursor
                    loop={true}
                    speed={300}
                    spaceBetween={10}
                    slidesPerView={1.22}
                    centeredSlides={true}
                    allowTouchMove={true}
                    breakpoints={breakPoints}
                    modules={[Autoplay, Navigation]}
                    className="partners-slider max-w-[1620px] mx-auto "
                    navigation={{
                        prevEl: '.partners-prev',
                        nextEl: '.partners-next',
                    }}
                >
                    {partners.map(({ src }, idx) => (
                        <SwiperSlide key={`main-partner-slider-${idx}`}>
                            <PartnersBlock
                                src={src}
                                className="w-[260px] h-inherit desktop:h-inherit desktop:w-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="desktop:flex mx-auto gap-[120px] max-w-fit hidden">
                <SliderBtn
                    left
                    className="partners-prev"
                    buttonsConfig={buttonsConfig}
                />

                <SliderBtn
                    buttonsConfig={buttonsConfig}
                    className="partners-next"
                />
            </div>
        </section>
    );
};
