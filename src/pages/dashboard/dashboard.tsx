import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function Dashboard() {
  return (
    <div className="grid grid-cols-10 gap-x-4">
      {/* sidebar */}
      <SideBar />
      <div className="col-span-8 h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
