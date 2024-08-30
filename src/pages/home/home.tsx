import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { addProducts } from "@/redux/features/product/productSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useEffect } from "react";
import BestSeller from "./components/BestSeller";
import Hero from "./components/Hero";

function Home() {
  const { data, isSuccess } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addProducts(data?.data));
    }
  }, [isSuccess]);

  return (
    <div>
      <Hero />
      <BestSeller />
    </div>
  );
}

export default Home;
