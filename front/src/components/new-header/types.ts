export type IHandelId = 'activities' | 'about' | false;

export interface INav {
    activeLink: string | boolean;
    handleClick: (id: IHandelId) => void;
}

interface INavObj {
    name: string;
    href: string;
}
export interface INavLink {
    [key: string]: INavObj[];
}

export interface IMenuLink {
    activities: INavObj[];
    about: INavObj[];
    contact: string;
}
