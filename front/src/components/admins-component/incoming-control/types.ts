type IIncomingControlItem = {
    id: string;
    date: string;
    name: string;
    email: string;
    content: string;
    isRead?: boolean;
};

export interface IIncomingControlProps {
    baseHref: string;
    data: IIncomingControlItem[];
}
