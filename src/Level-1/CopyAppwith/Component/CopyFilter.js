import React, { useState } from "react";
import FilterStyle from "./CopyCart.module.css";
const CopyFilter = (props) => {
  let [fiValue, setfiValue] = useState("");

  let filterFun = (e) => {
    let vla = e.target.value;
    console.log("e.target.value", vla);
    setfiValue(vla);
    console.log("fiValue", fiValue);
    props.funtt(vla);

  };
  return (
    <div className={FilterStyle.filt}>
      <div className={FilterStyle.inpDiv}>                                  
        <input
          type="text"
          placeholder="search "
          className={FilterStyle.inp}
          value={fiValue}
          onChange={filterFun}
        />
        <button
          className={FilterStyle.inpButDiv}
          id="ddd"
          type="dasa"
          onClick={() => {}}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CopyFilter;

// import React, { useState } from 'react';
// import FilterStyle from  "./Cart.module.css"
// const CopyFilter = () => {
//   let[fiValue,setfiValue]=useState("");

//   let filterFun=(e)=>{
//     console.log(e.target.value)
//   setfiValue(e.target.value);
//   }
//   return (
//     <div className={FilterStyle.filt}>
//         <div className={FilterStyle.inpDiv}>
//       <input type="text" placeholder="search " className={FilterStyle.inp} value={fiValue} onChange={filterFun}/>
//       <button className={FilterStyle.inpButDiv} id="ddd" type="dasa"  onClick={()=>{

//           }}>Search</button>
//       </div>
//     </div>
//   );
// }

// export default CopyFilter;
