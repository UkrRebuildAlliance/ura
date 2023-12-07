import {
    partners,
    NewsBlock,
    BunsBanner,
    MainBanner,
    TeamsBlock,
    AreasActivity,
    PartnersSlider,
} from '@/components';
import decor from '@/assets/img/decorm_center_home.png';

export const HomePage = () => {
    return (
        <>
            <MainBanner />

            <AreasActivity />

            <BunsBanner />

            <NewsBlock />

            <div
                className="hidden w-full max-h-[308px] aspect-video bg-contain desktop:block mt-[50px] mb-[100px]"
                style={{ backgroundImage: `url(${decor})` }}
            />

            <TeamsBlock />

            <PartnersSlider partners={partners} />
        </>
    );
};
