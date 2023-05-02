import React, { useState } from "react";
import modalStyle from "./ModalForm.module.css";
import ReactDOM from "react-dom";

import ButtonReusa from "../Component/ButtonReusa";

import ControllerInput from "../Component/ControllerInput";

let BackDropFun = ({ hidePop, checkValue }) => {
  return (
    <div
      className={`${modalStyle.backDrop} ${
        checkValue ? modalStyle.ShowBackDr : ""
      }`}
      onClick={() => hidePop(false)}
    ></div>
  );
};
let OverLayFun = ({ checkValue, addNewStudFunP,hidePop }) => {
  let [name, setName] = useState("");
  let [Gender, setGender] = useState("");
  let [age, setAge] = useState("");
  let [Mobile, setMobile] = useState("");
  let x = Math.floor((Math.random() * 1000) + 1);

  return (
    <div
      className={`${modalStyle.overLay} ${
        checkValue ? modalStyle.ShowoverLay : ""
      } col-5`}
    >
      <div className={`${modalStyle.FormInput} `}>
        <h1 className="text-center">Form Input</h1>
        <div className="mb-3">
          <ControllerInput>
            <ControllerInput.Apear>
              <form
                className="needs-validation"
                onSubmit={(e) => {
                  e.preventDefault();
                  addNewStudFunP({id:x,name,Gender,Age:age,Mobile});
                  console.log({id:x,name,Gender,age,Mobile})
                  setName("") ;setGender("") ;setAge("") ;setMobile("");
                  hidePop(false);
                }}
              >
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control mt-2 mb-4"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Gender: </label>
                <input
                  type="text"
                  className="form-control mt-2 mb-4"
                  value={Gender}
                  placeholder="Enter Your Gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Age: </label>
                <input
                  type="number"
                  className="form-control mt-2 mb-4"
                  value={age}
                  placeholder="Enter Your Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Mobile: </label>
                <input
                  type="number"
                  className="form-control mt-2 mb-4"
                  value={Mobile}
                  placeholder="Enter Your Mobile"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  required
                />
                <div className="d-flex justify-content-center">
                  {" "}
                  {/* <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => setInValue("")}
                  >
                    Submit
                  </button>*/}
                  <ButtonReusa
                    classStyle="btn btn-danger "
                    text="Submit"
                    type="submit"
                  
                  />
                  <ButtonReusa
                    classStyle="btn btn-danger ms-3"
                    text="Reset"
                    type="reset"
                  
                  
                  />
                  {/* <button type="reset">Reset</button> */}
                </div>
              </form>
            </ControllerInput.Apear>
          </ControllerInput>
        </div>
      </div>
    </div>
  );
};

const ModalForm = ({ showBollea, showFunc, addNewStudFunP }) => {
  return (
    <div className="ModalForm">
      {ReactDOM.createPortal(
        <>
          <BackDropFun checkValue={showBollea} hidePop={showFunc} />
          <OverLayFun checkValue={showBollea}  hidePop={showFunc} addNewStudFunP={addNewStudFunP} />
        </>,
        document.getElementById("FormModal")
      )}
    </div>
  );
};

export default ModalForm;
