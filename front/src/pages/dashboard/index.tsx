import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
