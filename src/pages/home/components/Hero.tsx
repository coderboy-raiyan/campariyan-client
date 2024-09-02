import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Button } from "@/components/ui/button";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  "https://demo-morata.myshopify.com/cdn/shop/files/banner_4_3.png?v=1700725758&width=1500",
  "https://demo-morata.myshopify.com/cdn/shop/files/banner_4_1.png?v=1700725758&width=1500",
];

const categories = [
  "Footware Men",
  "Women",
  "Tents",
  "Shoes",
  "Electrical",
  "kitchen",
];

function Hero() {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-x-4 my-5">
        {/* category side */}
        <div className="col-span-1">
          <ul className="border  p-3 h-full">
            {categories?.map((cate, i) => (
              <li
                key={i}
                className="border-b py-1 text-sm font-semibold hover:text-red-700 transition-all"
              >
                <Link to="">{cate}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Slider */}
        <div className="col-span-3">
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
            {slides?.map((slide, i) => (
              <SwiperSlide
                key={i}
                style={{ backgroundImage: `url(${slide})` }}
                className="bg-no-repeat bg-cover h-[360px] p-10"
              >
                <div className="flex flex-col space-y-4">
                  <h1 className="text-5xl font-semibold w-2/4 text-gray-600 text-start">
                    Big sale off Washing Machine
                  </h1>
                  <p className="text-sm text-gray-600 w-[45%] text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti quia aut modi cum repudiandae delectus alias,
                    praesentium consectetur dolorem. Accusamus.
                  </p>
                  <Button className="bg-gray-600 w-[20%] py-7">
                    Get It Now
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
