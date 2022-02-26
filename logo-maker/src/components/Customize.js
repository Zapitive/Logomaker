import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Position from "./uiHome/TextCustomcomponents/Position";
import TextColor from "./uiHome/TextCustomcomponents/TextColor";

function Customize(){   
    const {setIconPosi,iconPosi,iconcolor,setIconColor,bgcolor,setBgColor}=useContext(AppContext)

    const positionChange = (e) =>{
        const values = e
        const x=values[0],y=values[1]
        setIconPosi({x,y})
    }

    const colorChange = (e) =>{
        setIconColor(e)
    }

    const BgChange = (e) =>{
        setBgColor(e)
    }

    return(
            <div className="work_div">
                <h1>Icon Position:</h1>
                <Position handleposition={positionChange} currentx={iconPosi.x} currenty={iconPosi.y} />
                <h1>Icon Color:</h1>
                <TextColor ParentCallback={colorChange} color={iconcolor}/>
                <h1>Background Color:</h1>
                <TextColor ParentCallback={BgChange} color={bgcolor}/>
            </div>
    )

}

export default Customize