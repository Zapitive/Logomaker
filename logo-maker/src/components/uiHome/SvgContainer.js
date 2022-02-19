import React, { useState,useReducer, useEffect } from 'react'
import * as FontAwesome from "react-icons/fa";

export default function SvgContainer({name}) {
  const [iconName,setIconName] = useState("FaApple")

    const reducer = (state,action) =>{
        switch(action.type){
          default:
            return state
        }
      }

      
    
       const handleIconClick = (e)=>{
           e.preventDefault()
          console.log("clicked icon")
          setIconName(name)
      }

    
    const [state,dispatch] = useReducer(reducer,{color:"#f001f4",fontSize:"120"})
    
 
    const icon = React.createElement(FontAwesome[iconName],
        {style: {fontSize: state.fontSize,color: state.color},
        onClick: handleIconClick
    });

    const Icon = (props) => {
        const { iconName, size, color } = props;
        const icon = React.createElement(FontAwesome[iconName]);
        return <div style={{ fontSize: size, color: color }} >{icon}</div>;
      };

      

  return (
    <div id='Svg_main'>
        <svg width="200px" height="200px" >
            {icon}
        </svg>
    </div>
  )
}
