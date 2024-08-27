// import { useState } from "react";

function HeaderInfo() {
  return (
    <>
      <div className="alert alert-info">
        <h1>Simple QR code generator with react-qr-code</h1>
        <p>Enter your input to create the code.</p>
      </div>
    </>
  );
  //conditional rendering + event practise

  //   const info = ["take your input", "create qr", "look pretty"];
  //   let usedOnce = false;
  //   //actual hadler
  //   // let selectedindex = -1;
  //   const [selectedindex, setselectedindex] = useState(-1);
  //   // the above line deconstructed vvv
  //   // const hookArray = useState(-1); // 'state' hook
  //   // arr[0]; //variable
  //   // arr[1]; //updater function
  //   const handleClick = (event) => console.log("yeah", info.index);
  //   //conditional render with if else
  //   if (usedOnce === true) {
  //     return (
  //       <>
  //         <h1 className="alert alert-primary">see</h1>
  //         <h3>it works</h3>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1 className="alert alert-primary">this app can</h1>
  //         <ul className="list-group">
  //           {info.map((info, index) => (
  //             //when handling events dont forget to add the key
  //             <li
  //               className={
  //                 // conditional rendering with unary operator
  //                 selectedindex === index
  //                   ? "list-group-item active"
  //                   : "list-group-item"
  //               }
  //               key={info}
  //               onClick={
  //                 /*handleClick or  => */ () => {
  //                   console.log("yeah", info);
  //                   // use of state updater function
  //                   setselectedindex(index);
  //                 }
  //               }
  //             >
  //               {info}
  //             </li>
  //           ))}
  //         </ul>
  //       </>
  //     );
  //   }
  //
}
export default HeaderInfo;
//alternative conditional
//   return {usedOnce && <>
//   <h1>see</h1>

//   <h3>it works</h3>
// </> }
