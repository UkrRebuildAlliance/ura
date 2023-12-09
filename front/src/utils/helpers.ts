import { useLayoutEffect, useState } from 'react';

export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const quantitySwitch = (width: number) => {
  switch (true) {
    case width >= 1366:
      return 4;

    case width >= 768 && width < 1366:
      return 2;

    default:
      return 1;
  }
};

export const quantityCard = () => {
  const [quantity, setQuantity] = useState(quantitySwitch(window.innerWidth));

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setQuantity(quantitySwitch(window.innerWidth));
    });
  });

  return quantity;
};
