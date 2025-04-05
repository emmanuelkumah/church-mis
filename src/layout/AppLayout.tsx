import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>
      <div className="flex-1 lg:ml-[290px] bg-white">
        <AppHeader />
        <div className="p-4 md:p-6 mx-auto max-w-7xl border bg-white lg:rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
