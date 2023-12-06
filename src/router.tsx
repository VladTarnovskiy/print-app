import { MainPage } from '@/pages/Main/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { DetailsPage } from '@/pages/Details/DetailsPage';
import { RouterError } from '@/components/RouterError/RouterError';
import AuthorizationPage from '@/pages/Auth/AuthPage';
import { Layout } from '@/pages/Layout/Layout';
import { CloseRoute, OpenRoute } from './utils/routes';

export const router = [
  {
    element: <Layout />,
    errorElement: <RouterError />,
    path: '/',
    children: [
      {
        index: true,
        element: (
          <CloseRoute>
            <MainPage />
          </CloseRoute>
        ),
      },
      {
        path: 'details/:detailsId',
        element: (
          <CloseRoute>
            <DetailsPage />
          </CloseRoute>
        ),
      },
      {
        path: 'auth',
        element: (
          <OpenRoute>
            <AuthorizationPage />
          </OpenRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
