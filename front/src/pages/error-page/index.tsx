import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routes } from '@/constants';
import { Footer, Header, PageContainer } from '@/components';

export const ErrorPage = ({}) => {
    const { t } = useTranslation();

    return (
        <>
            <Header />

            <main className="w-full min-h-[calc(100vh-680px)] tablet:min-h-[calc(100vh-486px)] desktop:min-h-[calc(100vh-370px)] pt-[98px] laptop:pt-[136px] desktop:pt-[156px] h-full">
                <PageContainer className="flex flex-col items-center gap-[40px] pb-[100px] tablet:pt-[20px] desktop:pt-[0px] desktop:pb-[150px]">
                    <h1 className="text-[128px] font-semibold tablet:text-[300px]">
                        <span className="text-blueBlack">4</span>
                        <span className="text-second">0</span>
                        <span className="text-third">4</span>
                    </h1>

                    <p className="font-semibold text-[20px] tablet:text-[30px] desktop:text-[40px]">
                        {t('error_page.message1')}
                    </p>

                    <p className="font-semibold text-center text-[16px] tablet:text-[24px] desktop:text-[30px] ">
                        <span>{t('error_page.message2')}</span>

                        <br className="sm:hidden" />

                        <Link
                            to={routes.client.main}
                            className="underline text-[#483BC9]"
                        >
                            {t('error_page.message3')}
                        </Link>

                        <span>{t('error_page.message4')}</span>
                    </p>
                </PageContainer>
            </main>

            <Footer />
        </>
    );
};
