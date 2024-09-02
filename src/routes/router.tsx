import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Cart from "@/pages/cart/cart";
import AllProducts from "@/pages/dashboard/allProducts";
import CreateProduct from "@/pages/dashboard/createProduct";
import Dashboard from "@/pages/dashboard/dashboard";
import SingleProduct from "@/pages/dashboard/singleProduct";
import Home from "@/pages/home/home";
import ProductDetails from "@/pages/productDetails/productDetails";
import SignIn from "@/pages/signin/signIn";
import SignUp from "@/pages/signup/signUp";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/product-management",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "products",
            element: <AllProducts />,
          },
          {
            path: "products/:id",
            element: <SingleProduct />,
          },
          {
            path: "create-product",
            element: <CreateProduct />,
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
