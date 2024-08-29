import { Button } from "@/components/ui/button";
import { Rating, Star } from "@smastrom/react-rating";

function ProductDetails() {
  return (
    <div className="grid grid-cols-3 max-w-6xl mx-auto gap-2">
      {/* left side */}
      <div className="col-span-2">
        <img
          src="https://contents.mediadecathlon.com/p1739649/k$864f38ea1fd6a05508cbd62c72dfd0e3/picture.jpg?format=auto&f=640x0"
          alt=""
        />
      </div>

      {/* details side*/}

      <div className="p-2 flex flex-col space-y-8 col-span-1">
        <h4 className="text-xl font-semibold text-gray-700 uppercase">
          Quencho
        </h4>
        <h3 className="text-3xl font-semibold">
          Inflatable Camping Bed Base - Camp Bed Air 70 cm - 1 Person
        </h3>
        <div className="flex">
          <div className="flex items-center space-x-2">
            <Rating
              value={1}
              className="w-[5%]"
              readOnly
              items={1}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "black",
              }}
            />
            <p className="text-sm border-r-2 pr-4 ">4.7</p>
            <div className="text-[#3643ba] text-sm font-semibold">
              522 <span>reviews</span>
            </div>
          </div>
        </div>
        <p>
          A 70 cm inflatable bed base! It can be combined with another one to
          make a double bed, with a five-year warranty. Be aware, the mattress
          is not included.
        </p>

        <p className="text-2xl font-semibold">Price : $567</p>
        <Button className="bg-[#3643ba] py-10  rounded">Add to basket</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
