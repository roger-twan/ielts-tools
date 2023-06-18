import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import ErrorPage from './pages/error'
import Corpus from './pages/corpus'
import MainLayout from './layout/main'
import CorpusLayout from './layout/corpus'
import Tables from './pages/corpus/table'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'corpus',
        element: <CorpusLayout />,
        children: [
          {
            index: true,
            element: <Corpus />,
          },
          {
            path: 'table',
            element: <Tables />,
          }
        ]
      }
    ]
  },
]

const router = createBrowserRouter(routes)

export default router
