import { IUseRotationControls } from '@/hooks/types';

import { getRandomNumber } from '../buns-banner/helpers';

export const breakPoints = {
  400: {
    slidesPerView: 1.5,
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
  },
  1100: {
    slidesPerView: 3.7,
  },
  1366: {
    slidesPerView: 2,
  },
  1500: {
    slidesPerView: 2.5,
  },
  1620: {
    slidesPerView: 3,
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
