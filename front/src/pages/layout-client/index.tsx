import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Footer, Header } from '@/components';

export const LayoutClient = () => {
    return (
        <>
            <ScrollRestoration />

            <Header />

            <main className="w-full min-h-[calc(100vh-268px)]">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};
