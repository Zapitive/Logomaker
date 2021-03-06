import React, { useReducer, useContext} from 'react'
import * as FontAwesome from "react-icons/fa";
import * as Gi from "react-icons/gi";
import { AppContext } from '../../App';

export default function SvgIcon() {
    const {iconname,iconcolor,iconSize} = useContext(AppContext)

    

    const iconstyle ={
        fontSize: iconSize,
        color: `rgba(${iconcolor.r }, ${iconcolor.g }, ${iconcolor.b }, ${iconcolor.a })`,
        stroke:"#fff"
      }

      
      const icon = React.createElement(FontAwesome[iconname],{style: iconstyle});
      
      
  
      

  return (
    <>
    {iconname && icon}
    </>
  )
}
