import { createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '@/pages';
import { routes } from '@/components/constants';
import { Main, ProtectedRoute } from '@/components';
import { Filter } from '@/components/filter/inedx';

const { client, admin, login } = routes;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <h1>MAIN</h1> },
      { path: client.news, element: <h1>news</h1> },
      { path: client.news_id, element: <h1>news/id =</h1> },
      { path: client.partner, element: <h1>partners</h1> },
      { path: client.project, element: <h1>project</h1> },
      { path: client.project_id, element: <h1>project_id</h1> },
      { path: client.researches, element: <h1>researches</h1> },
      { path: client.researches_id, element: <h1>researches_id</h1> },
      { path: client.company_history, element: <h1>company_history</h1> },
      { path: client.team, element: <h1>team</h1> },
      { path: client.reporting, element: <h1>team</h1> },
      { path: client.contacts, element: <h1>contacts</h1> },
      { path: client.search, element: <Filter /> },
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
      { path: admin.researches, element: <h1>researches</h1> },
      { path: admin.researches_id, element: <h1>researches_id</h1> },
      { path: admin.reporting, element: <h1>reporting</h1> },
    ],
  },
]);
