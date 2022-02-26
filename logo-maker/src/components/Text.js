import React from "react";
import LogoSlogan from "./uiHome/LogoSlogan";
import LogoTitle from "./uiHome/LogoTitle";
import 'react-awesome-slider/dist/styles.css';


function Text(){
    
    return(
            <div className="work_div">
                    <LogoTitle/>
                    <LogoSlogan />
            </div>
    )

}

export default Text