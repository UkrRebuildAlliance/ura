type InfoPartnersItem = {
    id: string;
    name: string;
    src: string;
};

export interface InfoPartnersProps {
    baseHref: string;
    data: InfoPartnersItem[];
}
