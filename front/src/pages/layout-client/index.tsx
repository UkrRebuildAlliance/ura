import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Footer, Header } from '@/components';

export const LayoutClient = () => {
    return (
        <>
            <ScrollRestoration />

            <Header />

            <main className="w-full min-h-[calc(100vh-680px)] tablet:min-h-[calc(100vh-486px)] desktop:min-h-[calc(100vh-370px)] pt-[98px] laptop:pt-[136px] desktop:pt-[156px] h-full">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};
