import React, { useState } from "react";
import cartSyle from "./Cart.module.css";

const SepCart = (props) => {
  // let [newar, setnewarr] = useState(props.objStudent);

  // let delFuncx = (eleID) => {
  //   let xcv = newar.filter((ele) => eleID !== ele.id);
  //   setnewarr(xcv);
  // };

  return (
    <div className={`${cartSyle.SepCart}`}>
      {props.objStudent
        .filter((item) => {
          return props.serchword === ""
            ? item
            : item.name.includes(props.serchword);
        })
        .map((ele) => (
          <div
            className={`${cartSyle.cont}`}
            key={ele.id}
            style={{
              backgroundColor:
                ele.Gender === "Male" ? props.bgMale : props.bgFeMale,
            }}
          >
            {/* // <div className="cont" key={ele.id} style={{backgroundColor:props.bgcolorrr}}> */}
            <div className={`${cartSyle.numb}`}>{ele.id}</div>
            <h4> Name: {ele.name}</h4>
            <h6>Gender: {ele.Gender}</h6>
            <h6>Age: {ele.Age}:</h6>
            <h6>Telephone: {ele.Mobile}</h6>
            <button
              className={`${cartSyle.butxx}`}
              onClick={(e) => {
                props.delFunc(ele.id);
                // setEleid();
                console.log(ele.id);
              }}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
};

export default SepCart;
