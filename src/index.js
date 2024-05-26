import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/global.css";
import "../node_modules/react-circular-progressbar/dist/styles.css";
import NavigationBar from "components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <NavigationBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
