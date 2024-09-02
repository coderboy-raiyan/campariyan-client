import { addToCart, updateTotalPrice } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { TProduct } from "@/types";
import { generateTotalProductPrice } from "@/utils/product/generateProductPrice";
import { Rating } from "@smastrom/react-rating";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";

function Product({
  name,
  images,
  reviews,
  price,
  _id,
  description,
  stock,
  brand,
  color,
}: TProduct) {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state?.cart);

  const addToCartProduct = {
    _id,
    name,
    price,
    description,
    stock,
    brand,
    color,
    images,
    quantity: 1,
  };

  const handleAddToCart = () => {
    if (stock === 0) {
      toast.info("Product is out of stock!");
      return;
    }
    toast.success(`Product (${name.slice(0, 50)}...) added to your cart`, {
      position: "top-center",
    });
    dispatch(addToCart(addToCartProduct));
  };

  useEffect(() => {
    if (cart.length) {
      const totalPrice = generateTotalProductPrice(cart);
      dispatch(updateTotalPrice(totalPrice));
    }
  }, [cart]);

  return (
    <div className="border p-4 rounded  flex flex-col items-center space-y-2 justify-between">
      <img
        className="h-[160px] w-full object-contain my-5"
        src={images[0]?.secure_url}
        alt=""
      />
      <Link
        to={`/product/${_id}`}
        className="text-sm font-semibold text-gray-700 text-center hover:text-red-800"
      >
        {name?.slice(0, 80)}...
      </Link>
      <div className="flex space-x-2 justify-center">
        <Rating value={reviews?.ratings} readOnly className="w-[40%]" />
        <p className="text-xs font-medium text-gray-500">
          ({reviews?.totalRatings} reviews)
        </p>
      </div>
      <p className="text-lg font-semibold text-red-700">${price}</p>

      <Button
        onClick={handleAddToCart}
        className="w-full rounded-full bg-gray-900"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
