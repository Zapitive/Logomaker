import React, { useState,createContext, useEffect } from "react";
import Home from "./components/Home";
import SvgContainer from "./components/uiHome/SvgContainer";
import Text from "./components/Text";
import "./css/header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/uiHome/Header";
import Icon from "./components/Icon";
import Customize from "./components/Customize";
import Download from "./components/Download";

export const AppContext = createContext(null)

function App() {



  const[titlecolor,setTitleColor]=useState({r: '225',g: '155',b: '99',a: '2'})
  const[slogancolor,setSloganColor]=useState({r: '225',g: '155',b: '99',a: '2'})
  const[iconcolor,setIconColor]=useState({r: '225',g: '155',b: '99',a: '2'})
  const[bgcolor,setBgColor]=useState({r: '255',g: '255',b: '255',a: '100'})
  const[iconPosi,setIconPosi]=useState({x:125,y:125})
  const [fontStyle,setFontStyle] = useState("")
  const [sloganfontStyle,setSloganFontStyle] = useState("")
  const [iconname,setIconname] = useState("")
  const [title,setTitle] = useState("")
  const [slogan,setSlogan] = useState("")
  const[sloganPosi,setSloganPosi]=useState({x:125,y:125})
  const[titlePosi,setTitlePosi]=useState({x:125,y:125})
  const [x,setX] = useState(170)
  const [y,setY] = useState(160)

//   useEffect(()=>{
//     console.log(bgcolor)
// })
  
  return (
    <Router>
      <AppContext.Provider value={{setTitle,setX,setY,setSlogan,setIconname,setTitleColor,setIconPosi,setIconColor,
        setBgColor,setFontStyle,setSloganColor,setSloganFontStyle,setSloganPosi,setTitlePosi,
        title,slogan,iconname,x,y,titlecolor,iconPosi,iconcolor,bgcolor,fontStyle,sloganPosi,slogancolor,sloganfontStyle,titlePosi}}>
    <div>
      <Header />
      <div id="app_div">
        <SvgContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<Text/>} />
          <Route path="/icon" element={<Icon/>} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </div>
    </AppContext.Provider>
    </Router>
  );
}

export default App;
