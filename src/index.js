import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation/Index";
import "./Themes/Css/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);
