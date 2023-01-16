import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
  let[element, setFlag] = useState("");

  function para(){
    setFlag(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
  }
  return (
    <>
      <div id="main">
      </div>
      {element}
      <button id="click" onClick={para}>show</button>
    </>
  );
}


export default App;
