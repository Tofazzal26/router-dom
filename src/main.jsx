import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Users from "../src/Components/Users/Users.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users />,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
