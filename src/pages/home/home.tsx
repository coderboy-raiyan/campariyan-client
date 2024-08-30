import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { addProducts } from "@/redux/features/product/productSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Hero from "./components/Hero";

function Home() {
  const { data } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();
  dispatch(addProducts(data?.data));

  return (
    <div>
      <Hero />
      <Categories />
      <BestSeller />
    </div>
  );
}

export default Home;
