import React from "react";
import Home from "./components/Home";
import Text from "./components/Text";
import "./css/header.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/uiHome/Header";
import Icon from "./components/Icon";
import Customize from "./components/Customize";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
