import { TProduct } from "@/types";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
function Product({ name, images, reviews, price }: TProduct) {
  return (
    <div className="border p-4 rounded  flex flex-col items-center space-y-2">
      <img
        className="h-[160px] w-full object-contain my-5"
        src={images[0]?.secure_url}
        alt=""
      />
      <Link to="" className="text-sm font-semibold text-gray-700 text-center">
        {name}
      </Link>
      <div className="flex space-x-2 justify-center">
        <Rating value={reviews?.ratings} readOnly className="w-[40%]" />
        <p className="text-xs font-medium text-gray-500">
          ({reviews?.totalRatings} reviews)
        </p>
      </div>
      <p className="text-lg font-semibold text-red-700">${price}</p>

      <Button className="w-full rounded-full bg-gray-900">Add to Cart</Button>
    </div>
  );
}

export default Product;
