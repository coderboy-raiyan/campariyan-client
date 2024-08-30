import { icons, images } from "@/assets";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";

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

function HeaderTwo() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto">
        <div className="py-4">
          {/* first navbar */}
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-1">
              <Link className="" to="">
                <img className="w-[200px]" src={images.logo} alt="" />
              </Link>
            </div>

            {/* search bar */}
            <div className="col-span-4 flex justify-center">
              <Input
                placeholder="Search"
                className="placeholder:text-center w-[75%] rounded-full py-6 bg-[#f5f4f5] ring-0 border-none"
              />
            </div>

            {/* Login and register */}
            <div className="col-span-1 flex justify-end items-center space-x-4">
              <Link to="">
                <img className="size-6" src={icons.help} alt="" />
              </Link>
              <Link to="">
                <img className="size-6" src={icons.person} alt="" />
              </Link>
              <Link to="/cart">
                <img className="size-6" src={icons.basket} alt="" />
              </Link>
            </div>
          </div>

          {/* second navbar */}
          <ul className="flex space-x-6 mt-4 text-sm text-gray-600 capitalize font-[500]">
            {categories.map((category, i) => (
              <li key={i}>
                <Link to="">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderTwo;
