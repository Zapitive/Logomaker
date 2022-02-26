import React, { useReducer, useContext} from 'react'
import * as FontAwesome from "react-icons/fa";
import { AppContext } from '../../App';

export default function SvgIcon() {
    const {iconname,iconcolor} = useContext(AppContext)

    const reducer = (state,action) =>{
        switch(action.type){
          default:
            return state
        }
      }
      
    const [state,dispatch] = useReducer(reducer,{fontSize:"120"})

    const iconstyle ={
        fontSize: state.fontSize,
        color: `rgba(${iconcolor.r }, ${iconcolor.g }, ${iconcolor.b }, ${iconcolor.a })`,
        stroke:"#fff"
      }

    const icon = React.createElement(FontAwesome[iconname || "FaApple"],
        {style: iconstyle});

  return (
    <>
    {icon}
    </>
  )
}
