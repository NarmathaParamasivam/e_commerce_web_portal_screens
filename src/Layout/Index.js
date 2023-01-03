import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Common/HerizondalLayout/Header/Header";
import Footer from "../Components/Common/HerizondalLayout/Footer/Footer";
import BannerImage from "../Pages/Banner/BannerImage";
const Layout = () => {
  return (
    <div>
      <Header />
      <BannerImage/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
