import { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeComp() {
  //The state obj
  const [inputData, setData] = useState({
    qrData:
      "https://i.pinimg.com/originals/18/61/6e/18616e9d78b7a285a10254422f2f852d.jpg",
    qrFgData: "#FFFF",
    qrBgData: "#DD3371",
  });

  //Event handler for the inputs
  const handleChange = (event) => {
    let { name, value } = event.target;
    console.log(event.target.textLength);

    // To prevent the user from causing error
    // (the condition isnt set to the actual limit the reactQRCode library can take.)
    //The user doesnt need to know this :)
    if (event.target.textLength > 3000) {
      alert("CHARACTER LIMIT EXCEEDED \n RESETING INPUT");
      console.log("limit exceeded");
      value = "0";
    }

    setData((prevData) => ({
      ...prevData, // Spread the previous state to retain other fields
      [name]: value, // Update the specific field
    }));
  };
  return (
    <>
      <form>
        {/*input for the creation of the qrCode */}
        <input
          type="text"
          name="qrData"
          placeholder="https://www.2048.org/"
          className="alert alert-primary"
          onChange={handleChange}
          // if (inputData != "ela") {
          //   setData("ela");
          //   console.log("down", inputData);
          // } else {
          //   setData("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          // }
        />
        <br></br>
        {/*input for the background of the qrCode */}
        <input
          type="text"
          name="qrBgData"
          className="alert alert-primary"
          placeholder="#DD3371"
          onChange={handleChange}
        ></input>
        <br></br>
        {/*input for the line color (foreground) of the qrCode */}
        <input
          type="text"
          name="qrFgData"
          className="alert alert-primary"
          placeholder="#40F777"
          onChange={handleChange}
        ></input>
      </form>
      {/*qr code component*/}
      <QRCode
        value={inputData.qrData}
        bgColor={inputData.qrBgData}
        fgColor={inputData.qrFgData}
      />

      <br></br>
      {/*qr code component reset button*/}

      <button
        type="submit"
        className="alert alert-primary"
        onClick={() => {
          setData({
            qrData:
              "https://i.pinimg.com/originals/18/61/6e/18616e9d78b7a285a10254422f2f852d.jpg",
            qrFgData: "#FFFF",
            qrBgData: "#DD3371",
          });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default QrCodeComp;
