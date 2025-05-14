import { Link, useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      <div className="flex flex-col items-center justify-center p-4 w-lg max-w-sm bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Oops!</h1>
        <h1>Error Page !!!</h1>
        <Link to="/">back home</Link>
      </div>
    </div>
  );
};

export default Error;
