import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const details = useLoaderData();
  const { name, email, address } = details;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="text-center text-xl">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{address.street}</h2>
      <button
        onClick={handleBack}
        className="bg-red-500 text-white py-2 px-5 rounded-md"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
