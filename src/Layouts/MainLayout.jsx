import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-225px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
