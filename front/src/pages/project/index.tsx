import { useState } from 'react';

import { routes } from '@/constants';
import {
    news,
    Pagination,
    RenderInfo,
    Breadcrumbs,
    PageContainer,
} from '@/components';

export const ProjectPage = ({}) => {
    const [activePage, setActivePage] = useState<number>(1);

    const onPageChange = (page: number) => {
        setActivePage(page);
    };

    return (
        <PageContainer>
            <Breadcrumbs />

            <RenderInfo news={news} to={routes.client.project} />

            <Pagination
                pageSize={3}
                totalCount={27}
                currentPage={activePage}
                onPageChange={onPageChange}
                className="mx-auto max-w-max pt-[40px] laptop:pt-[50px] desktop:pt-[140px]"
            />
        </PageContainer>
    );
};
