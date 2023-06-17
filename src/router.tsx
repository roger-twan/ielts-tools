import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import ErrorPage from './pages/error'
import Corpus from './pages/corpus';
import MainLayout from './layout/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'corpus',
        element: <Corpus />,
      }
    ]
  },
]);

export default router
