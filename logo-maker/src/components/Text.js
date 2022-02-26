import React from "react";
import LogoSlogan from "./uiHome/LogoSlogan";
import LogoTitle from "./uiHome/LogoTitle";
import 'react-awesome-slider/dist/styles.css';


function Text(){
    
    return(
        <div className="work_div">
            <div className="texts_div">
                <LogoTitle />
                <LogoSlogan />
            </div>
        </div>
    )

}

export default Text