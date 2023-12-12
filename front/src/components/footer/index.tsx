import { useTranslation } from 'react-i18next';

import { Logo } from '..';
import { SocialMedia } from '../social-media';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-footerGradient pt-[60px] pb-[80px] tablet:px-10 desktop:py-[60px] desktop:px-0">
            <div className="max-w-[240px] w-full mx-auto flex flex-col items-center gap-[40px] tablet:max-w-full desktop:max-w-[1620px] desktop:px-4 desktopLg:px-0">
                <Logo isFooter />

                <div className="flex flex-col gap-8 tablet:flex-row tablet:flex-wrap tablet:justify-between desktop:gap-0 desktop:w-full">
                    <div className="flex flex-col gap-5 text-center text-white font-montserrat tablet:max-w-[200px] tablet:w-full tablet:text-start">
                        <h6 className="font-semibold text-[16px] text-white">
                            {t('footer.addresses_title')}
                        </h6>

                        <p className="font-normal text-[14px] text-white">
                            {t('footer.addresses')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-center text-white font-montserrat tablet:max-w-[200px] tablet:w-full tablet:text-start">
                        <h6 className="font-semibold text-white">
                            {t('footer.tel_title')}
                        </h6>

                        <a
                            href="tel:+380001232233"
                            className="font-normal text-[14px] text-white"
                        >
                            +38(000)123 22 33
                        </a>
                    </div>

                    <div className="flex flex-col gap-5 text-center text-white font-montserrat tablet:max-w-[200px] tablet:w-full tablet:text-start">
                        <h6 className="font-semibold text-white">
                            {t('footer.write_us_title')}
                        </h6>

                        <a
                            href="mailto:Info@ukrainerebuild.com.ua"
                            className="font-normal text-[14px] text-white"
                        >
                            Info@ukrainerebuild.com.ua
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-5 text-center text-white font-montserrat tablet:w-full desktop:max-w-max desktop:text-start">
                        <h6 className="w-full font-semibold text-white">
                            {t('footer.social_title')}
                        </h6>

                        <SocialMedia className="gap-[22px] text-rose-500" />
                    </div>
                </div>

                <p className="text-white">
                    {t('footer.copyright')} &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
