import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { AdminRoutes } from "./Admin.routes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> }
    ]
  },

  // admin routes
  {
    path: '/admin',
    element: <Root />,
    children: AdminRoutes,
  },
  // {
  //   path: '/faculty',
  //   element: <Root />,
  //   children: AdminPaths,
  // },
  // {
  //   path: '/student',
  //   element: <Root />,
  //   children: AdminPaths,
  // },

  // general routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default Router;