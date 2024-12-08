import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRouter>
          <RootLayout></RootLayout>
        </PrivateRouter>
      ),
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
          children: [
            {
              path: "/",
              element: <h1>Dashboard</h1>,
            },
            {
              path: "/addProduct",
              element: <h1>Add Product</h1>,
            },
            {
              path: "/productList",
              element: <h1>Product List</h1>,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "*",
      element: <ErrorLayout></ErrorLayout>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
