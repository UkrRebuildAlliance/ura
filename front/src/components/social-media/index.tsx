import clsx from 'clsx';

import { SocialSvg } from '@/components/';

import Fb from '@/assets/svg/social/fb.svg?react';
import In from '@/assets/svg/social/in.svg?react';
import Tg from '@/assets/svg/social/tg.svg?react';
import Inst from '@/assets/svg/social/inst.svg?react';

export const SocialMedia = ({
  className,
  withBg,
}: {
  className?: string;
  withBg?: boolean;
}) => {
  return (
    <div className={clsx('flex gap-[54px]', className)}>
      <SocialSvg href="/news" withBg={withBg}>
        <Fb />
      </SocialSvg>

      <SocialSvg href="/news" withBg={withBg}>
        <Inst />
      </SocialSvg>

      <SocialSvg href="/news" withBg={withBg}>
        <Tg />
      </SocialSvg>

      <SocialSvg href="/news" withBg={withBg}>
        <In />
      </SocialSvg>
    </div>
  );
};