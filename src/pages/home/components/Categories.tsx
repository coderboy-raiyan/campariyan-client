import { Link } from "react-router-dom";
import Slider from "react-slick";

const categories = [
  {
    name: "men",
  },
  {
    name: "women",
  },
  {
    name: "sports",
  },
  {
    name: "kids",
  },
  {
    name: "accessories",
  },
  {
    name: "accessories",
  },
];

function Categories() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  return (
    <section className="my-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Get everything you need</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            {categories.map((cate, i) => (
              <div key={i} className="text-center mx-4">
                <img
                  className="w-[70%] mx-auto"
                  src="https://contents.mediadecathlon.com/s1079802/k$30f0a7f0ccf426f9cfd825207bd819f6/250x250/cb6a4c0e-9151-481e-a0b7-8309281ecea2.jpg?format=auto&f=320x0"
                  alt=""
                />
                <Link to="" className="hover:underline capitalize">
                  {cate.name}
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Categories;
