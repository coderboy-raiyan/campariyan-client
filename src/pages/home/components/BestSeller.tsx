import Product from "@/components/product/Product";
import { Button } from "@/components/ui/button";

function BestSeller() {
  return (
    <section className="max-w-6xl mx-auto my-10">
      <div className="">
        <h1 className="text-3xl font-semibold">Best Seller</h1>
      </div>

      {/* Products */}
      <div className=" grid grid-cols-4 gap-4 mb-10">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className="flex justify-center">
        <Button className="bg-gray-700 w-[20%]">Load more</Button>
      </div>
    </section>
  );
}

export default BestSeller;
