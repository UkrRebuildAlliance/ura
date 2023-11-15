import { useLocation } from 'react-router-dom';

export const Filter = ({}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramsObject = {};

  searchParams.forEach((value, key) => {
    // @ts-ignore
    paramsObject[key] = value;
  });

  console.log(paramsObject);

  return <>asdasd</>;
};
