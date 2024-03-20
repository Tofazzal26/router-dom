import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="text-3xl text-center">This is a home page</h2>
    </div>
  );
};

export default Home;
