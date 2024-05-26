import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/root/root-layout";
import Home from "../app/root/home";
import AuthLayout from "../app/auth/auth-layout";
import Register from "../app/auth/register";
import Login from "../app/auth/login";
import PrivateRoute from "./private/private-route";
import Dashboard from "../app/dashboard/dashboard";
import DashboardLayout from "../app/dashboard/dashboard-layout";
import DashboardProducts from "../app/dashboard/products";
import Products from "../app/root/products";
import PorductDetails from "../components/product-details";
import CreateProduct from "../app/dashboard/create-product";
import EditProduct from "../app/dashboard/edit-product";
import AboutUs from "../app/root/about-us";
import Blogs from "../components/home/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <PorductDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <DashboardProducts />,
      },
      {
        path: "products/create",
        element: <CreateProduct />,
      },
      {
        path: "products/edit/:id",
        element: <EditProduct />,
      },
      {
        path: "products/:id",
        element: <PorductDetails />,
      },
    ],
  },
]);

export default router;
