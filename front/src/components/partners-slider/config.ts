import { IUseRotationControls } from '@/hooks/types';

import { getRandomNumber } from '../buns-banner/helpers';

export const breakPoints = {
    300: {
        spaceBetween: 20,
        slidesPerView: 1.1,
    },
    400: {
        spaceBetween: 20,
        slidesPerView: 1.22,
    },
    500: {
        slidesPerView: 1.7,
    },
    630: {
        slidesPerView: 2.3,
    },
    768: {
        slidesPerView: 2.5,
    },
    900: {
        slidesPerView: 3.2,
        spaceBetween: 30,
    },
    1100: {
        slidesPerView: 3.2,
        spaceBetween: 30,
    },
    1500: {
        slidesPerView: 2.5,
    },
    1620: {
        slidesPerView: 3,
        spaceBetween: 60,
    },
};

export const buttonsConfig: IUseRotationControls[] = [
    { initialDeg: getRandomNumber({ min: 0, max: 360 }) },
    {
        maxIterations: 6,
        startDirection: 'down',
        initialDeg: getRandomNumber({ min: 87, max: 220 }),
    },
];
