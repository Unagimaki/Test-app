import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ProductsPage } from '../pages'
import { MainLayout } from '../layout/MainLayout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <ProductsPage />,
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ]
  },
])
