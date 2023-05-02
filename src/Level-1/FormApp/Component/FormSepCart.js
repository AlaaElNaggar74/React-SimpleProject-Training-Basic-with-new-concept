import React, { useState } from "react";
import cartSyle from "./FormCart.module.css";
import FormDetaiComp from "./FormDetaiComp";

const FormSepCart = ({objStudent,bgMale,bgFeMale,delFunc}) => {

  return (
    <div className={`${cartSyle.SepCart}`}>
      {objStudent.map(({id,...otherProps}) => (
          <FormDetaiComp key={id} {...otherProps} id={id}  manCol={bgMale} girCo={bgFeMale} delFunc={delFunc}/>
        ))
      }
    </div>
  );
};

export default FormSepCart;
