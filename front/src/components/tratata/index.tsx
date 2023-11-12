import { useParams } from 'react-router-dom';

export const Tratata = () => {
  const { newsId } = useParams();
  return <h1>{newsId}</h1>;
};
