import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <section className="w-[90%] mx-auto mt-6">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
