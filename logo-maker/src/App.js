import React, { useState } from "react";
import Home from "./components/Home";
import SvgContainer from "./components/uiHome/SvgContainer";
import Text from "./components/Text";
import "./css/header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/uiHome/Header";
import Icon from "./components/Icon";
import Customize from "./components/Customize";

function App() {

  const [iconname,setIconname] = useState("")

  const callback = (e) =>{
    setIconname(e)
  }

  return (
    <Router>
    <div>
      <Header />
      <div id="app_div">
        <SvgContainer name={iconname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<Text />} />
          <Route path="/icon" element={<Icon parentCallback={callback} />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
