import React, { useContext, useReducer } from 'react'
import * as FontAwesome from "react-icons/fa";
import { AppContext } from '../../App';



export default function Icongenerator({name}) {

  const{setIconname} = useContext(AppContext)

  const reducer = (state,action) =>{
    switch(action.type){
      default:
        return state
    }
  }

  const onIconClick = ()=>{
    setIconname(name)
    
}

  const [state,dispatch] = useReducer(reducer,{color:"#2D2A32",fontSize:"80"})
  const icon = React.createElement(FontAwesome[name],{style: {fontSize: state.fontSize,color: state.color},onClick: onIconClick})



  return (
    <>
    {icon}
    </>
    
  )
}
