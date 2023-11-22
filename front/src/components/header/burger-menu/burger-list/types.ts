import { Dispatch, SetStateAction } from 'react';

type burgerLink = {
  name: string;
  href: string;
};

export interface IBurgerList {
  text: string;
  className?: string;
  links: burgerLink[];
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
}
