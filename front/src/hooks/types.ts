export type RotationDirection = 'up' | 'down';

export interface RotationControls {
  deg: number;
  handleClick: (changeDeg: number) => void;
}

export interface IUseRotationControls {
  initialDeg: number;
  maxIterations?: number;
  startDirection?: 'up' | 'down';
}
