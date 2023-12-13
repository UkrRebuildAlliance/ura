import { createBrowserRouter } from 'react-router-dom';

import { routes } from '@/constants';
import { ProtectedRoute } from '@/components';
import {
    HomePage,
    NewsById,
    NewsPage,
    TeamPage,
    Dashboard,
    TeamsById,
    ErrorPage,
    SearchPage,
    HistoryPage,
    ProjectById,
    ProjectPage,
    DiscoverById,
    DiscoverPage,
    LayoutClient,
    PartnersPage,
    ReportingPage,
} from '@/pages';

const { client, admin, login } = routes;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutClient />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: client.news, element: <NewsPage /> },
            { path: client.news_id, element: <NewsById /> },
            { path: client.partner, element: <PartnersPage /> },
            { path: client.project, element: <ProjectPage /> },
            { path: client.project_id, element: <ProjectById /> },
            { path: client.discover, element: <DiscoverPage /> },
            { path: client.discover_id, element: <DiscoverById /> },
            { path: client.company_history, element: <HistoryPage /> },
            { path: client.team, element: <TeamPage /> },
            { path: client.team_id, element: <TeamsById /> },
            { path: client.reporting, element: <ReportingPage /> },
            { path: client.contacts, element: <h1>contacts</h1> },
            { path: client.search, element: <SearchPage /> },
        ],
    },
    {
        path: login,
        element: <h1>Login</h1>,
    },
    {
        path: admin.dashboard,
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
        children: [
            { path: admin.news, element: <h1>admin news</h1> },
            { path: admin.news_id, element: <h1>news_id</h1> },
            { path: admin.partner, element: <h1>partner</h1> },
            { path: admin.partner_id, element: <h1>partner_id</h1> },
            { path: admin.project, element: <h1>project</h1> },
            { path: admin.project_id, element: <h1>project_id</h1> },
            { path: admin.discover, element: <h1>discover</h1> },
            { path: admin.discover_id, element: <h1>discover_id</h1> },
            { path: admin.reporting, element: <h1>reporting</h1> },
        ],
    },
]);
