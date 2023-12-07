import { useTranslation } from 'react-i18next';

import { Card } from './card';
import { bunsCards } from './config';
import { PageContainer, PageTitle } from '..';

export const AreasActivity = ({}) => {
    const { t } = useTranslation();

    return (
        <section>
            <PageContainer>
                <PageTitle
                    text={t('buns_banner.title')}
                    className="mb-[30px] laptop:mb-[50px] desktop:mb-[100px]"
                />

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
