import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Level-1/AppWithComponent/Component/Home";
import Cart from "./Level-1/AppWithComponent/Component/Cart";
import Parent from "./Level-1/cococ/Parent";
import PA from "./Level-1/ModuleCssExam/PA";
import NavBar from "./GeneralCom/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CopyCart from "./Level-1/CopyAppwith/Component/CopyCart";
import Modal from "./Level-1/Modal/ModalPage";
import ModalCart from "./Level-1/Modal/Component/ModalCart";
import FormCart from "./Level-1/FormApp/Component/FormCart"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <App />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              {/* <App /> */}
              {/* <Home/> */}
              <Cart />
              {/* <Parent/> */}
              {/* <PA/> */}
            </>
          }
        />
        <Route
          path="/Copy"
          element={
            <>
              {/* <App /> */}
              {/* <Home/> */}
              <CopyCart />
              {/* <Parent/> */}
              {/* <PA/> */}
            </>
          }
        />
        <Route
          path="/modal"
          element={
            <>
              {/* <App /> */}
              {/* <Home/> */}
            
              <ModalCart/>
              {/* <Parent/> */}
              {/* <PA/> */}
            </>
          }
        />
        <Route
          path="/form"
          element={
            <>
              {/* <App /> */}
              {/* <Home/> */}
            
              <FormCart/>
              {/* <Parent/> */}
              {/* <PA/> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   React.createElement("h1", null, "Hellow World"),
//   document.getElementById("root")
// ); //method is now deprecated for newer import methods in the React 18.
