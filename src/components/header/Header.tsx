import { Link } from "react-router-dom";
import { Input } from "../ui/input";

function Header() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto">
        <div className="py-4">
          {/* first navbar */}
          <div className="grid grid-cols-6 items-center">
            <div className="col-span-1">
              <Link className="" to="">
                <img className="w-[200px]" src="./images/logo.png" alt="" />
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
                <img className="size-6" src="./icons/help.svg" alt="" />
              </Link>
              <Link to="">
                <img className="size-6" src="./icons/person.svg" alt="" />
              </Link>
              <Link to="">
                <img className="size-6" src="./icons/basket.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
