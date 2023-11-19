import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { privateRouter, router } from './router/router';
import { auth } from './utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './index.css';

export const App: FC = () => {
  const [user] = useAuthState(auth);

  return <RouterProvider router={user ? router : privateRouter} />;
};
