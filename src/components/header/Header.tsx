import { icons, images } from "@/assets";
import { SlLocationPin } from "react-icons/sl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-4 border-b">
      <nav className="flex justify-between max-w-7xl mx-auto items-center">
        <div className="w-[25%] flex">
          <img className="w-[40%] object-contain" src={images.logo} alt="" />

          <div className="flex items-center space-x-2">
            <SlLocationPin className="text-lg" />
            <div>
              <p className="text-xs">Deliver to</p>
              <p className="text-sm font-semibold">Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-[50%] flex items-center">
          <div className="w-[25%]">
            <DropdownMenu>
              <DropdownMenuTrigger className="border w-full py-2.5 px-2  border-r-0">
                <p className="font-medium text-sm flex items-center space-x-1">
                  <span> All Categories</span> <IoIosArrowDown />
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <input
            type="text"
            placeholder="Search Campariyan"
            className="w-[75%] border py-2 focus:outline-none placeholder:text-xs border-l-0"
          />
        </div>

        <div className="w-[25%] flex justify-end space-x-5 items-center">
          {/* Sign in and accounts */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col">
              <p className="text-xs">Hello, sign in</p>
              <p className="font-medium text-sm">Accounts and Lists</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Return and orders */}
          <Link className="text-sm" to="/orders">
            <span className="text-xs">Returns</span> <br />{" "}
            <span className="font-medium">& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <img className="size-6" src={icons.basket} alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
