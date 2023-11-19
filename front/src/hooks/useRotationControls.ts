import { useState } from 'react';

type RotationDirection = 'up' | 'down';

interface RotationControls {
  deg: number;
  handleClick: (changeDeg: number) => void;
}

interface IUseRotationControls {
  initialDeg: number;
  maxIterations?: number;
  startDirection?: 'up' | 'down';
}

export const useRotationControls = ({
  startDirection,
  initialDeg = 0,
  maxIterations = 4,
}: IUseRotationControls): RotationControls => {
  const [step, setStep] = useState<number>(
    startDirection === 'down' ? maxIterations : 0,
  );
  const [deg, setDeg] = useState<number>(initialDeg);
  const [iterations] = useState<number>(maxIterations);
  const [direction, setDirection] = useState<RotationDirection>('up');

  const handleClick = (changeDeg: number) => {
    if (direction === 'up' && step === iterations) {
      setDirection('down');
      setDeg(deg - changeDeg);
      setStep(step - 1);
    }

    if (direction === 'down' && step === 0) {
      setDirection('up');
      setDeg(deg + changeDeg);
      setStep(step + 1);
    }

    if (direction === 'down') {
      setDeg(deg - changeDeg);
      setStep(step - 1);
    }
    if (direction === 'up') {
      setDeg(deg + changeDeg);
      setStep(step + 1);
    }
  };

  return { deg, handleClick };
};
