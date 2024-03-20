import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="text-3xl bg-[#ffbd45] text-center p-2 my-2 text-white">
        well come to home
      </h2>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
