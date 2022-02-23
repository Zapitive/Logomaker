import React, { useState,createContext, useEffect } from "react";
import Home from "./components/Home";
import SvgContainer from "./components/uiHome/SvgContainer";
import Text from "./components/Text";
import "./css/header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/uiHome/Header";
import Icon from "./components/Icon";
import Customize from "./components/Customize";

export const AppContext = createContext(null)

function App() {

//   useEffect(()=>{
//     console.log("iconname logged")
// })


  const [iconname,setIconname] = useState("")
  const [title,setTitle] = useState("")
  const [slogan,setSlogan] = useState("")

  const callback = (e) =>{
    setIconname(e)
  }

  const callbackText = (e) =>{
    const textvalues = e.map((e) => e);
    setTitle(textvalues[0])
    setSlogan(textvalues[1])
  }
  
  return (
    <Router>
      <AppContext.Provider>
    <div>
      <Header />
      <div id="app_div">
        {iconname !=="" && <SvgContainer name={iconname} title={title} slogan={slogan} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<Text parentCallbackText={callbackText} />} />
          <Route path="/icon" element={<Icon parentCallback={callback} />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
    </div>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
