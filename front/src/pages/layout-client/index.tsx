import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Footer, Header } from '@/components';

export const LayoutClient = () => {
    return (
        <>
            <ScrollRestoration />

            <Header />

            <main className="w-full min-h-[calc(100vh-268px)] pt-[98px] laptop:pt-[136px] desktop:pt-[156px]">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};
