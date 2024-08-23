import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import QRCode from "react-qr-code";

import React from "react";
import ReactDOM from "react-dom";
import QrCodeComp from "./components/QrData";
import HeaderInfo from "./components/HeaderInfo";
import FooterInfo from "./components/FooterInfo";
// import New from "./components/New";

function App() {
  return (
    <div className="App">
      <HeaderInfo></HeaderInfo>
      <QrCodeComp></QrCodeComp>
      <FooterInfo></FooterInfo>
      {/* <New text=" xrwmatA"></New> */}
    </div>
  );
}

export default App;
