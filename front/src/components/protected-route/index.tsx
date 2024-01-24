//  TODO For testing app in IOS
// import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/types';

export const ProtectedRoute = ({ children }: ChildrenProps) => {
  const isToken = true;

  if (!isToken) {
    return <Navigate to="/login" />;
  }

  return children;
};
