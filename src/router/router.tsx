import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { Details, detailsLoader } from '../components/Details/Details';
import { RouterError } from '../components/RouterError/RouterError';
import { App } from '../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <RouterError />,
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'details/:detailsId',
        element: <Details />,
        loader: detailsLoader,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
