import React, { useState } from "react";
import LogoTitle from "./uiHome/LogoTitle";

function Text({parentCallbackText}){

    const callback = (e)=>{
        // e.map((ed) => {
        //     console.log(ed)
        // })
       parentCallbackText(e)
    }
    
    return(
            <div className="work_div">
                 <LogoTitle parentCallback={callback}/>
            </div>
    )

}

export default Text