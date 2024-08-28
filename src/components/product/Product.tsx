import { Rating } from "@smastrom/react-rating";
import { Button } from "../ui/button";

function Product() {
  return (
    <div className="border p-3 rounded shadow">
      <img
        className="mb-4"
        src="https://thecampercoshop.com/cdn/shop/products/vango-tailgate-hub-low-barn-double-door-van-tent-i_2_360x.jpg?v=1649855477"
        alt=""
      />

      <div className="space-y-4">
        <h3>Vango Tailgate Hub Low Drive Away Awning</h3>
        <div className="flex space-x-2">
          <Rating style={{ maxWidth: 100 }} value={4} readOnly />
          <p className="text-sm">{4.5}/5</p>
        </div>
        <h4>Price : $234</h4>
        <Button>View Product</Button>
      </div>
    </div>
  );
}

export default Product;
