import { InfoDetails, PageHead } from '@/components';

export const NewsCreatePage = ({}) => {
    return (
        <>
            <PageHead title="Створення новини" />

            <InfoDetails onSubmit={(data) => console.log(data)} />
        </>
    );
};
