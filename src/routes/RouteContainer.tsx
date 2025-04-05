import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWrapper from "../layout/LayoutWrapper";
import AppLayout from "../layout/AppLayout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home page</h1>,
  },
  { path: "/signup", element: <h1>Sign up page</h1> },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <h1>Dashboard page</h1> },
      { path: "members", element: <h1>Members page</h1> },
      { path: "groups", element: <h1>Group page</h1> },
    ],
  },
  { path: "*", element: <h1>Page Not Found</h1> },
]);
const RouteContainer = () => {
  return (
    <LayoutWrapper>
      <RouterProvider router={routes} />
    </LayoutWrapper>
  );
};

export default RouteContainer;
