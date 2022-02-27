import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import IconSize from "./uiHome/IconSize";
import Position from "./uiHome/TextCustomcomponents/Position";
import TextColor from "./uiHome/TextCustomcomponents/TextColor";

function Customize(){   
    const {setIconPosi,iconPosi,iconcolor,setIconColor,bgcolor,setBgColor,background,setBackground,setIconSize,iconSize}=useContext(AppContext)

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

    const handleChange =(e)=>{
        setBackground(!background)
    }

    const sizeChange =(e)=>{
        setIconSize(e)
    }

    return(
            <div className="work_div">
                <h1>Icon Position:</h1>
                <Position handleposition={positionChange} currentx={iconPosi.x} currenty={iconPosi.y} />
                <h1>Icon Color:</h1>
                <TextColor ParentCallback={colorChange} color={iconcolor}/>
                <h1>Icon Size</h1>
                <IconSize ParentCallback={sizeChange} size={iconSize} />
                <h1>Background Color:</h1>
                <br />
                <input type="checkbox" checked={background} onChange={handleChange}/>
                <label>Background</label>
                {background && <TextColor ParentCallback={BgChange} color={bgcolor}/>}
                
            </div>
    )

}

export default Customize