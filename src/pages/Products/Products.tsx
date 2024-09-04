import Product from "@/components/product/Product";
import { useAppSelector } from "@/redux/hooks/hooks";

function Products() {
  const { products } = useAppSelector((state) => state?.products);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-10">
        {/* filters */}
        <div className="col-span-2">
          <div>
            {/* Brands */}
            <ul>
              <li></li>
            </ul>
            {/* price range */}
            <p></p>
          </div>
        </div>

        {/* products */}

        <div className="col-span-8">
          {/* Products */}
          {products?.length ? (
            <div className=" grid grid-cols-4 gap-4 my-10">
              {products?.map((product) => (
                <Product {...product} key={product?._id} />
              ))}
            </div>
          ) : (
            <p className="text-center font-bold text-gray-500 text-3xl">
              No product is available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
