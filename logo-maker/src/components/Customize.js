import React, { useState } from "react";
import ColorPicker from "./uiHome/ColorPicker";


function Customize(){   

    const[color,setColor]=useState({r: '225',
    g: '155',
    b: '99',
    a: '2'})

    const callback = (e) =>{
        setColor(e)
    }

    const styles ={
        color:`rgba(${ color.r }, ${color.g }, ${ color.b }, ${ color.a })`
    }

    return(
            <div className="work_div">
                <h1 style={styles}>Hello</h1>
                <ColorPicker ParentCallback={callback}/>
            </div>
    )

}

export default Customize