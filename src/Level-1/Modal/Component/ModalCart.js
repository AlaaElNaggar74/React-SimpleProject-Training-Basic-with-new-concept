import React, { useState, useRef, useEffect } from "react";
import cartStyle from "./ModalCart.module.css";
import { objStudents } from "./ModalStudentLisCom";
import CopySepCart from "./ModalSepCart";
import CopyFilter from "./ModalFilter";
import ModalPage from "../ModalPage";
const ModalCart = () => {
  let stList = objStudents;
  let [state, SetState] = useState(objStudents.Student);
  let [showBool, setShowbool] = useState(true);
  let [inputValu, setinputValu] = useState("");
  let inputRef = useRef(null);
  let [showModal, setshowModal] = useState(false);
  let [seWord, setSeWord] = useState("");

  let delFuncx = (eleID) => {
    SetState((prevState) => {
      return prevState.filter((ele) => eleID !== ele.id);
    });
    console.log("State-IN-Side", state);
  };

  let filtteName = (namew) => {
    console.log("namew", namew);
    setSeWord(namew);
  };

  let showModald = () => {
    setshowModal(!showModal);
  };
  // "btn btn-danger d-block m-auto px-3 py-1 mb-5 fs-3 fw-bolder"
  return (
    <>
      <div className={`${cartStyle.Cart} ${cartStyle.asd}`}>
        <ModalPage btnshoe={showModal}   showMo={setshowModal}  />
        <h1 className={`hide`}>Student List Copy</h1>
        <button
          className={
            !showModal
              ? ` btn btn-danger d-block m-auto px-3 py-1 mb-5 fs-3 fw-bolder`
              : `d-none`
          }
          onClick={showModald}
        >
          ShowModal
        </button>
        <div className="container">
          <button
            className={cartStyle.showBut}
            onClick={() => {
              setShowbool(!showBool);
            }}
          >
            {showBool ? "Hide List" : "Show-List"}
          </button>
          <CopyFilter funtt={filtteName} />

          <div className={showBool ? cartStyle.sh : cartStyle.hid}>
            <CopySepCart
              objStudent={state}
              serchword={seWord}
              bgMale="#d33d3d"
              bgFeMale="#3dd368"
              delFunc={delFuncx}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
