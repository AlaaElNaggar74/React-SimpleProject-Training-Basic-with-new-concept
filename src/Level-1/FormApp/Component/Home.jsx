import React, { Fragment } from "react";

const Home = () => {
  let  arr=["A - ","B - ","C - " ,"D - "," E - "];
  let  arrAS=["A","L","A" ,"A","E"];
  let numArr=[1,2,3];
  return (
    <Fragment >
      AUX
      <div className="Home">
        {" "}
        <h1 style={{color:"red"}}>ALAA AAAAAA</h1>{" "}
        <h1 style={{color:"red"}}>{arr}</h1>{" "}
        <h1 style={{color:"red"}}>{arrAS}</h1>{" "}
        <h1 style={{color:"red"}}>{numArr.reduce((acu,ele)=>{
          return acu+=ele;
        },0)}</h1>{" "}
        {numArr.map((ele)=> <h1>{ele* 2}</h1>)
                
        }
      </div>
    </Fragment>
  );
};

export default Home;
