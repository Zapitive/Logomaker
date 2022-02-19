import React from "react";
import * as FontAwesome from "react-icons/fa";
import Iconselection from "./uiHome/Iconselection";


function Icon({parentCallback}){

  

  const Callback = (iconname) =>{
    parentCallback(iconname)
  }

    return(
            <div className="work_div">
              <h1>Select Icon</h1>
              <Iconselection grandParentCallback={Callback} />
            </div>
    )

}

export default Icon