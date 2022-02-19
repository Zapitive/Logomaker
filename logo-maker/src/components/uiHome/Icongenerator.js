import React, { useState,useReducer } from 'react'
import * as FontAwesome from "react-icons/fa";

export default function Icongenerator({name,parentCallback}) {

  const [selectedIcon,setSelectedIcon] = useState("")

  const reducer = (state,action) =>{
    switch(action.type){
      default:
        return state
    }
  }

  const onIconClick = (e)=>{
    parentCallback(name)
}

  const [state,dispatch] = useReducer(reducer,{color:"#f4f104",fontSize:"80"})
  const icon = React.createElement(FontAwesome[name],{style: {fontSize: state.fontSize,color: state.color},onClick: onIconClick})



  return (
    <>
    {icon}
    </>
    
  )
}
