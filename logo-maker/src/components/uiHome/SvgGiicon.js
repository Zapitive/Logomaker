import React, { useReducer, useContext} from 'react'
import * as Gi from "react-icons/gi";
import { AppContext } from '../../App';

export default function SvgGiicon() {
    const {iconname,iconcolor,iconSize} = useContext(AppContext)

    
      
      


    const iconstyle ={
        fontSize: iconSize,
        color: `rgba(${iconcolor.r }, ${iconcolor.g }, ${iconcolor.b }, ${iconcolor.a })`,
        stroke:"#fff"
      }

      
      const icon = React.createElement(Gi[iconname],{style: iconstyle});
      
      
  
      

  return (
    <>
    {icon}
    </>
  )
}
