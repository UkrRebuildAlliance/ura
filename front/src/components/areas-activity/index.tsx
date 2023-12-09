import { useTranslation } from 'react-i18next';

import { PageContainer, PageTitle, TitleContainer } from '@/components';

import { Card } from './card';
import { bunsCards } from './config';

export const AreasActivity = ({}) => {
    const { t } = useTranslation();

    return (
        <section>
            <PageContainer>
                <TitleContainer>
                    <PageTitle text={t('buns_banner.title')} />
                </TitleContainer>

                <div className="flex flex-wrap gap-[20px] justify-between sm:gap-[40px_20px] md:gap-[50px_20px] desktop:gap-[40px_20px]">
                    {bunsCards.map((card, idx) => (
                        <Card
                            img={card.href}
                            text={card.content}
                            key={`buns-card-${idx}`}
                        />
                    ))}
                </div>
            </PageContainer>
        </section>
    );
};
