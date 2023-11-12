import Fb from '@/assets/svg/social/fb.svg?react';
import In from '@/assets/svg/social/in.svg?react';
import Tg from '@/assets/svg/social/tg.svg?react';
import Inst from '@/assets/svg/social/inst.svg?react';

import { SocialSvg } from '@/components/';
import clsx from 'clsx';

export const SocialMedia = ({ className }: { className: string }) => {
  return (
    <div className={clsx(className, 'flex gap-[54px]')}>
      <SocialSvg href="/news">
        <Fb />
      </SocialSvg>

      <SocialSvg href="/news">
        <Inst />
      </SocialSvg>

      <SocialSvg href="/news">
        <Tg />
      </SocialSvg>

      <SocialSvg href="/news">
        <In />
      </SocialSvg>
    </div>
  );
};
