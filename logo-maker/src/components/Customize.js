import React from "react";
import ColorPicker from "./uiHome/ColorPicker";
import TextCustomize from "./uiHome/TextCustomize";

function Customize(){

    return(
            <div className="work_div">
                <TextCustomize />
                  <ColorPicker />
            </div>
    )

}

export default Customize