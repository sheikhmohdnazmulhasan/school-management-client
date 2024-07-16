import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateStudent from "../pages/Admin/CreateStudent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> }
    ]
  },
  {
    path: '/admin',
    element: <Root />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: '/admin/create-student', element: <CreateStudent /> }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default Router;