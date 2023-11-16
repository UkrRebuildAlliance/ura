import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components';

export const LayoutClient = () => {
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
