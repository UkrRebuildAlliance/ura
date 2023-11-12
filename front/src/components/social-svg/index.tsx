import { ChildrenProps } from '@/types';
import { Link } from 'react-router-dom';

interface ISocialSvg {
  href: string;
}

export const SocialSvg = ({ href, children }: ChildrenProps<ISocialSvg>) => {
  return (
    <Link
      to={href}
      className="w-[30px] h-[30px] flex text-white cursor-pointer hover:scale-[1.2] transition hover:text-green-700"
    >
      {children}
    </Link>
  );
};
