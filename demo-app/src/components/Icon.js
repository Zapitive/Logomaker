import React from "react";
import * as FontAwesome from "react-icons/fa";

function Icon(){
//Check onclick on component in react
    const Icon = (props) => {
        const { iconName, size, color } = props;
        const icon = React.createElement(FontAwesome[iconName]);
        return <div style={{ fontSize: size, color: color }}>{icon}</div>;
      };
      
      const App = () => {
        const iconString = "FaBeer";
        const beer = React.createElement(FontAwesome[iconString]);
        return (
          <div>
            <h2>Start editing to see some magic happen {"\u2728"}</h2>
            <FontAwesome.FaBeer />
            <div style={{ fontSize: 50, color: "orange" }}>{beer}</div>
            <Icon iconName={"FaBeer"} size={50} color="orange"  />
          </div>
        );
      };

    return(
            <div id="icon_div">
                  <App />
            </div>
    )

}

export default Icon