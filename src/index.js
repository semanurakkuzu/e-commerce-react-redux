import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import App from './App';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/clothesdetails",
      element: <ClothesDetails/>,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
);


