import React, { useState, useRef, useEffect } from "react";
import cartStyle from "./Cart.module.css";
import SepCart from "./SepCart";
import { objStudents } from "./StudentLisCom";
import Filter from "./Filter";
const Cart = () => {
  let stList = objStudents;
  let [state, SetState] = useState(objStudents.Student);
  let [showBool, setShowbool] = useState(true);
  let [inputValu, setinputValu] = useState("");
  let inputRef = useRef(null);
  let [seWord,setSeWord]=useState("");

  let delFuncx = (eleID) => {
    // let newval = state.filter((ele) => eleID !== ele.id);
    // SetState(newval);
    // SetState(state.filter((ele) => eleID !== ele.id));
    SetState((prevState) => {
      return prevState.filter((ele) => eleID !== ele.id);
    });
    console.log("State-IN-Side", state);
  };

  let filtteName = (namew) => {
    console.log("namew",namew);
    setSeWord(namew);
    // if(namew.==="" ||namew.trim()===" "){

    // }else{

    // }
  // if(namew.length>0){
  //   let newval = state.filter((ele) => ele.name.includes(namew));
  //   SetState(newval);
  // }
    // SetState((prevState) => {
    //   return prevState.filter((ele) => ele.name.includes(namew.trim()));
    // });
  };



  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  return (
    <>
      <div className={`${cartStyle.Cart} ${cartStyle.asd}`}>
        <h1 className={`hide`}>Student List</h1>
          <div className="container">
          <button
          className={cartStyle.showBut}
          onClick={() => {
            // showBool? setShowbool(false) : setShowbool(true);
            setShowbool(!showBool);

            // console.log("showBool", showBool);
          }}
        >
          {showBool ? "Hide List" : "Show-List"}
        </button>
        <Filter funtt={filtteName} />
        {/* <div className={cartStyle.inpDiv}>
      <input type="text" placeholder="search " className={cartStyle.inp} ref={inputRef} onChange={(e)=>{
        
        // setinputValu(e.target.value);
        console.log(e.target.value);
      }}/>
      <button className={cartStyle.inpButDiv} id="ddd" type="dasa"  onClick={()=>{
        // console.log(inputRef.current.value);
        // inputValu.focus()
        // console.log(inputValu);
      }}>Search</button>
      </div> */}
        {/* { showBool ?  <SepCart
          objStudent={state}
          bgMale="orange"
          bgFeMale="pink"
          delFunc={delFuncx}
          ShowBo={showBool}
        />:""} */}
        <div className={showBool ? cartStyle.sh : cartStyle.hid}>
          <SepCart
            objStudent={state}
            serchword={seWord}
            bgMale="orange"
            bgFeMale="pink"
            delFunc={delFuncx}

            // className={`{showBool}?${cartStyle.sh}: ${cartStyle.hid}`}
            // className={showBool?cartStyle.sh:cartStyle.hid}

            // ShowBo={showBool}
          />
        </div>
          </div>
      </div>
    </>
  );
};

export default Cart;
