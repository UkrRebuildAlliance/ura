type InfoControlItem = {
    id: string;
    date: string;
    title: string;
    content: string;
};

export interface IInfoControlProps {
    baseHref: string;
    data: InfoControlItem[];
}
