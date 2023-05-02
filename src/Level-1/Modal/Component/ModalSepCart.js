import React, { useState } from "react";
import cartSyle from "./ModalCart.module.css";
import CopyDetaiComp from "./ModalDetaiComp";

const ModalSepCart = ({ objStudent, serchword, bgMale, bgFeMale, delFunc }) => {
  return (
    <div className={`${cartSyle.SepCart}`}>
      {objStudent
        .filter((item) => {
          return serchword === "" ? item : item.name.includes(serchword);
        })
        // .map((ele) => (
        //   <CopyDetaiComp key={ele.id} ele={ele}  manCol={bgMale} girCo={bgFeMale} delFunc={delFunc}/>

        .map(({ id, ...otherProps }) => (
          <CopyDetaiComp
            key={id}
            {...otherProps}
            id={id}
            manCol={bgMale}
            girCo={bgFeMale}
            delFunc={delFunc}
          />
        ))}
    </div>
  );
};

export default ModalSepCart;
