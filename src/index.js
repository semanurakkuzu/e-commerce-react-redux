import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cart from "./redux/cart"
import Clothes from "./components/Clothes";
import { store } from './redux/store'
import { Provider } from 'react-redux'

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
    path: "/clothes/:clotheId",
    element: <Clothes />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
