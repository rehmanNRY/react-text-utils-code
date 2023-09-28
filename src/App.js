import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [bodyClr, setBodyClr] = useState("#f5f6fa");
  document.body.style.backgroundColor = bodyClr;
  const [btnClr, setBtnClr] = useState("secondary");
  const [navClr, setNavClr] = useState("#dcdde1");
  const [navItemClr, setNavItemClr] = useState("black");
  const aboutStyle = {
    backgroundColor: bodyClr,
    color: navItemClr,
    border: "1px solid",
    borderColor: navItemClr
  };
  const aboutHeadStyle = {
    backgroundColor: navClr,
    color: navItemClr,
    border: "1px solid",
    borderColor: navItemClr
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (type,message)=> {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const lightMode = ()=>{
    document.title = "TextUtils - Light Theme";
    document.body.style.color = "black";
    setBodyClr("#f5f6fa");
    setBtnClr("secondary");
    setNavClr("#dcdde1");
    setNavItemClr("black");
    showAlert("success","Light Theme is enabled");
    // Blinking Title
    // setInterval(() => {
    //   document.title = "Download TextUtils Now";
    // }, 500);
    // setInterval(() => {
    //   document.title = "Install TextUtils Now";
    // }, 700);
  };
  const darkMode = ()=>{
    document.title = "TextUtils - Dark Theme";
    document.body.style.color = "white";
    setBodyClr("#353b48");
    setBtnClr("light");
    setNavClr("#1e272e");
    setNavItemClr("white");
    showAlert("success","Dark Theme is enabled");
  };
  const redMode = ()=>{
    document.title = "TextUtils - Red Theme";
    document.body.style.color = "black";
    setBodyClr("#e17055");
    setBtnClr("danger");
    setNavClr("#d63031");
    setNavItemClr("black");
    showAlert("success","Red Theme is enabled");
  };
  const yellowMode = ()=>{
    document.title = "TextUtils - Yellow Theme";
    document.body.style.color = "black";
    setBodyClr("#f6e58d");
    setBtnClr("warning");
    setNavClr("#f9ca24");
    setNavItemClr("black");
    showAlert("success","Yellow Theme is enabled");
  };
  const greenMode = ()=>{
    document.title = "TextUtils - Green Theme";
    document.body.style.color = "black";
    setBodyClr("#55efc4");
    setBtnClr("succes");
    setNavClr("#00b894");
    setNavItemClr("black");
    showAlert("success","Green Theme is enabled");
  };
  const aquaMode = ()=>{
    document.title = "TextUtils - Aqua Theme";
    document.body.style.color = "black";
    setBodyClr("#81ecec");
    setBtnClr("info");
    setNavClr("#00cec9");
    setNavItemClr("black");
    showAlert("success","Aqua Theme is enabled");
  };
  const blueMode = ()=>{
    document.title = "TextUtils - Blue Theme";
    document.body.style.color = "black";
    setBodyClr("#48dbfb");
    setBtnClr("primary");
    setNavClr("#0abde3");
    setNavItemClr("black");
    showAlert("success","Blue Theme is enabled");
  };
  return (
    <>
      <Router>
        <Navbar 
          title="TextUtils"
          aboutText="About" 
          lightMode={lightMode} 
          darkMode={darkMode} 
          redMode={redMode} 
          yellowMode={yellowMode} 
          greenMode={greenMode} 
          aquaMode={aquaMode} 
          blueMode={blueMode} 
          navClr={navClr} 
          navItemClr={navItemClr}>
        </Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route 
              exact 
              path="/about" 
              element={
              <About 
                aboutStyle={aboutStyle} 
                aboutHeadStyle={aboutHeadStyle}>
              </About>}>
            </Route>
            <Route 
              exact 
              path="/" 
              element={
              <TextForm 
                heading="Try TextUtils -  Text analytics tools"
                showAlert={showAlert}
                btnClr={btnClr}
                textAreaBg={navClr}
                textAreaClr={navItemClr}>
              </TextForm>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;