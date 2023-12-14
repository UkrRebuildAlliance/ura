import { FunctionComponent, SVGProps } from 'react';

import Fb from '@/assets/svg/social/fb.svg?react';
import In from '@/assets/svg/social/in.svg?react';
import Tg from '@/assets/svg/social/tg.svg?react';
import Inst from '@/assets/svg/social/inst.svg?react';

interface iconSocial {
    to: string;
    Component: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const icons: iconSocial[] = [
    {
        to: '#',
        Component: Fb,
    },
    {
        to: '#',
        Component: In,
    },
    {
        to: '#',
        Component: Tg,
    },
    {
        to: '#',
        Component: Inst,
    },
];
