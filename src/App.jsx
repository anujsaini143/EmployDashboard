import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: ([
        {
          path: "/",
          element: <Home />,
        },

      ])
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
