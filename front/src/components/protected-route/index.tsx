import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/types';

export const ProtectedRoute = ({ children }: ChildrenProps) => {
  const isToken = Cookies.get('refreshToken') || false;

  if (!isToken) {
    return <Navigate to="/login" />;
  }

  return children;
};
