import Product from "@/components/product/Product";
import { useAppSelector } from "@/redux/hooks/hooks";

function BestSeller() {
  const { products } = useAppSelector((state) => state.products);

  return (
    <section className="max-w-6xl mx-auto my-10">
      <div className="">
        <h1 className="text-3xl font-semibold my-10">Best Seller</h1>
      </div>

      {/* Products */}
      {products?.length ? (
        <div className=" grid grid-cols-5 gap-4 mb-10">
          {products?.map((product) => (
            <Product {...product} key={product?._id} />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-gray-500 text-3xl">
          No product is available
        </p>
      )}
    </section>
  );
}

export default BestSeller;
