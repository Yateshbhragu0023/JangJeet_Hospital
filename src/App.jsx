import React from 'react'
import WebsiteLayout from './website/WebsiteLayout'
import Home from './website/pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteLayout />,
        children: [
          {
            path: "",
            element: <Home />
          }
        ]
      },

    ]
  )

  return (
    < >
      <RouterProvider router={routes}/>
    </>
  )
}
