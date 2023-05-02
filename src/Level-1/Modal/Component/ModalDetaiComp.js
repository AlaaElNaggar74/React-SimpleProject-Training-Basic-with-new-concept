import React, { useState } from "react";
import cartSyle from "./ModalCart.module.css";

// const ModalDetaiComp = ({id,name,Gender,Type,Age,Mobile,girCo,delFunc,manCol}) => {
  const ModalDetaiComp = ({id,name,Gender,Type,Age,Mobile,girCo,delFunc,manCol}) => {

// const CopyDetaiComp = ({,manCol,girCo,delFunc} ) => {
  return (
    <div
      className={`${cartSyle.cont}`}
      key={id}
      style={{
        backgroundColor:
        // Gender === "Male" ? manCol : girCo,
        Gender === "Male" ? manCol : girCo,
      }}
    >
      <div className={`${cartSyle.numb}`}>{id}</div>
      <h4> Name: {name}</h4>
      <h6>Gender: {Gender}</h6>
      <h6>Age: {Age}:</h6>
      <h6>Telephone: {Mobile}</h6>
      <button
        className={`${cartSyle.butxx}`}
        onClick={(e) => {
          delFunc(id);
          console.log(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ModalDetaiComp;
