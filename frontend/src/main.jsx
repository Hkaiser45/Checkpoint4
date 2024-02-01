import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Homepage from "./pages/Homepage";
import Volunteer from "./pages/Volunteer";
import Subscribe from "./pages/Subscribe";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserProvider } from "./contexts/UserContext";
import Init from "./services/Init";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/volontaires",
        element: <Volunteer />,
        loader: () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/volunteersAdmin`, {
              withCredentials: true,
            })
            .then((res) => {
              const volunteer = res.data;
              return { volunteer };
            })
            .catch(() => {
              window.location.href = "/login";
            });
        },
      },
      {
        path: "/famille",
        element: <Subscribe />,
        loader: () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/practices`)
            .then((res) => {
              const practices = res.data;
              return { practices };
            })
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Init />
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>
);
