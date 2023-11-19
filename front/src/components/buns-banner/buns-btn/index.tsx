import { useState } from 'react';
import clsx from 'clsx';

import { useRotationControls } from '@/hooks';
import Right from '@/assets/svg/right.svg?react';

import { getStyles } from './styles';
import { getRandomNumber } from '../helpers';
import { buttonsConfig } from './config';

interface IBunsBtn {
  left?: boolean;
  className?: string;
}

export const BunsBtn = ({ left, className }: IBunsBtn) => {
  const [first, second] = buttonsConfig;

  const { after, before, btn, icon } = getStyles(className);

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const { deg: aftDeg, handleClick: afterClick } = useRotationControls(first);

  const { deg: befDeg, handleClick: befClick } = useRotationControls(second);

  const onClick = () => {
    afterClick(getRandomNumber({ min: 132, max: 193 }));

    befClick(getRandomNumber({ min: 87, max: 164 }));
  };

  const handelClick = () => {
    if (!isButtonDisabled) {
      onClick();

      setButtonDisabled(true);

      setTimeout(() => {
        setButtonDisabled(false);
      }, 400);
    }
  };

  return (
    <button onClick={handelClick} className={btn} disabled={isButtonDisabled}>
      <div
        className={after}
        style={{ transform: `translate(-50%,-50%) rotate(${aftDeg}deg)` }}
      />

      <div
        className={before}
        style={{ transform: `translate(-50%,-50%) rotate(${befDeg}deg)` }}
      />

      <div className={icon}>
        <Right className={clsx({ 'rotate-180': left })} />
      </div>
    </button>
  );
};
