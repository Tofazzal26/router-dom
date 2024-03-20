import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <h2 className="text-3xl bg-[#ffbd45] text-center p-2 my-2 text-white">
        well come to home
      </h2>

      {navigation.state === "loading" ? (
        <p className="text-4xl text-center text-blue-600">Loading...</p>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Home;
