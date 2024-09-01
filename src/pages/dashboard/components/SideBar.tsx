import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="col-span-2 border-r h-screen shadow-slate-400">
      <ul className="p-4 space-y-2 text-sm font-medium">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-[#f4f4f5]" : "hover:underline"
              } block p-2 text-gray-700 rounded-md transition-all`
            }
            to="products"
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-[#f4f4f5]" : "hover:underline"
              } block p-2 text-gray-700 rounded-md transition-all`
            }
            to="create-product"
          >
            Create Product
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
