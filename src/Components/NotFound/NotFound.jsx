import { NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h2 className="text-4xl text-center text-red-500">Oops !!</h2>

      {error.status === 404 && (
        <div className="text-center">
          <h2 className="text-4xl text-blue-500">
            Oops sorry this page reach out!!
          </h2>
          <NavLink
            className="bg-red-500 text-white py-2 px-5 rounded-md"
            to="/"
          >
            {" "}
            Go Home{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NotFound;
