import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-[calc(100vh-268px)] h-[800px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
