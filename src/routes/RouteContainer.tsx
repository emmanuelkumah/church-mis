import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWrapper from "../layout/LayoutWrapper";
import AppLayout from "../layout/AppLayout";
import SidebarProvider from "../context/SidebarProvider";
import Landing from "../pages/Landing/Landing";
import Authentication from "../pages/Auth/Authentication";
import Login from "../pages/Auth/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  { path: "/signup", element: <Authentication /> },
  { path: "/login", element: <Login /> },

  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <h1>Dashboard page</h1> },
      { path: "members", element: <h1>Members page</h1> },
      {
        path: "groups",
        children: [
          {
            path: "cs",
            element: <h1>children service page</h1>,
          },
          {
            path: "jy",
            element: <h1>JY page</h1>,
          },
          {
            path: "yaf",
            element: <h1>YAF page</h1>,
          },
          {
            path: "mens",
            element: <h1>mens page</h1>,
          },
          {
            path: "womens",
            element: <h1>women page</h1>,
          },
        ],
      },
      { path: "donations", element: <h1>Donation page</h1> },
      { path: "attendance", element: <h1>Attendance page</h1> },
    ],
  },
  { path: "*", element: <h1>Page Not Found</h1> },
]);
const RouteContainer = () => {
  return (
    <SidebarProvider>
      <LayoutWrapper>
        <RouterProvider router={routes} />
      </LayoutWrapper>
    </SidebarProvider>
  );
};

export default RouteContainer;
