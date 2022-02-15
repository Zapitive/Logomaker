import React from "react";
import * as FontAwesome from "react-icons/fa";
import SvgContainer from "./uiHome/SvgContainer";

const handleClick = (e) =>{
  e.preventDefault()
  console.log("clicked beer")
}

function Icon(){
//Check onclick on component in react
    const Icon = (props) => {
        const { iconName, size, color } = props;
        const icon = React.createElement(FontAwesome[iconName]);
        return <div style={{ fontSize: size, color: color }} >{icon}</div>;
      };
      
      const App = () => {
        const iconString = "FaBeer";
        const beer = React.createElement(FontAwesome[iconString]);
        return (
          <div>
            <h2>Start editing to see some magic happen {"\u2728"}</h2>
            <FontAwesome.FaBeer onClick={handleClick} />
            <div style={{ fontSize: 50, color: "orange" }} onClick={handleClick} >{beer}</div>
            <Icon iconName={"FaBeer"} size={50} color="orange" onClick={handleClick} />
          </div>
        );
      };

    return(
            <div className="work_div">
              <SvgContainer />
              <App />
            </div>
    )

}

export default Icon