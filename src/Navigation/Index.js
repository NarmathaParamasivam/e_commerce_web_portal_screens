import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Index";
import HomeScreen from "../HomeScreen/HomeScreen.js";

function Navigation() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/homeScreen" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
