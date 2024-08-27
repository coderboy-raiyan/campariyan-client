import { GoHeart } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b shadow-sm">
      <nav className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <div className="w-[20%]">
            <Link className="text-xl font-bold" to="/">
              Campariyan
            </Link>
          </div>

          {/* middle menu */}
          <ul className="lg:flex justify-end space-x-4 w-[30%] text-sm hidden">
            <li className="hover:text-red-500 transition-all">
              <Link to="">Home</Link>
            </li>
            <li className="hover:text-red-500 transition-all">
              <Link to="">Contact</Link>
            </li>
            <li className="hover:text-red-500 transition-all">
              <Link to="">About</Link>
            </li>
            <li className="hover:text-red-500 transition-all">
              <Link to="">Sign Up</Link>
            </li>
          </ul>

          {/* last menu */}
          <div className="flex w-[50%] justify-end items-center space-x-4">
            <div className="w-[50%]">
              <input
                className="bg-[#F5F5F5] border-none placeholder:text-sm rounded-md w-full"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>

            <p className="hover:animate-bounce">
              <Link to="">
                <GoHeart className="text-2xl" />
              </Link>
            </p>
            <p>
              <Link to="">
                <PiShoppingCartLight className="text-2xl" />
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
