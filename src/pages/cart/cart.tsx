import { Button } from "@/components/ui/button";
import {
  addToCart,
  decreaseQuantity,
  updateTotalPrice,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { TCart } from "@/types";
import { generateTotalProductPrice } from "@/utils/product/generateProductPrice";
import { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { toast } from "sonner";

function Cart() {
  const { cart, totalPrice } = useAppSelector((state) => state?.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TCart) => {
    if (product?.stock === 0) {
      toast.info("Product is out of stock!");
      return;
    }

    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (cart.length) {
      const totalPrice = generateTotalProductPrice(cart);
      dispatch(updateTotalPrice(totalPrice));
    }
  }, [cart]);

  return (
    <div className="flex justify-between max-w-6xl mx-auto my-10">
      {/* Product side */}
      <div className="w-[70%] mx-10">
        <div className="mb-14 border-b pb-2">
          <h1 className="text-3xl font-semibold leading-relaxed">Basket</h1>
          <p className="text-sm font-[500] text-gray-700">
            This item may be eligible for a free store pickup.
          </p>
        </div>

        <div>
          <p className="font-semibold">Sold and shipped by Decathlon</p>
          <p className="text-sm my-4">{cart?.length} item</p>
          {/* products */}
          {cart?.length ? (
            cart.map((product) => (
              <div className="grid grid-cols-3 w-[90%] my-6">
                <img
                  className="object-contain col-span-1 size-[150px] mx-auto"
                  src={product?.images && product.images[0]?.secure_url}
                  alt=""
                />

                <div className="col-span-2 space-y-5">
                  <div className="flex justify-between">
                    <p className="capitalize text-sm font-medium w-3/4 text-gray-800">
                      {product?.name}
                    </p>
                    <p className="text-sm">${product?.price}</p>
                  </div>
                  <div className="my-2 capitalize text-sm font-medium text-gray-600">
                    <p className="">Color: {product?.color}</p>
                  </div>

                  <div className="border w-[25%]  items-center rounded-full flex justify-between">
                    <Button
                      onClick={() => dispatch(decreaseQuantity(product?._id))}
                      variant="ghost"
                      className="text-2xl px-2 rounded-l-full"
                    >
                      <BiMinus />
                    </Button>
                    <span>{product?.quantity}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="ghost"
                      className="text-2xl px-2 rounded-r-full"
                    >
                      <BiPlus />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-3xl text-center my-10 text-gray-600">
              Cart is empty!
            </p>
          )}
        </div>
      </div>
      {/* Quantity and subtotal side */}
      <div className="w-[30%] space-y-10">
        <div className="flex justify-between border-b py-3 font-medium">
          <p>Subtotal {cart?.length} item</p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Order total VAT included</p>
          <p className="text-xl font-semibold">${totalPrice}</p>
        </div>
        <Button className="bg-[#3643ba] w-full rounded-none py-6 uppercase">
          Check Out
        </Button>
      </div>
    </div>
  );
}

export default Cart;
