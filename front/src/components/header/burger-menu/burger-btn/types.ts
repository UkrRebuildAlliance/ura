import { Dispatch, SetStateAction } from 'react';

type burgerLink = {
  name: string;
  href: string;
};

export interface IBurgerBtn {
  btnId: number;
  text: string;
  href?: string;
  activeBtn: number;
  className?: string;
  links?: burgerLink[];
  onClick?: Dispatch<SetStateAction<number>>;
}
