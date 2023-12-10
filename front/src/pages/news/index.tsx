import { useState } from 'react';

import {
    PageTitle,
    Pagination,
    Breadcrumbs,
    PageContainer,
} from '@/components';

export const NewsPage = ({}) => {
    const [activePage, setActivePage] = useState<number>(1);

    const onPageChange = (page: number) => {
        console.log(1);

        setActivePage(page);
    };

    return (
        <PageContainer>
            <Breadcrumbs />

            <PageTitle text="News" />

            <Pagination
                pageSize={3}
                totalCount={27}
                siblingCount={1}
                currentPage={activePage}
                onPageChange={onPageChange}
                className="mx-auto max-w-max"
            />

            <span className="stroke-[10px] stroke-black font-montserrat text-[150px] text-red-500">
                Andrey
            </span>
        </PageContainer>
    );
};
