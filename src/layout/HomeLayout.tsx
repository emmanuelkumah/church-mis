import { Outlet } from "react-router";
import { NavBar } from "../components/common";
const HomeLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
