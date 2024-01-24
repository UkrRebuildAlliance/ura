import { routes } from '@/constants';

export const links = [
  {
    name: 'Головна',
    href: routes.admin.dashboard,
  },
  {
    name: 'Повідомлення',
    href: routes.admin.incoming,
  },
  {
    name: 'Новини',
    href: routes.admin.news,
  },
  {
    name: 'Проєкти',
    href: routes.admin.project,
  },
  {
    name: 'Дослідження',
    href: routes.admin.discover,
  },
  {
    name: 'Звіти',
    href: routes.admin.reporting,
  },
  {
    name: 'Партнери',
    href: routes.admin.partner,
  },
];
