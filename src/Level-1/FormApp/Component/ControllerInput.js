import React from "react";

import cartStyle from "./FormCart.module.css";

const ControllerInput = (props) => {
  return (
    // <div className='ControllerInput FormInput'>
    <div className={`${cartStyle.ControllerInput} ${cartStyle.FormInput}`}>
      {props.children}
    </div>
  );
};

ControllerInput.Apear = (props) => {
  return <>
  {props.children}
  </>;
};

export default ControllerInput;
