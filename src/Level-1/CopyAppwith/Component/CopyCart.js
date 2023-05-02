import React, { useState, useRef, useEffect } from "react";
import cartStyle from "./CopyCart.module.css";
import { objStudents } from "./CopyStudentLisCom";
import CopySepCart from "./CopySepCart";
import CopyFilter from "./CopyFilter";
const CopyCart = () => {
  let stList = objStudents;
  let [state, SetState] = useState(objStudents.Student);
  let [showBool, setShowbool] = useState(true);
  let [inputValu, setinputValu] = useState("");
  let inputRef = useRef(null);
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

  return (
    <>
      <div className={`${cartStyle.Cart} ${cartStyle.asd}`}>
        <h1 className={`hide`}>Student List Copy</h1>
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

export default CopyCart;
