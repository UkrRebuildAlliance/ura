import { Outlet } from 'react-router-dom';

import { AdminHeader, AdminNavigation, ProtectedRoute } from '@/components';

export const LayoutDashboard = ({}) => {
    return (
        <ProtectedRoute>
            <div className="w-full h-screen overflow-y-hidden bg-loginBg shadow-login">
                <AdminHeader />

                <div className="flex h-[calc(100vh-110px)] sm:h-[calc(100vh-160px)] desktop:max-w-[1620px] w-full desktop:mx-auto  ">
                    <AdminNavigation />

                    <main className="w-full h-full overflow-y-scroll scroll pt-[52px] pb-[40px] px-[20px]">
                        <Outlet />
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
};
