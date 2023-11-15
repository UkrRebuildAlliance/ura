import { useLocation } from 'react-router-dom';

export const Filter = ({}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramsObject = searchParams.get('name');

  return <div className="pt-[350px]">{`${paramsObject}`}</div>;
};
