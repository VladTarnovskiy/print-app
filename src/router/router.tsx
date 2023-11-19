import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { DetailsPage } from '../pages/Details/DetailsPage';
import { RouterError } from '../components/RouterError/RouterError';
import AuthorizationPage from '@/pages/Auth/AuthPage';
import { Layout } from '@/pages/Layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouterError />,
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'details/:detailsId',
        element: <DetailsPage />,
      },
      {
        path: 'auth',
        element: <AuthorizationPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const privateRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: 'auth', element: <AuthorizationPage /> },
      { path: '*', element: <Navigate to="/auth" replace /> },
    ],
  },
]);
