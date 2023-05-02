import React, { useState } from "react";
import FilterStyle from "./FormCart.module.css";

const FormFilter = (props) => {
  // let [fiValue, setfiValue] = useState("");

  let filterFun = (e) => {
    let vla = e.target.value;
    // console.log("e.target.value", vla);
    // setfiValue(vla);
    // console.log("fiValue", fiValue);
    props.funtt(vla);

  };
  return (
    <div className={FilterStyle.filt}>
      <div className={FilterStyle.inpDiv}>                                  
        <input
          type="text"
          placeholder="search "
          className={FilterStyle.inp}
          onChange={filterFun}
        />
        <button
          className={FilterStyle.inpButDiv}
          id="ddd"
          type="dasa"
          // onClick={() => {}}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FormFilter;
