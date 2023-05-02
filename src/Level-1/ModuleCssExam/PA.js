import React from "react";
import SO from "./SO";
import stylPA from "./Pa.module.css";
import styleee from "./So.module.css"
const PA = () => {
  return (
    // <div className={`${stylPA.PA}`}>
    <div className={stylPA.asd}>
      <h1 className="h">
        ---------------------WITH MODULES------------------------------
      </h1>
      <h1>Parent 1</h1>
      <SO />
      <button className={stylPA.bttt}> click-Module</button>

      <h1>Parent Last</h1>
    </div>
  );
};

export default PA;
