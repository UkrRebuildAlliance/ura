export type IHandelId = 'activities' | 'about' | false;

export interface INav {
  activeLink: string | boolean;
  handleClick: (id: IHandelId) => void;
}

export interface INavLink {
  [key: string]: {
    name: string;
    href: string;
  }[];
}

export interface IMenuLink {
  activities: {
    name: string;
    href: string;
  }[];
  about: {
    name: string;
    href: string;
  }[];
  contact: string;
}
