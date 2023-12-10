import { Breadcrumbs, PageTitle, Br, ContentText } from '@/components';

import { mock } from './config';

export const PageById = ({}) => {
    return (
        <div className="max-w-[1620px] mt-7 tablet:mt-[60px] mb-[80px] desktop:mb-[168px] mx-[20px] tablet:mx-[100px] desktopLg:mx-auto">
            <Breadcrumbs />

            <div
                style={{
                    backgroundImage: `url(${mock.img})`,
                }}
                className="max-w-full bg-cover bg-center aspect-[2/1.29] mb-[40px] desktop:mb-[50px] desktop:aspect-[2.7/1] overflow-hidden rounded-20"
            />

            <PageTitle news align="left" text={mock.title} />

            <Br />

            <p className="mb-5 desktop:mb-[50px] text-xs tablet:text-[18px] desktop:text-[24px] font-bold">
                {mock.date}
            </p>

            <ContentText content={mock.content} />
        </div>
    );
};
