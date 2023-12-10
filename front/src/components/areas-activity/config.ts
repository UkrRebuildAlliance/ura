import i18n from '@/i18n';
import idea from '@/assets/img/idea.png';
import lists from '@/assets/img/lists.png';
import buns_case from '@/assets/img/case.png';
import percent from '@/assets/img/percent.png';
import diagram from '@/assets/img/diagram.png';
import search_buns from '@/assets/img/search_buns.png';

const t = (key: string) => i18n.t(key);

interface IBunsCard {
    href: string;
    content: string;
}

export const bunsCards: IBunsCard[] = [
    {
        href: diagram,
        content: t('buns_banner.diagram'),
    },
    {
        href: search_buns,
        content: t('buns_banner.search_buns'),
    },
    {
        href: idea,
        content: t('buns_banner.idea'),
    },
    {
        href: lists,
        content: t('buns_banner.lists'),
    },
    {
        href: buns_case,
        content: t('buns_banner.buns_case'),
    },
    {
        href: percent,
        content: t('buns_banner.percent'),
    },
];
