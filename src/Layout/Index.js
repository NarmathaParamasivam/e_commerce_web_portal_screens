import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Common/HerizondalLayout/Header/Header";
import Footer from "../Components/Common/HerizondalLayout/Footer/Footer";
import HomeScreen from "../HomeScreen/HomeScreen";
const Layout = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
