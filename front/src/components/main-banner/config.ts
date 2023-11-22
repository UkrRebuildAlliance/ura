import i18n from '@/i18n';
import banner1 from '@/assets/img/banner1.png';
import banner2 from '@/assets/img/banner2.png';
import banner3 from '@/assets/img/banner3.png';

const t = (key: string) => i18n.t(key);

interface IBanners {
  href: string;
  ttl: string;
  content: string;
}

export const banners: IBanners[] = [
  {
    href: banner1,
    ttl: t('main_banners_cards.ttl1'),
    content: t('main_banners_cards.content1'),
  },
  {
    href: banner2,
    ttl: t('main_banners_cards.ttl2'),
    content: t('main_banners_cards.content2'),
  },
  {
    href: banner3,
    ttl: t('main_banners_cards.ttl3'),
    content: t('main_banners_cards.content3'),
  },
];
