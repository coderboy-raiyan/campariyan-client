import { Button } from "@/components/ui/button";
import { BiMinus, BiPlus } from "react-icons/bi";

function Cart() {
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
          <p className="text-sm my-4">1 item</p>
          {/* products */}
          <div className="grid grid-cols-3 w-[90%] my-6">
            <img
              className="object-contain col-span-1"
              src="https://contents.mediadecathlon.com/p2583182/k$7fdcba8c0b04026d7db2bd2e13571658/picture.jpg?format=auto&f=200x200"
              alt=""
            />

            <div className="col-span-2 space-y-5">
              <div className="flex justify-between">
                <p className="capitalize text-sm font-medium w-3/4 text-gray-800">
                  quechua | Inflatable Camping Bed Base - Camp Bed Air 70 cm - 1
                  Person
                </p>
                <p className="text-sm">$89.88</p>
              </div>
              <div className="my-2 capitalize text-sm font-medium text-gray-600">
                <p className="">Color: cappuccino beige / teal blue</p>
                <p>Size: No Size</p>
              </div>

              <div className="border w-[25%]  items-center rounded-full flex justify-between">
                <Button
                  variant="ghost"
                  className="text-2xl px-2 rounded-l-full"
                >
                  <BiMinus />
                </Button>
                <span>0</span>
                <Button
                  variant="ghost"
                  className="text-2xl px-2 rounded-r-full"
                >
                  <BiPlus />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quantity and subtotal side */}
      <div className="w-[30%] space-y-10">
        <div className="flex justify-between border-b py-3 font-medium">
          <p>Subtotal 1 item</p>
          <p>$87.00</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-gray-700">Order total VAT included</p>
          <p className="text-xl font-semibold">$87.98</p>
        </div>
        <Button className="bg-[#3643ba] w-full rounded-none py-6 uppercase">
          Check Out
        </Button>
      </div>
    </div>
  );
}

export default Cart;
