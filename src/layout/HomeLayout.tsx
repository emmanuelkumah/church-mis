import { Outlet } from "react-router";
import { NavBar, Footer } from "../components/common";
const HomeLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
