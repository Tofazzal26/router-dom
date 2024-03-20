import { NavLink } from "react-router-dom";

const User = ({ cart }) => {
  const { id, name, email, website, address } = cart;

  return (
    <div className="text-xl font-semibold border border-orange-400 rounded-md p-4 text-center">
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <h4>Address: {address.street}</h4>
      <h4>Website: {website}</h4>
      <NavLink to={`/users/${id}`}>
        <button className="bg-red-500 text-white py-3 px-8 rounded-md">
          Details
        </button>
      </NavLink>
    </div>
  );
};

export default User;
