import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '@/utils/firebase';

interface RoutesProps {
  children: JSX.Element;
}

export const CloseRoute: FC<RoutesProps> = ({ children }) => {
  const [user] = useAuthState(auth);

  return user ? children : <Navigate to="/auth" replace />;
};

export const OpenRoute: FC<RoutesProps> = ({ children }) => {
  const [user] = useAuthState(auth);

  return !user ? children : <Navigate to="/" replace />;
};
