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

export function formatPhone(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  if (cleanedNumber.length !== 12) {
    console.error('Incorrect phone number format');
    return phoneNumber;
  }

  return `+${cleanedNumber.slice(0, 2)} (${cleanedNumber.slice(
    2,
    5,
  )}) ${cleanedNumber.slice(5, 8)} ${cleanedNumber.slice(
    8,
    10,
  )} ${cleanedNumber.slice(10)}`;
}

export function lineBreak(string: string, separator = '\n') {
  const addressLines = string.split(separator);

  return addressLines;
}

export const getDisabled = <T extends object>(errors: T) => {
  return Object.keys(errors).length > 0;
};
