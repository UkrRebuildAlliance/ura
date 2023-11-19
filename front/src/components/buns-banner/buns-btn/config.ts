import { IUseRotationControls } from '@/hooks/useRotationControls';
import { getRandomNumber } from '../helpers';

export const buttonsConfig: IUseRotationControls[] = [
  { initialDeg: getRandomNumber({ min: 113, max: 212 }) },
  {
    maxIterations: 6,
    startDirection: 'down',
    initialDeg: getRandomNumber({ min: 87, max: 193 }),
  },
];
