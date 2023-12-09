import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { routes } from '@/constants';
import {
    PageTitle,
    LinkViewAll,
    PartnersCard,
    PageContainer,
    TitleContainer,
} from '@/components';

import './style.css';
import { breakPoints } from './config';
import { IPartnerSlider } from './types';

export const PartnersSlider = ({ className, partners }: IPartnerSlider) => {
    const { t } = useTranslation();

    return (
        <section className={clsx('partner-slider', className)}>
            <PageContainer>
                <TitleContainer>
                    <PageTitle text={t('partners_slider.title')} />

                    <LinkViewAll
                        team
                        to={routes.client.partner}
                        className="hidden tablet:flex"
                    />
                </TitleContainer>

                <Swiper
                    loop={true}
                    speed={10000}
                    centeredSlides={true}
                    allowTouchMove={false}
                    breakpoints={breakPoints}
                    modules={[Autoplay, Navigation]}
                    className="partners-slider mb-[32px] tablet:mb-0"
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                >
                    {partners.map(({ src }, idx) => (
                        <SwiperSlide key={`main-partner-slider-${idx}`}>
                            <PartnersCard img={src} />
                        </SwiperSlide>
                    ))}

                    {partners.map(({ src }, idx) => (
                        <SwiperSlide key={`main-partner-slider-${idx}-2`}>
                            <PartnersCard img={src} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <LinkViewAll
                    team
                    to={routes.client.partner}
                    className="tablet:hidden"
                />
            </PageContainer>
        </section>
    );
};
