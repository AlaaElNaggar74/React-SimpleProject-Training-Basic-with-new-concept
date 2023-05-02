import React from "react";
import Son from "./Son";

import "./PA.css"
const Parent = () => {
  return (
    <div className="ParentClasse">
      <h1  className={`hid`}>Parent 1 hhhhhhhhhhhhhhh</h1>
      <Son />
      <h1>Parent Last</h1>
      
    </div>
  );
};

export default Parent;
