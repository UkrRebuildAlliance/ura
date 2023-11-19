import clsx from 'clsx';

import { useRotationControls } from '@/hooks';
import Right from '@/assets/svg/right.svg?react';

import { getStyles } from './styles';
import { getRandomNumber } from '../helpers';

export const BunsBtn = ({
  left,
  className,
}: {
  left?: boolean;
  className?: string;
}) => {
  const { after, before, btn, icon } = getStyles(className);
  const { deg: afterDeg, handleClick: afterClick } = useRotationControls({
    initialDeg: getRandomNumber({ min: 113, max: 212 }),
  });
  const { deg: beforeDeg, handleClick: beforeClick } = useRotationControls({
    maxIterations: 6,
    startDirection: 'down',
    initialDeg: getRandomNumber({ min: 87, max: 193 }),
  });

  const onClick = () => {
    afterClick(getRandomNumber({ min: 132, max: 193 }));
    beforeClick(getRandomNumber({ min: 87, max: 164 }));
  };

  return (
    <button onClick={onClick} className={btn}>
      <div
        className={after}
        style={{ transform: `translate(-50%,-50%) rotate(${afterDeg}deg)` }}
      ></div>
      <div
        className={before}
        style={{ transform: `translate(-50%,-50%) rotate(${beforeDeg}deg)` }}
      ></div>
      <div className={icon}>
        <Right className={clsx({ 'rotate-180': left })} />
      </div>
    </button>
  );
};
