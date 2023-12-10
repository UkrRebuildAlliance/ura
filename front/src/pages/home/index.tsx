import {
    partners,
    NewsBlock,
    MainBanner,
    AreasActivity,
    PartnersSlider,
} from '@/components';
import { SectionTeam } from '@/components/section-team';

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
