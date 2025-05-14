import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWrapper from "../layout/LayoutWrapper";
import AppLayout from "../layout/AppLayout";
import SidebarProvider from "../context/SidebarProvider";
import Landing from "../pages/Landing/Landing";
import { Error } from "../components/common";
import HomeLayout from "../layout/HomeLayout";
import {
  ChildrenService,
  JuniorYouth,
  YoungPeopleGuild,
  YAF,
  WomenFellowship,
  MensFellowship,
  Login,
  Register,
  NewCSMember,
  NewJYMember,
} from "../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      { path: "signup", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { index: true, element: <h1>Dashboard page</h1> },
      { path: "members", element: <h1>Members page</h1> },
      {
        path: "groups",
        children: [
          {
            path: "cs",
            children: [
              { index: true, element: <ChildrenService /> },
              {
                path: "new",
                element: <NewCSMember />,
              },
            ],
          },
          {
            path: "jy",
            children: [
              {
                index: true,
                element: <JuniorYouth />,
              },
              {
                path: "new",
                element: <NewJYMember />,
              },
            ],
          },
          {
            path: "ypg",
            children: [
              {
                index: true,
                element: <YoungPeopleGuild />,
              },
              {
                path: "new",
                element: "YPG Form",
              },
            ],
          },
          {
            path: "yaf",
            element: <YAF />,
          },
          {
            path: "mens",
            element: <MensFellowship />,
          },
          {
            path: "womens",
            element: <WomenFellowship />,
          },
        ],
      },
      { path: "donations", element: <h1>Donation page</h1> },
      { path: "attendance", element: <h1>Attendance page</h1> },
    ],
  },

  // { path: "*", element: <h1>Page Not Found</h1> },
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
