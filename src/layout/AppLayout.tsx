import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";
import { useSidebar } from "../context/SidebarProvider";
const AppLayout = () => {
  const { isSidebarExpanded, isSidebarHovered, isMobileOpen } = useSidebar();
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out bg-white ${
          isSidebarExpanded || isSidebarHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]"
        }  ${isMobileOpen && "ml-0"} `}
      >
        <AppHeader />
        <div className="p-4 md:p-6 mx-auto max-w-[1536px] border bg-white lg:rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
