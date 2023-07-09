import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss';

import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import GraphPage from './pages/GraphPage';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import ErrorPage from './pages/404';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "graph", element: <GraphPage /> },
        { path: "chart", element: <ChartPage /> },
        { path: "table", element: <TablePage /> },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
