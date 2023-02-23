import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation/Index";
import "./Themes/Css/Global.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    <Provider store={store}>
    <Navigation />
    </Provider>
  </React.StrictMode>
  
);



