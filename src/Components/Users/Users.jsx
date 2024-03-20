import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-4">
      {users?.map((cart) => (
        <User key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default Users;
