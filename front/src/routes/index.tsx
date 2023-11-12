import { createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '@/pages';
import { Main, ProtectedRoute, Tratata } from '@/components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <h1>MAIN</h1> },
      { path: '/news', element: <h1>news</h1> },
      { path: '/news/:newsId', element: <Tratata /> },
    ],
  },
  {
    path: '/login',
    element: <h1>Login</h1>,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: 'news', element: <h1>news</h1> },
      { path: 'team', element: <h1>team</h1> },
      { path: 'project', element: <h1>project</h1> },
    ],
  },
]);
