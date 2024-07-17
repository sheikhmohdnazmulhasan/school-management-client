import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./Admin.routes";

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
    children: routesGenerator(adminPaths),
  },

  // general routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default Router;