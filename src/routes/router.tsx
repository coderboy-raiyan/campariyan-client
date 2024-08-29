import App from "@/App";
import Cart from "@/pages/cart/cart";
import Home from "@/pages/home/home";
import Login from "@/pages/login";
import ProductDetails from "@/pages/productDetails/productDetails";

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
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
