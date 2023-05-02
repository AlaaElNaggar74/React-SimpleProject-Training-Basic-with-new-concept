import React, { Fragment } from "react";
import modalStyle from "./ModalPage.module.css";
import ReactDOM from "react-dom";

let OverLay = ({ showModal, classSH }) => {
  return (
    <div
      className={`${modalStyle.overLay} ${classSH ? modalStyle.hidePop : ""}`}
    >
    
    </div>
    // <div className={!pooo ? `${modalStyle.overLay}` : modalStyle.hidePop}></div>
  );
};
let Backdrop = ({ classSH,showModal }) => {
  return (
    // <div className={ `${modalStyle.backdrop}` }>
    <div
      className={`${modalStyle.backdrop} ${classSH ? modalStyle.hidePop : ""}`}
    >
        <div
        className={modalStyle.btt}
        onClick={() => {
          showModal(false);
          // sshhh(false);
        }}
      >
        {" "}
        X{" "}
      </div>
    </div>
  );
};

const ModalPage = ({ btnshoe, showMo }) => {
  return (
    <>
      <h1 className={`${modalStyle.head} text-center`}>Modal Page</h1>
      {ReactDOM.createPortal(
        <>
          <Backdrop classSH={btnshoe} showModal={showMo}/>
          <OverLay  classSH={btnshoe} />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
// const ModalPage = ({btnshoe,showMo}) => {
//   return (
//     btnshoe &&   <>
//     <h1 className={`${modalStyle.head} text-center`}>Modal Page</h1>
//    {ReactDOM.createPortal(
//         <>
//           <Backdrop/>
//           <OverLay  pooo={showMo}/>
//         </>,
//         document.getElementById("modal")
//       )}
//     </>
//   );
// };

export default ModalPage;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();

// import React from "react";
// import modalStyle from "./ModalPage.module.css";
// import ReactDOM from "react-dom/client";

// let Backdrop=()=>{
// return <div className={modalStyle.overLay}></div>
// }
// let OverLay=()=>{
//    return <div className={modalStyle.backdrop}></div>
// }

// const root = ReactDOM.createRoot(document.getElementById("modal"));
// root.render(

//       <div className={modalStyle.modal}>
//         <h1 className={`${modalStyle.head} text-center`}>Modal Page</h1>
//         {/* <div className={modalStyle.overLay}></div> */}
//         <Backdrop/>
//         {/* <div className={modalStyle.backdrop}></div> */}
//         <OverLay/>

//       </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();

// import React from "react";
// import modalStyle from "./ModalPage.module.css";
// import ReactDOM from "react-dom/client";

// let Backdrop=()=>{
// return <div className={modalStyle.overLay}></div>
// }
// let OverLay=()=>{
//    return <div className={modalStyle.backdrop}></div>
// }

// const ModalPage = () => {
//   return (
//     <div className={modalStyle.modal}>
//       <h1 className={`${modalStyle.head} text-center`}>Modal Page</h1>
//       {/* <div className={modalStyle.overLay}></div> */}
//       <Backdrop/>
//       {/* <div className={modalStyle.backdrop}></div> */}
//       <OverLay/>

//     </div>
//   );
// };

// export default ModalPage;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();
