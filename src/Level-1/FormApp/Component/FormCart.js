import React, { useState, useRef, useEffect } from "react";
import cartStyle from "./FormCart.module.css";
import { objStudents } from "./FormStudentLisCom";
import FormFilter from "./FormFilter";
import FormSepCart from "./FormSepCart";
import ModalForm from "../ModalForm/ModalForm"
import ButtonReusa from "./ButtonReusa";

const FormCart = () => {
  let stList = objStudents;
  let [state, SetState] = useState(objStudents.Student);
  let [showBool, setShowbool] = useState(true);
  let [inputValu, setinputValu] = useState("");
  let inputRef = useRef(null);
  let [seWord, setSeWord] = useState("");
  let[showPop,setShowPop]=useState(false);

  let delFuncx = (eleID) => {
    SetState((prevState) => {
      return prevState.filter((ele) => eleID !== ele.id);
    });
    console.log("State-IN-Side", state);
  };

let filtterxz=()=>{
return state.filter((item) => {
    return seWord === ""
      ? item
      : item.name.toLowerCase().includes(seWord);
  })
}

let addNewStudFun=(newObj)=>{

  let theNewState=[...state,newObj];
  SetState(theNewState);
  console.log(theNewState);

}
return (
    <>
      <div className={`${cartStyle.Cart} ${cartStyle.asd}`}>
        <h1 className={`hide`}>Student List And Form</h1>
        <ModalForm showBollea={showPop} showFunc={setShowPop} addNewStudFunP={addNewStudFun}/>
        <div className="container">
          {/* <button
            className={`${cartStyle.showBut} ${cartStyle.btCol}` }
            onClick={()=>setShowPop(true)}
              >
          ShowPop
            
          </button> */}

          <ButtonReusa classStyle="showBut btCol" text="AddNewStudent "   onClick={()=>setShowPop(true)}/>
          {/* <button
            className={cartStyle.showBut}
            onClick={() => {
              setShowbool(!showBool);
            }}
          >
            {showBool ? "Hide List" : "Show-List"}
          </button> */}
          <ButtonReusa classStyle="showBut btCol" text={showBool ? "Hide List" : "Show-List"}   onClick={() => {
                      setShowbool(!showBool);
            }}/>

          <FormFilter funtt={setSeWord} />

          <div className={showBool ? cartStyle.sh : cartStyle.hid}>
            <FormSepCart
              objStudent={filtterxz()}
              bgMale="rgb(70, 151, 88)"
              bgFeMale="rgb(172, 23, 147)"
              delFunc={delFuncx}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCart;
