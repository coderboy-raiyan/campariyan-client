import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Rating, Star } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const [product, setProduct] = useState<TProduct>({} as TProduct);

  useEffect(() => {
    setProduct(data?.data);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="h-screen text-4xl flex justify-center items-center text-gray-500">
        Loading...
      </div>
    );
  }

  console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-6xl mx-auto gap-2">
      {/* left side */}
      <div className="col-span-2">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {product?.images?.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="h-[400px] object-contain">
                <img src={slide?.secure_url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* details side*/}

      <div className="p-2 flex flex-col space-y-4 col-span-1">
        <h4 className="text-xl font-semibold text-gray-700 uppercase">
          {product?.brand}
        </h4>
        <h3 className="text-3xl font-semibold">{product?.name}</h3>
        <div className="flex">
          <div className="flex items-center space-x-2">
            <Rating
              value={product?.reviews?.ratings || 1}
              className="w-[5%]"
              readOnly
              items={1}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "black",
              }}
            />
            <p className="text-sm border-r-2 pr-4 ">
              {product?.reviews?.ratings}
            </p>
            <div className="text-[#3643ba] text-sm font-semibold">
              {product?.reviews?.totalRatings} <span>reviews</span>
            </div>
          </div>
        </div>
        <p>{product?.description}</p>

        <p className="text-2xl font-semibold">Price : ${product?.price}</p>
        <Button className="bg-[#3643ba] py-10  rounded">Add to basket</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
