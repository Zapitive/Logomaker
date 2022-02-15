import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function RouteApp(){

    const [companyName,setCompanyName] = useState("")

return(
    <Router>
        <div>  
            <Nav />
            <Routes>
            <Route path='/' element={<Home props={companyName} />} />
            <Route path='/about' element={<About/>} />
            <Route path="/shop" element={<Shop/>} />
            </Routes>
        </div>
    </Router>
)
}

export default RouteApp;