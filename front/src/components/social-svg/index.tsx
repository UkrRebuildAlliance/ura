import clsx from 'clsx';

import { ChildrenProps } from '@/types';

interface ISocialSvg {
    href: string;
}

export const SocialSvg = ({ href, children }: ChildrenProps<ISocialSvg>) => {
    return (
        <a
            href={href}
            target="_blank"
            className={clsx(
                'relative w-[20px] h-[20px] flex group text-white cursor-pointer hover:scale-[1.5] transition duration-200 outline-borderP',
            )}
        >
            <div
                className={clsx(
                    'relative flex items-center justify-center w-full z-1 group-hover:text-yellow-500 group-hover:scale-1.4',
                )}
            >
                {children}
            </div>
        </a>
    );
};
