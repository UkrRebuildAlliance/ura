import clsx from 'clsx';

import { SocialSvg } from '@/components';

import { icons } from './config';
import { getStyles } from './styles';

interface SocialMediaProps {
  className?: string;
  isFooter?: boolean;
}

export const SocialMedia = ({ className, isFooter }: SocialMediaProps) => {
  const { svg } = getStyles(isFooter);

  return (
    <div className={clsx('flex', className)}>
      {icons.map(({ to, Component }, index) => (
        <SocialSvg
          href={to}
          key={`footer-social-${index} ${isFooter ? '-footer' : ''}`}
        >
          <Component className={svg} />
        </SocialSvg>
      ))}
    </div>
  );
};
