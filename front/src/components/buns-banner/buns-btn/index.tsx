import clsx from 'clsx';
import { useRotationControls } from '@/hooks';
import Right from '@/assets/svg/right.svg?react';

import { getStyles } from './styles';

export const BunsBtn = ({
  className,
  left,
}: {
  className?: string;
  left?: boolean;
}) => {
  const { after, before } = getStyles();
  const { deg: afterDeg, handleClick: afterClick } = useRotationControls({
    initialDeg: 113,
  });
  const { deg: beforeDeg, handleClick: beforeClick } = useRotationControls({
    initialDeg: 212,
    maxIterations: 6,
    startDirection: 'down',
  });

  const onClick = () => {
    afterClick(174);
    beforeClick(114);
  };

  return (
    <button
      onClick={onClick}
      className={`relative w-[60px] h-[60px] group bg-mainGradient rounded-full cursor-pointer shadow-md shadow-borderP active:scale-90 transition duration-150 ${className}`}
    >
      <div
        className={after}
        style={{ transform: `translate(-50%,-50%) rotate(${afterDeg}deg)` }}
      ></div>
      <div
        className={before}
        style={{ transform: `translate(-50%,-50%) rotate(${beforeDeg}deg)` }}
      ></div>
      <div className="absolute w-6 h-6 text-white transition duration-200 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 top-1/2 left-1/2">
        <Right className={clsx({ 'rotate-180': left })} />
      </div>
    </button>
  );
};
