import {
    partners,
    NewsBlock,
    MainBanner,
    SectionTeam,
    AreasActivity,
    PartnersSlider,
} from '@/components';

export const HomePage = () => {
    return (
        <>
            <MainBanner />

            <AreasActivity />

            <NewsBlock />

            <PartnersSlider partners={partners} />

            <SectionTeam />
        </>
    );
};
