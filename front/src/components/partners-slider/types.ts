interface IPartners {
    src: string;
    name: string;
    href?: string;
}

export interface IPartnerSlider {
    className?: string;
    partners: IPartners[];
}
