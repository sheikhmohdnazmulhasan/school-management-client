import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./Admin.routes";
import { facultyPaths } from "./Faculty.routes";
import { studentPaths } from "./Student.routes";

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

  // faculty routes
  {
    path: '/faculty',
    element: <Root />,
    children: routesGenerator(facultyPaths),
  },

  // faculty routes
  {
    path: '/student',
    element: <Root />,
    children: routesGenerator(studentPaths),
  },

  // general routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default Router;