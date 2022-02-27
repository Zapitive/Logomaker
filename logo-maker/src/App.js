import React, { useState,createContext, useEffect } from "react";
import Home from "./components/Home";
import SvgContainer from "./components/uiHome/SvgContainer";
import Text from "./components/Text";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/uiHome/Header";
import Icon from "./components/Icon";
import Customize from "./components/Customize";
import Download from "./components/Download";

export const AppContext = createContext(null)

function App() {

  const[iconSize,setIconSize]=useState(120)
  const[background,setBackground]=useState(false)
  const[titlecolor,setTitleColor]=useState({r: '225',g: '155',b: '99',a: '2'})
  const[slogancolor,setSloganColor]=useState({r: '225',g: '155',b: '99',a: '2'})
  const[iconcolor,setIconColor]=useState({r: '45',g: '42',b: '50',a: '1'})
  const[bgcolor,setBgColor]=useState({r: '255',g: '255',b: '255',a: '100'})
  const[iconPosi,setIconPosi]=useState({x:125,y:125})
  const[titleStroke,setTitleStroke]=useState(false)
  const[titleStrokeWidth,setTitleStrokeWidth]=useState(1)
  const[titleStrokeColor,setTitleStrokeColor]=useState({r: '255',g: '255',b: '255',a: '100'})
  const[sloganStroke,setSloganStroke]=useState(false)
  const[sloganStrokeWidth,setSloganStrokeWidth]=useState(0)
  const[sloganStrokeColor,setSloganStrokeColor]=useState({r: '255',g: '255',b: '255',a: '100'})
  const [fontStyle,setFontStyle] = useState("")
  const [titleAngle,setTitleAngle] = useState(0)
  const [titleSize,setTitleSize] = useState(52)
  const [sloganfontStyle,setSloganFontStyle] = useState("")
  const [sloganAngle,setSloganAngle] = useState(0)
  const [sloganSize,setSloganSize] = useState(12)
  const [iconname,setIconname] = useState("")
  const [title,setTitle] = useState("")
  const [slogan,setSlogan] = useState("")
  const[sloganPosi,setSloganPosi]=useState({x:125,y:125})
  const[titlePosi,setTitlePosi]=useState({x:125,y:125})
  
//   useEffect(()=>{
//     console.log(bgcolor)
// })
  
  return (
    <Router>
      <AppContext.Provider value={{setTitle,setSlogan,setIconname,setTitleColor,setIconPosi,setIconColor,setSloganStroke,setSloganColor,setSloganStrokeWidth,setTitleStrokeColor,setSloganStrokeColor,setSloganAngle,
        setBgColor,setFontStyle,setSloganColor,setSloganFontStyle,setSloganPosi,setTitlePosi,setTitleSize,setTitleAngle,setTitleStroke,setTitleStrokeWidth,
        setSloganSize,setBackground,setIconSize,
        title,slogan,iconname,titlecolor,iconPosi,iconcolor,bgcolor,fontStyle,sloganPosi,slogancolor,sloganfontStyle,titlePosi,titleSize,titleAngle,titleStroke,titleStrokeWidth,titleStrokeColor,
        sloganStroke,sloganStrokeWidth,sloganStrokeColor,sloganAngle,sloganSize,background,iconSize}}>
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
