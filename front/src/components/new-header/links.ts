import i18n from '@/i18n';
import { routes } from '@/constants';

import { IMenuLink } from './types';

const { client } = routes;

const t = (key: string) => i18n.t(key);

export const menuLinks: IMenuLink = {
  activities: [
    { name: t('navbar_links.news'), href: client.news },
    { name: t('navbar_links.partners'), href: client.partner },
    { name: t('navbar_links.projects'), href: client.project },
    { name: t('navbar_links.discover'), href: client.discover },
  ],
  about: [
    { name: t('navbar_links.team'), href: client.team },
    { name: t('navbar_links.reporting'), href: client.reporting },
    { name: t('navbar_links.history'), href: client.company_history },
  ],
  contact: client.contacts,
};
