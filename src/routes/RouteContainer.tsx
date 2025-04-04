import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home page</h1>,
  },
  { path: "/signup", element: <h1>Sign up page</h1> },
  { path: "/app", element: <h1>Dashboard page</h1> },
  { path: "*", element: <h1>Page Not Found</h1> },
]);
const RouteContainer = () => {
  return <RouterProvider router={routes} />;
};

export default RouteContainer;
