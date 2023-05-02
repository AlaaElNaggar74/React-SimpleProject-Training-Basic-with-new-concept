

import React from 'react';

// import modalStyle from "../ModalForm/ModalForm.module.css"

const ButtonReusa = (props) => {
  return (
    <div className='ButtonReusa'>
      <button className={props.classStyle} onClick={props.onClick} type={`${props.type?props.type:"button"}`}>{props.text}</button>
    </div>
  );
}

export default ButtonReusa;
