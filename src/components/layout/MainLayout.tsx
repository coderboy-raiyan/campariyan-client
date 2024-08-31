import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { addProducts } from "@/redux/features/product/productSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function MainLayout() {
  const { data, isSuccess } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addProducts(data?.data));
    }
  }, [isSuccess]);

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default MainLayout;
