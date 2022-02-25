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

  const[titlecolor,setTitleColor]=useState({r: '225',g: '155',b: '99',a: '2'})

  const [iconname,setIconname] = useState("")
  const [title,setTitle] = useState("")
  const [slogan,setSlogan] = useState("")
  const [x,setX] = useState(170)
  const [y,setY] = useState(160)

  
  
  return (
    <Router>
      <AppContext.Provider value={{setTitle,setX,setY,setSlogan,setIconname,setTitleColor,
        title,slogan,iconname,x,y,titlecolor}}>
    <div>
      <Header />
      <div id="app_div">
        <SvgContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<Text/>} />
          <Route path="/icon" element={<Icon/>} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
    </div>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
